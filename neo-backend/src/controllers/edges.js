import EdgeModel from '../models/edgeModel';
import Papa from 'papaparse';
import fs from 'fs';
import { driver } from './driver';

const edgeModel = new EdgeModel('edges');
// util function
function edgesWrite(edges){
  const columns = 'acc_a, tx_direction, acc_b, amt, seq'
  let values = ``;
  console.log(edges.length)
  for(const k in edges){
    const {acc_a, tx_direction, acc_b, amt, seq} = edges[k];
    let v = (k == edges.length - 1 ? 
      `('${acc_a}', '${tx_direction}', '${acc_b}', '${amt}', '${seq}')` :
      `('${acc_a}', '${tx_direction}', '${acc_b}', '${amt}', '${seq}'),`);
    values += v;
  }
  try {
    const data = edgeModel.insertWithConflict(columns, values);
  } catch (err){

  }
}

export const syncEdge = async (req, res) => {
  try {
    const data = await edgeModel.select('acc_a, tx_direction, acc_b, amt, seq', ' where import_flag=false');
    let query = "MATCH (e1:Person{acc: $acc_a}), (e2:Person{acc: $acc_b}) CREATE (e1)-[r:trans {amt: $amt, seq: $seq}]->(e2) RETURN r.seq as seq";
    data.rows.forEach(function(e){
      var session = driver.session()
      var writeTxResultPromise = session.writeTransaction(async txc => {
        // used transaction will be committed automatically, no need for explicit commit/rollback
        var result = await txc.run(
          query, e
        )
        // at this point it is possible to either return the result or process it and return the
        // result of processing it is also possible to run more statements in the same transaction
        return result.records.map(record => record.get('seq'))
      })
      // returned Promise can be later consumed like this:
      writeTxResultPromise
        .then(edgesArray => {
          console.log(edgesArray)
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => session.close())
    })
    console.log('committed')
    // If everything fines
    const updata = await edgeModel.updateFlag();
    res.status(200).json({status: "successful"})
  } catch (error) {
    res.status(200).json({ nodes: error.stack });
  } 
}

export const edgesPage = async (req, res) =>{
  try {
    const data = await edgeModel.select('acc_a, tx_direction, acc_b, amt, seq', ' where import_flag=false');
    res.status(200).json({ edges: data.rows });
  } catch (err) {
    res.status(200).json({ edges: err.stack });
  }
}

export const addEdges = (req, res) =>{
    try {
        if (!req.files) {
          res.send({
            status: false,
            message: 'No file uploaded',
          });
        } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let edges = req.files.edges;
          let edgesAry;
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          edges.mv('./uploads/' + edges.name);
          // parse csvString
          fs.readFile('./uploads/' + edges.name, 'utf8', function(err, data){
            if (err) {
                return console.error(err);
            }
            Papa.parse(data, {
              complete: function(results){
                edgesAry = results.data;
                edgesWrite(edgesAry);
                // send successful response
                res.send({
                  status: true,
                  message: 'File is uploaded',
                  data: {
                    name: edges.name,
                    mimetype: edges.mimetype,
                    size: edges.size,
                  },
                });
              },
              header: true
            })
            console.log("File opened!!");  
          });
          // Postgres Write

        }
      } catch (err) {
        res.status(500).send(err);
      }
};
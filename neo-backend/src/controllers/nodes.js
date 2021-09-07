import NodeModel from '../models/nodeModel';
// import Papa from 'papaparse';
import csv from 'csv-parser';
import fs from 'fs';
import { driver } from './driver';

const nodeModel = new NodeModel('nodes');
// util function
function nodesWrite(nodes){
  console.log('nodesWrite: ' + nodes.length)
  const columns = 'acc, id, name, company'
  let values = ``
  for(const k in nodes){
    const {acc, id, name, company} = nodes[k];
    let v = (k == nodes.length - 1 ? '' : ',');
    values += `('${acc}', '${id}', '${name}', '${company}')` + v
  }
  try {
    const data = nodeModel.insertWithConflict(columns, values);
  } catch (err){

  }
}

export const syncNode = async (req, res) => {
  try {
    const data = await nodeModel.select('acc, id, name, company', ' where import_flag=false');
    let query = "CREATE (alice:Person {acc: $acc, id: $id, name : $name, company: $company}) RETURN alice.name AS name";
    data.rows.forEach(function(e){
      var session = driver.session()
      var writeTxResultPromise = session.writeTransaction(async txc => {
        // used transaction will be committed automatically, no need for explicit commit/rollback
        var result = await txc.run(
          query, e
        )
        // at this point it is possible to either return the result or process it and return the
        // result of processing it is also possible to run more statements in the same transaction
        return result.records.map(record => record.get('name'))
      })
      // returned Promise can be later consumed like this:
      writeTxResultPromise
        .then(namesArray => {
          console.log(namesArray)
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => session.close())
    })
    const updata = await nodeModel.updateFlag();
    res.status(200).json({status: "successful"})
  } catch (error) {
    res.status(200).json({ nodes: error.stack });
  }
}

export const nodesPage = async (req, res) => {
  try {
    const data = await nodeModel.select('acc, id, name, company');
    res.status(200).json({ nodes: data.rows });
  } catch (err) {
    res.status(200).json({ nodes: err.stack });
  }
}

export const addNodes = (req, res) =>{
    try {
        if (!req.files) {
          res.send({
            status: false,
            message: 'No file uploaded',
          });
        } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let nodes = req.files.nodes;
          let nodesAry;
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          nodes.mv('./uploads/' + nodes.name);
          // parse csvString
          const results = [];

          fs.createReadStream('./uploads/' + nodes.name, 'utf8')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
              nodesWrite(results)
            });
          
          console.log("File opened!!"); 
          res.send({
            status: true,
            message: 'File is uploaded and parsed',
            data: {
              name: nodes.name,
              mimetype: nodes.mimetype,
              size: nodes.size,
              length: nodes.length,
            }
          });
        }
      } catch (err) {
        res.status(500).send(err);
      }
};
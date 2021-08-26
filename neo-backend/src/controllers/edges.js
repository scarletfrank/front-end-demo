import EdgeModel from '../models/edgeModel';
import Papa from 'papaparse';
import fs from 'fs';

const edgeModel = new EdgeModel('edges');
// util function
function nodesWrite(nodes){
  const columns = 'acc_a, tx_direction, acc_b, amt, seq'
  let values = ``;
  console.log(nodes.length)
  for(const k in nodes){
    const {acc_a, tx_direction, acc_b, amt, seq} = nodes[k];
    let v = (k == nodes.length - 1 ? 
      `('${acc_a}', '${tx_direction}', '${acc_b}', '${amt}', '${seq}')` :
      `('${acc_a}', '${tx_direction}', '${acc_b}', '${amt}', '${seq}'),`);
    values += v;
  }
  try {
    const data = edgeModel.insertWithConflict(columns, values);
  } catch (err){

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
                nodesWrite(edgesAry);
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
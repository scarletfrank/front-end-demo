import NodeModel from '../models/nodeModel';
import Papa from 'papaparse';
import fs from 'fs';

const nodeModel = new NodeModel('nodes');
// util function
function nodesWrite(nodes){
  const columns = 'acc, id, name, company'
  let values = ``;
  console.log(nodes.length)
  for(const k in nodes){
    const {acc, id, name, company} = nodes[k];
    let v = (k == nodes.length - 1 ? `('${acc}', '${id}', '${name}', '${company}')`: `('${acc}', '${id}', '${name}', '${company}'),`);
    values += v;
  }
  try {
    const data = nodeModel.insertWithConflict(columns, values);
  } catch (err){

  }
}

export const nodesPage = async (req, res) => {
  try {
    const data = await nodeModel.select('acc, id, name, company', ' where import_flag=false');
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
          fs.readFile('./uploads/' + nodes.name, 'utf8', function(err, data){
            if (err) {
                return console.error(err);
            }
            Papa.parse(data, {
              complete: function(results){
                nodesAry = results.data;
                nodesWrite(nodesAry);
                // send successful response
                res.send({
                  status: true,
                  message: 'File is uploaded',
                  data: {
                    name: nodes.name,
                    mimetype: nodes.mimetype,
                    size: nodes.size,
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
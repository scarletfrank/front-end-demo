import React from 'react';
import Graphin from '@antv/graphin';
import { MiniMap } from '@antv/graphin-components';
import { useReadCypher } from "use-neo4j";
import IconLoader from '@antv/graphin-icons';
import NeoG6 from "./neog6";
import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS


const icons = Graphin.registerFontFamily(IconLoader);

function customStyle(g6Data){
  // console.log(g6Data)
  if (g6Data.nodes.length !== 0){
    for(const k in g6Data.nodes){
      const { name} = g6Data.nodes[k]
      g6Data.nodes[k]['style'] = {
        label: {value: name},
        icon: {
          type: 'font',
          fontFamily: 'graphin',
          value: icons.user,
        }
      }
    }
    for(const k in g6Data.edges){
      const {amt} = g6Data.edges[k];
      g6Data.edges[k]['style'] = {
        label: {value: amt, fill:'blue', fontSize: 15}, 
        keyshape: {stroke: 'red', lineWidth: 2}
      }
    }
  } 
  return g6Data
}

const Core = () => {
  // const data = Utils.mock(10).circle().graphin();
  const { cypher, error, loading, records } = useReadCypher(
    "MATCH (n:Person)-[re]-(b) RETURN n, re, b LIMIT 10"
  );
  // Default to Loading Message
  let result = <div className="ui active dimmer">Loading...</div>;
  let g6 = new NeoG6();
  // Was there an error om the query?
  if (error) {
    result = <div className="ui negative message">{error.message}</div>;
  } else if (!loading) {
    if (records instanceof Array) {
      g6.toG6Format(records)
    }
    let styleG6data = customStyle(g6.data)
    result = (
      <div>
        <Graphin height='750' data={styleG6data} layout={{ type:'graphin-force' }}>
          <MiniMap visible/>
        </Graphin>
      </div>
    );
  }
  return (
    <div className="App">
      <pre>{cypher}</pre>
      {result}
    </div>
  );
};

export default Core;
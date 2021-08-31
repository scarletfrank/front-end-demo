import React, {useEffect } from 'react';
import Graphin, {Utils} from '@antv/graphin';
import { MiniMap} from '@antv/graphin-components';
import { useReadCypher } from "use-neo4j";

// 引入资源文件
import iconLoader from '@antv/graphin-icons';
import '@antv/graphin-icons/dist/index.css';

import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS

import NeoG6 from "./neog6";


// 注册到 Graphin 中
const { fontFamily} = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);


function customStyle(g6Data){

  if (g6Data.nodes.length !== 0){
    for(const k in g6Data.nodes){
      const { id, name} = g6Data.nodes[k]
      g6Data.nodes[k]['style'] = {
        keyshape: {size:30},
        label: {value: name, position:'left'},
        icon: {
          type: 'font',
          fontFamily: fontFamily,
          value: icons.user,
        },
        badges: [
          {
            position: 'RT',
            type: 'text',
            value: id,
            size: [15, 15],
            fill: 'red',
            color: '#fff',
          },
        ],
      }
    }
    for(const k in g6Data.edges){
      const {amt} = g6Data.edges[k];
      g6Data.edges[k]['style'] = {
        label: {value: `${amt}`, fill:'blue', fontSize: 10}, 
        keyshape: {stroke: 'red', lineWidth: 2}
      }
    }
  } 
  // Utils.processEdges
  const processEdges = Utils.processEdges([...g6Data.edges], { poly: 50, loop: 10 }) 
  return g6Data
}

const Core = (props) => {
  // const data = Utils.mock(10).circle().graphin();
  const { cypher, error, loading, records, run } = useReadCypher(
    props.query
  );
  useEffect(()=>{
   run({cypher}) 
  }, [props.query])

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
        <Graphin height='650' data={styleG6data} layout={{ type:'dagre' } } fitView >
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
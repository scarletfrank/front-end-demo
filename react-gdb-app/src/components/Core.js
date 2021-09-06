import React, { useEffect } from 'react';
import Graphin, { GraphinContext, Utils } from '@antv/graphin';
import { Tooltip, MiniMap, ContextMenu  } from '@antv/graphin-components';
import {message, Card} from 'antd';
import { TagFilled, DeleteFilled, ExpandAltOutlined } from '@ant-design/icons';
import { WaterMark } from '@ant-design/pro-layout';
import { useReadCypher } from "use-neo4j";

// 引入资源文件
import iconLoader from '@antv/graphin-icons';
import '@antv/graphin-icons/dist/index.css';

import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS

import NeoG6 from "./neog6";


// 注册到 Graphin 中
const { fontFamily } = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);


function customStyle(g6Data, poly) {
  if (g6Data.nodes.length !== 0) {
    for (const k in g6Data.nodes) {
      const {  name } = g6Data.nodes[k]
      let nodeColor = Math.random() > 0.5 ? 'yellow' : 'blue'
      let nodeIcon = Math.random() > 0.5 ? icons.eye : icons.user
      g6Data.nodes[k]['style'] = {
        keyshape: { 
          size: 40 , 
          fill: nodeColor,
          fillOpacity: 0.2,
        },
        label: { value: name, position: 'right' },
        icon: {
          type: 'font',
          fontFamily: fontFamily,
          value: nodeIcon,
        },
        badges: [
          {
            position: 'RT',
            type: 'text',
            value: Math.floor(Math.random()),
            size: [15, 15],
            fill: 'red',
            color: '#fff',
          },
        ],
      }
    }
    for (const k in g6Data.edges) {
      const { amt } = g6Data.edges[k];
      g6Data.edges[k]['style'] = {
        label: { value: `${amt}`, fill: 'blue', fontSize: 10 },
        keyshape: { 
          stroke: 'grey', 
          lineWidth: 2
        }
      }
    }
  }
  if (poly === "true") {
    // Utils.processEdges
    const processEdges = Utils.processEdges([...g6Data.edges], { poly: 50, loop: 10 })
  }
  return g6Data
}

const CustomTooltip = () => {
  const { tooltip } = React.useContext(GraphinContext);
  const context = tooltip.node;
  const { item } = context;
  const model = item && item.getModel();
  let acc = model.acc
  let pat = /(\d{4})\d*(\d{4})/
  let desc_acc = acc.replace(pat,'$1****$2');
  return (
    // @ts-ignore
    <div>
      <Card title="节点信息" style={{ width: '200px' }}>
        公司: {model.company}
        <br></br>
        账户: {desc_acc}
      </Card>
    </div>
  );
};

const { Menu } = ContextMenu;
const options = [
  {
    key: 'tag',
    icon: <TagFilled />,
    name: '打标',
  },
  {
    key: 'delete',
    icon: <DeleteFilled />,
    name: '删除',
  },
  {
    key: 'expand',
    icon: <ExpandAltOutlined />,
    name: '扩散',
  },
];
const CanvasMenu = () => {
  const { graph, contextmenu } = React.useContext(GraphinContext);
  const context = contextmenu.canvas;
  const handleDownload = () => {
    graph.downloadFullImage('canvas-contextmenu');
    context.handleClose();
  };
  const handleClear = () => {
    message.info(`清除画布成功`);
    context.handleClose();
  };
  const handleStopLayout = () => {
    message.info(`停止布局成功`);
    context.handleClose();
  };
  return (
    <Menu bindType="canvas">
      <Menu.Item onClick={handleClear}>清除画布</Menu.Item>
      <Menu.Item onClick={handleStopLayout}>停止布局</Menu.Item>
      <Menu.Item onClick={handleDownload}>下载画布</Menu.Item>
    </Menu>
  );
};


const Core = (props) => {
  // const data = Utils.mock(10).circle().graphin();
  const { cypher, error, loading, records, run } = useReadCypher(
    props.query
  );
  useEffect(() => {
    run({ cypher })
  }, [props.query])
  const handleChange = (menuItem, menuData) => {
    message.info(`元素：${menuData.id}，动作：${menuItem.name}`);
  };

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
    let styleG6data = customStyle(g6.data, props.poly)
    result = (
      <WaterMark content="scarlet">
            <Graphin height='750' data={styleG6data} layout={{ type: props.layout }} fitView >
            <MiniMap visible/>
            <Tooltip bindType="node">
              <CustomTooltip />
            </Tooltip>
            <ContextMenu style={{ width: '80px' }}>
              <Menu options={options} onChange={handleChange} bindType="node" />
            </ContextMenu>
            <ContextMenu style={{ width: '80px' }} bindType="canvas">
              <CanvasMenu />
            </ContextMenu>
            <ContextMenu style={{ width: '120px' }} bindType="edge">
              <Menu
                options={options.map(item => {
                  return { ...item, name: `${item.name}-EDGE` };
                })}
                onChange={handleChange}
                bindType="edge"
              />
            </ContextMenu>
            </Graphin>
      </WaterMark>
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
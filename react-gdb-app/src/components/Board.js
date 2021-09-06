import React from 'react';
import Core from './Core';
import { Input, Select, InputNumber  } from 'antd';

const { Option } = Select;
const { Search } = Input;

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), 
            query: "MATCH (n:Person)-[re]-(b) RETURN n, re, b LIMIT 500", 
            depth: "2", 
            limit: 1000,
            poly: "false",
            layout: "graphin-force",
            mini: "false"
        };
      }
    onSearch = value => {
        // console.log(value);
        let cypher = "";
        let clause = "MATCH (n:Person)-[re*1.." + this.state.depth + "]-(b) where n.name = '";
        cypher = clause + value + "' RETURN n, re, b LIMIT " + this.state.limit.toString();
        this.setState({
            query: cypher
        })
    }
    handleChange = value => {
        this.setState({depth: value})
    }
    onNumChange = value => {
        console.log('changed', value);
        this.setState({limit: value})
    }
    onPolyChange = value => {
        this.setState({poly: value})
    }
    onLayoutChange = value => {
        this.setState({layout: value})
    }
    render(){
        const query = this.state.query;
        const poly = this.state.poly;
        const layout = this.state.layout;
        // console.log(query);
        return(
            <div>
                <InputNumber min={1} max={10000} defaultValue={1000} onChange={this.onNumChange} />
                <Select defaultValue="二层" style={{ width: 75 }} onChange={this.handleChange}>
                    <Option value="1">一层</Option>
                    <Option value="2">二层</Option>
                    <Option value="3">三层</Option>
                    <Option value="4">四层</Option>
                </Select>
                <Select defaultValue="单边" style={{ width: 70 }} onChange={this.onPolyChange}>
                    <Option value="false">单边</Option>
                    <Option value="true">多边</Option>
                </Select>
                <Select defaultValue="渐进力导" style={{ width: 100 }} onChange={this.onLayoutChange}>
                    <Option value="graphin-force">渐进力导</Option>
                    <Option value="concentric">同心圆</Option>
                    <Option value="dagre">层次</Option>
                    <Option value="circular">环形</Option>
                    <Option value="mds">降纬</Option>
                    <Option value="force">D3力导</Option>
                    <Option value="gForce">G6力导</Option>
                </Select>
                <Search placeholder="搜索" onSearch={this.onSearch} style={{ width: 120 }} />
                <Core query={query} poly={poly} layout={layout}></Core>
            </div>
        )
    }
}

export default Board;
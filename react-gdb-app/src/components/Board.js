import React from 'react';
import Core from './Core';
import { Input } from 'antd';

const { Search } = Input;

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), query: "MATCH (n:Person)-[re]-(b) RETURN n, re, b LIMIT 100"};
      }
    onSearch = value => {
        console.log(value);
        this.setState({
            query: "MATCH (n:Person)-[re]-(b) where n.name = '" + value + "' RETURN n, re, b LIMIT 100"
        })
    }
    render(){
        const query = this.state.query;
        console.log(query);
        return(
            <div>
                <Search placeholder="search node" onSearch={this.onSearch} style={{ width: 200 }} />
                <Core query={query}></Core>
            </div>
        )
    }
}

export default Board;
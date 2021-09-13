import React from "react";
import logo from '../logo.svg';
import '../App.css';

import CmtListItem from "./CmtItem";


class CmtList extends React.Component{
    constructor(){
        super()
        this.state = {
            CommentList: [
                {id: 1, user: '张三', content: '哈哈，沙发'},
                {id: 2, user: '张二', content: '哈哈，床'},
                {id: 3, user: '张四', content: '哈哈，乐乐'},
                {id: 4, user: '张Ⅶ', content: '哈哈，笑了'},
                {id: 5, user: '张⑧', content: '哈哈，电视'},
            ]
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 style={{color: 'red', fontSize: '35px', zIndex: 3, fontWeight: 200}}>评论组件</h1>
                        {this.state.CommentList.map(item => <CmtListItem key={item.id} {...item}></CmtListItem>)}
                </header>
            </div>
        )
    }
}

export default CmtList;
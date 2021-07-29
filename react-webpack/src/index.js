import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';


// const hl = React.createElement('h1', null, '默认H1');
// const d1v = React.createElement('div', null, 'Div元素', hl);
// JSX
let a = 10;
let s = 'Hello, World'
let boo = true

const arr = [
    <h2>h2</h2>,
    <h3>h3</h3>
]
// Each child in a list should have a unique "key" prop
// react-game 里也提到过

const attStr = ['Sally', 'Hunter', 'Horizon']
const nameArr = []
// React中，需要把key添加给forEach/map/for循环控制的元素
attStr.forEach(element => {
    const temp = <h5 key={element}>{element}</h5>
    nameArr.push(temp)
});
const d1v =
    <div id="d1v">
        <h4>
            {s}
        </h4>
        {a + 2}
        <hr />
        {boo ? 'True' : 'False'}
        <hr/>
        {attStr.map(item => <h5 key={item}>{item}</h5>
        )}
    </div>

ReactDOM.render(d1v, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '@/components/Login'

const defaultUser = {
    name: '默认用户'
}
const d1v = 
    <div>
        XX系统登录端
        <Login {...defaultUser}></Login>
    </div>

ReactDOM.render(d1v, document.getElementById('app'));
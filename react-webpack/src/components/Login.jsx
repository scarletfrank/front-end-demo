import React from 'react';

// 第一种创建组件的方式
export default function Login(props){
    // return null
    return <div>
        欢迎{props.name}
        <br/>
        <input type="text" placeholder="请输入用户名"></input>
        <br />
        <input type="password" placeholder="请输入密码"></input>
        <br />
    </div>
}


// export default Login
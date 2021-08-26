# README

> 前端大坑，我大受震撼


## 项目列表

- [x] webpack-demo: 前端入门看的第一个网课，然后有了这个`demo`。里面还嵌入了`vue3`和`vue-router`，基本把`webpack`玩明白了，以及更深刻理解了`vue3`，以及`vue-cli`可能帮我做了哪些事情。（以后一定把`vue-dev`这个项目捡起来）
- [x] react-app : `npx create-react-app my-app`，最基础的脚手架。
- [x] react-game: `create-react-app`的脚手架，实现了#字棋，但不知道为啥是`yarn`管理（明明上一个脚手架是`npm`)
- [x] react-webpack: 看阿里云网课，网课似乎更喜欢从零搭建，所以是`webpack`搭建。后面参考别的教程，改成了登录页面。 
- [x] react-gdb-app: 本地存了带`react-router`的项目，用于实现路由。先实现多页面路由，再接入`Graphin`
- [x] neo-backend: 用`Express`模拟一个后端，连接Neo4j数据库和PG数据库
- [ ] react-ui: UI用什么方案，一直没想好...也试过`react-bs`这种，但我感觉可能用`antd`这种会好一点点？
- [ ] antd-demo
- [ ] antd-pro-app
- [ ] angular-app: 为了`zeppelin`前端开发，稍微理解一下项目结构和基础的组件的写法，也是完整完成了一个教程。不过`zeppelin`分为两个前端，一个用的比较旧的版本，`next`版本用的就跟我这个项目里的类似，都是`.ts`为主了。

## 图应用进度

> 基本完成

- [x] react-gdb-app
- [x] neo-backend

目前的问题如下：

1. PapaParse在后端处理CSV的时候，还需要改造成分批处理，对于几千行的CSV，处理都不能完美完成。
2. neo4j-driver，写入后端的时候，产生的错误，不能被捕获到。主要我没学习过`async` `await`关键词。
3. 到底应该什么时候触发PG到Neo4j？目前PapaParse处理CSV，卡住了，此时肯定不能继续执行图数据库写入。所以发出`sync`请求的时候要慎重。

## 资料

1. [React#字棋](https://reactjs.org/tutorial/tutorial.html)
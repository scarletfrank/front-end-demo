# README

## React简介

- 两个概念：
  - library（库）
  - Framework（框架）

> 三大框架互相吸收

- Angular.js
- Vue.js
- React.js

## React与Vue对比

### 组件化方面

1. 模块化：从代码角度分析；把一些可复用的代码，抽离成单个的模块；
2. 组件化：从 **UI界面**角度分析；把一些可复用的UI元素，抽离成单个组件；
3. **组件化有好处**
4. **Vue组件化实现** ：单独的 `.vue`文件
   - template 结构
   - script 行为
   - style 样式
5. **React组件化实现** ：有组件化的概念，但没有单组件模板文件的概念，但都以JS表现（ES6 ES7）

### 移动App开发

- [ ] ReactNative 学习
- [ ] ~~Weex停止孵化~~

## React核心概念

### 虚拟DOM

- **DOM**：浏览器中的概念，用JS对象表示页面上的元素，并提供操作DOM对象的API
- React中的虚拟DOM：框架中的概念，用JS对象来模拟页面上的DOM和DOM嵌套
- 为什么要虚拟实现：为了实现页面中，DOM元素的动态更新

**DOM树** 

> 按需更新：获取新旧DOM树，进行对比 =>
>
> 手动模拟DOM树

*一个网页呈现的过程*：

1. 浏览器请求服务器获取页面
2. 在内存中解析DOM结构，并渲染一颗DOM树
3. 浏览器把DOM树呈现到页面上

```javascript
var div = {
    tagName: 'div',
    attrs:{
        'id': 'mydiv'
    },
    childrens: [
        {
            tagName: 'p',
            attrs: {},
            childrens: []
        }
    ]
}
```

**虚拟DOM** 用JS对象的形式，模拟页面上DOM的嵌套关系

### Diff算法

- **tree diff** 逐层对比
- **component diff** 在进行tree Diff时，每一层中，组件级别的对比，叫做 c.d.
  - 对比前后，组件类型相同，**暂时**认为此组件不需要更新
  - 对比前后，类型不同，则移除旧组件，创建新组件
- **element diff** 在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比

### webpack-react

`webpack`我们之前已经学习过了，课程的主要内容是，新版`webpack`也开始采用 **约定大于配置**的习惯

> 草，open参数还能控制devServer打开哪个浏览器的

#### JSX

>  新增`@babel/preset-react` 

1. **什么情况下需要使用 {}**

    当我们需要在JSX控制的区域内，写JS表达式的时候

2. **字符串数组转换成jsx数组并渲染**

3. **Vue和React中key的作用** 

   `v-for` 或`map`里，主要是要保持状态的时候，就需要新增`key`属性


## 参考资料

- [React.js 阿里云课程](https://edu.aliyun.com/course/1727?spm=5176.10731542.0.0.3eca11d3X5dpf3)


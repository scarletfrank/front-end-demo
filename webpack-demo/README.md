# README

## roadmap

- [x] 引入js
- [x] 根据模板生成html
- [x] 引入css (`css-loader` `style-loader`) 
- [ ] 引入images `url-loader`处理，但不知道为啥压缩出的图片失效
- [x] 引入其他文件(`svg` `woff`)，这里用`url-loader`又正常了...`li`失败 `svg`成功
- [x] 利用babel转换高级语法 

## QA

**Webpack的功能**
1. 处理js文件的依赖关系
2. 处理js的兼容问题，把高级的语法（浏览器不支持），转换成浏览器能正常识别的语法

**Webpack命令执行**

1. webpack采用默认参数
2. 寻找`webpack.config.js`
3. 解析配置文件，取得对象
4. 根据配置对象，拿到入口与出口，执行打包过程

**webpack处理第三方文件类型的过程**

> 只用到了`css`，但是`less`和`scss`类似

1. 发现不是js文件，查找是否有对应的loader规则
2. 如果有，调用对应loader进行处理
3. 调用loader时，从后往前调用
4. 当最后一个loader调用完毕，会把处理结果交给webpack进行打包合并，放入到`output.js`中

**babel配置**

> 这里网课稍微版本落后了一点，许多写法都变了

- ES6引入`class`关键字，在`movies-javascript-bolt`项目中，对于`Movie`对象，还用的`function`方式实现。
- 静态属性（通过类名访问）与实例属性（只能通过实例访问）
- `webpack`只能处理一部分ES6的新语法，更高级语法需要借助第三方loader（用`babel`进行语法降级转换）
- `.babelrc`必须符合JSON语法规范，不能写注释

**学习了这些可以写什么**

虽然没在这个项目里，不过我成功写了一个类似`Neovis.js`的项目，不过因为我想利用更多的`vis.js`特性，所以重新写了一下，不过也才是刚刚能调后台接口的程度，还没写到前端渲染。 

## cheatsheet

```bash
npx webpack
npm run build # package.json 里指定
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

## 参考资料

1. [getting-started](https://webpack.js.org/guides/getting-started/)
2. [loader-style](https://webpack.js.org/loaders/style-loader/)
3. [babel-loader](https://webpack.js.org/loaders/babel-loader/)
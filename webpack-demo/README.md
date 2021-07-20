# README

## roadmap

- [x] 引入js
- [x] 根据模板生成html
- [x] 引入css (`css-loader` `style-loader`) 
- [ ] 引入images `url-loader`处理，但不知道为啥压缩出的图片失效
- [x] 引入其他文件(`svg` `woff`)，这里用`url-loader`又正常了...嗯，但是WSL2环境下失败了 

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

## cheatsheet

```bash
npx webpack
npm run build # package.json 里指定
```

## 参考资料

1. [getting-started](https://webpack.js.org/guides/getting-started/)
2. [loader-style](https://webpack.js.org/loaders/style-loader/)
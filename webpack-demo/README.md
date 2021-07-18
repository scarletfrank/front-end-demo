# README

## QA

**Webpack的功能**
1. 处理js文件的依赖关系
2. 处理js的兼容问题，把高级的语法（浏览器不支持），转换成浏览器能正常识别的语法

**Webpack命令执行**

1. webpack采用默认参数
2. 寻找`webpack.config.js`
3. 解析配置文件，取得对象
4. 根据配置对象，拿到入口与出口，执行打包过程

## cheatsheet

```bash
npx webpack
npm run build # package.json 里指定
```

## 参考资料

1. [getting-started](https://webpack.js.org/guides/getting-started/)
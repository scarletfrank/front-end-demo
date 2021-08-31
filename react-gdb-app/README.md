# README

## 各种React概念

> 今天学习写查询图的时候，涉及到对Core，传入动态参数。
> 根据use-neo4j的文档，花了一个小时调通了，不过基础概念我其实还是很蒙蔽
> 总的来说就是用一个React.Component，包装function component

~~总的来说，用吃饭前大概三个小时，解决了多边和查询的编写方式~~

## Cheatsheet

```bash
npx create-react-app react-gdb-app
cd react-gdb-app
npm start
npm install --save react-router-dom
# npm install antd --save 
# 统一设计语言
npm install @antv/graphin@latest --save
npm install @antv/graphin-components@latest --save
npm install @antv/graphin-icons --save
npm i --save use-neo4j
npm i --save neo4j-driver
# npm install papaparse --save 
# 得由后端express 接口，来处理上传的文件
# 通过一般关系型数据库去重，然后再导入到数据库里
```

## 资料

1. [quick-router](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/)
2. [antd-router](https://www.cnblogs.com/LULULI/p/9670389.html)
3. [antd-upload-manually](https://ant.design/components/upload-cn/#components-upload-demo-upload-manually)
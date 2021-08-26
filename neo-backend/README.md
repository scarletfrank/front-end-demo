# README

## 导入去重的设计

> 因为社区版的Neo4j，不支持指定主键，所以只能自己构建一个系统。
> 想了想还是不用northwind了，我自己拿faker.js写一个更简单一点的，就节点和边的

1. 设计好`queries.js` `queryFunctions.js`，通过这些脚本来建立表格
2. 建立相应的`controllers.js`，对上传文件，进行解析，它会调用`insert or skip`的逻辑来存储节点
3. 当任务完成后，`controllers.js`里的`syncEntity`函数，完成从关系型数据库写入`Neo4j`库，此时，导入完成。


## 资料

1. [express-pg-api](https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/)
2. [express-fileupload-1](https://attacomsian.com/blog/uploading-files-nodejs-express)
3. [express-upload-multer](https://www.bezkoder.com/node-js-express-file-upload/)
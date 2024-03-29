# react-learn-server
server by Node ，work for react-learn project

### express

路由器对象:
一个路由器对象是一个孤立的中间件和路由实例。你可以把它看作是一个 "小型应用"，只能够执行中间件和路由功能。每个Express应用都有一个内置的应用路由器。
router.get('/')
router.post('/')
区别: get请求是从服务器获取数据，post请求是向服务器传送数据

### Node 的观察更新工具 nodemon
用于测试或自动重启**服务器**应用

### 模拟接口请求工具 vscode插件 REST Client

### 数据库 Mongodb

本地调试推荐：
mongodb-memory-server：模拟数据库

测试数据库 Mongo DB Atlas

### jest 测试工具
开发准备：
package.json testEnvironment:true 设置测试环境为node环境
扩展名.test.js来命名我们的测试文件
supertest：测试http请求 结合jest使用

一些语法：
expect 包装结果
toBe 匹配
desscribe 包装测试用例

生命周期：
afterAll 测试执行完毕
beforeEach 每个测试用例执行前

对指定文件测试：
npm test -- filePath

对指定测试用例测试：
npm test -- -t '测试用例名'

### 设置环境变量
NODE_ENV 需安装 cross-env

mongodb 文档型数据库
- 比如user和note的两个模块的设计，它是设计为note存储在user里，并且models的note会关联user，user会关联note。

### 密码加密
bcrypt 用于加密密码，数据库中存储未加密的纯文本密码是不明智的!

testMongodb link: https://cloud.mongodb.com/v2/63fe25b408ccf83793d54619#/metrics/replicaSet/6416941283d7ca6b085469ab/explorer/test

### jsonwebtoken
允许我们生成JSON web tokens

### 无状态通信和服务器端通话

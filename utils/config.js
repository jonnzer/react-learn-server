require('dotenv').config()

const PORT = process.env.PORT

// 根据环境变量判断使用哪个数据库
const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI 
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}
//连接数据库,接收参数app
module.exports = app=>{
    //内部引用mongoose
    const mongoose = require("mongoose")
    //链接mongoedb
    mongoose.connect("mongoose://127.0.0.1:27017/node-vue-moba",{
        useNewUrlParser:true
    })
}
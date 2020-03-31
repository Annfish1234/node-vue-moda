const express = require("express")
const app = express()

//中间件
app.use(require("cors")())
app.use(express.json())

//引用数据库
require('./plugins/db')(app)
//引用路由:同时执行require()(),把app传给他,作为参数.
require('./routes/admin/index')(app)

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
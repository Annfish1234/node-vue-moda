//具体的路由
//导出函数,接收app对象.
module.exports = app=>{
    const express=require("express")
    //定义子路由
    const router = express.Router();
    //找到Category分类
    const Category = require('../../models/Category')
    router.post("/categories",async (req,res)=>{
        //创建模型发送给客户端.
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.get("/categories",async (req,res)=>{
        const data = await Category.find().limit(10)
        res.send(data)
    })
    //挂载子路由
    app.use('/admin/api',router)
}
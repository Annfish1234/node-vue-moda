//模型
const mongoose = require("mongoose")
const categorySchema ={
    name:{type:String}
}
const Category = mongoose.model("Category",new mongoose.Schema(categorySchema))

module.exports =Category
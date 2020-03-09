const express = require("express")

const app = express()
//中间件
app.use(require("cors")())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
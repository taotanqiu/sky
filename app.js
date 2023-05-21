const express = require("express")
const app = express()

const port = process.env.PORT || 5000

app.listen(process.env.PORT || 5000,()=>{
console.log(port,"启动了")
}
)

const {jiu} = require("./routes/index")
app.use("",jiu)


// 


var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("views",__dirname+"/views")
app.set('layout', 'layouts/layout1')

app.use(express.static(__dirname+"/public"))
app.use(express.static("public"))


if (process.env.NODE_ENV !== 'production') {
require("dotenv").config()
}

const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb)
.then(() => console.log('数据库连接上了!'));


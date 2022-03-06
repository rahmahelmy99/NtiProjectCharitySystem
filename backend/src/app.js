const express = require("express")
const app = express()

require("dotenv").config()

require("../database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes =require("../routes/user.routes")
app.use("/api/user",userRoutes) 

const caseRoutes =require("../routes/case.routes")
app.use("/api/case",caseRoutes) 

app.get("*", (req,res)=> res.send( {error:"invalid url"} ) )
module.exports=app
const express = require("express")
const app = express()
app.listen(3456,()=>{
    console.log("port 3456 running")
})

function allbooks(req,res,next){
    console.log("fetching all books")
    next()
}
app.get("/books",allbooks,(req,res)=>{
    return res.send("fetching all books")
})
function singlebooks(req,res,next){
    req.name= req.params.name;
    next()
}
app.get("/books:name",singlebooks,(req,res)=>{
  return res.send({bookName:req.name})  
})

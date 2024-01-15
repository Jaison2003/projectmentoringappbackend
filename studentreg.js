const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const studentregModel = require("./studentregModel/studentregModel")


var studentreg=Express()

studentreg.use(Cors())
studentreg.use(Bodyparser.json())
studentreg.use(Bodyparser.urlencoded({extended:true}))


Mongoose.connect("mongodb+srv://MSI:msi12345@cluster0.bzl6bnv.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})






studentreg.get("/",(req,res)=>{

    res.send("welcome to student reg")
})


studentreg.post("/add",async(req,res)=>{
    let data=new studentregModel(req.body)
    console.log(data)
    await data.save()



    res.send(data)
})
studentreg.get("/viewall",async(req,res)=>{

    let data=await studentregModel.find()
    res.send(data)
})


studentreg.listen(3500)
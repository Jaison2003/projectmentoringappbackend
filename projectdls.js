const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const projectdlsModel = require("./projectdlsModel/projectdlsModel")


var projectdls=Express()

projectdls.use(Cors())
projectdls.use(Bodyparser.json())
projectdls.use(Bodyparser.urlencoded({extended:true}))


Mongoose.connect("mongodb+srv://MSI:msi12345@cluster0.bzl6bnv.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})






projectdls.get("/",(req,res)=>{

    res.send("welcome to student reg")
})


projectdls.post("/add",async(req,res)=>{
    let data=new projectdlsModel(req.body)
    console.log(data)
    await data.save()



    res.send(data)
})
projectdls.get("/viewall",async(req,res)=>{

    let data=await projectdlsModel.find()
    res.send(data)
})


projectdls.listen(5500)
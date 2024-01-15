const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const mentorgradeModel = require("./mentorgradeModel/mentorgradeModel")
const mentorgrademodel = require("./mentorgradeModel/mentorgradeModel")


var mentorgrade=Express()

mentorgrade.use(Cors())
mentorgrade.use(Bodyparser.json())
mentorgrade.use(Bodyparser.urlencoded({extended:true}))


Mongoose.connect("mongodb+srv://MSI:msi12345@cluster0.bzl6bnv.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})






mentorgrade.get("/",(req,res)=>{

    res.send("welcome to mentor grading")
})


mentorgrade.post("/add",async(req,res)=>{
    let data=new mentorgradeModel(req.body)
    console.log(data)
    await data.save()



    res.send(data)
})

mentorgrade.get("/viewall",async(req,res)=>{

    let data=await mentorgradeModel.find()
    res.send(data)
})



mentorgrade.listen(5700)
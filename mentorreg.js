const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const mentorregModel = require("./mentorregmodel/mentorregmodel")
const mentorregmodel = require("./mentorregmodel/mentorregmodel")


var mentorreg=Express()

mentorreg.use(Cors())
mentorreg.use(Bodyparser.json())
mentorreg.use(Bodyparser.urlencoded({extended:true}))


Mongoose.connect("mongodb+srv://MSI:msi12345@cluster0.bzl6bnv.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})






mentorreg.get("/",(req,res)=>{

    res.send("welcome to mentor reg")
})


mentorreg.post("/add",async(req,res)=>{
    let data=new mentorregModel(req.body)
    console.log(data)
    await data.save()



    res.send(data)
})

mentorreg.get("/viewall",async(req,res)=>{

    let data=await mentorregModel.find()
    res.send(data)
})



mentorreg.listen(3700)
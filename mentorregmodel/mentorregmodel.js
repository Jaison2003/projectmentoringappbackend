const Mongoose=require("mongoose")

let regSchema=Mongoose.Schema(

    {
        mentorname:String,
        email:String,
        phone:String,
        technicalskill:String,
        password:String,
        confirmPassword:String,
        
    }
)

let mentorregmodel=Mongoose.model("mentorreg",regSchema)
module.exports=mentorregmodel
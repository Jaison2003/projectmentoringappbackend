const Mongoose=require("mongoose")

let regSchema=Mongoose.Schema(

    {
        studentname:String,
        mentor:String,
        projecttopic:String,
        markscored:String,
       
        
    }
)

let mentorgrademodel=Mongoose.model("mentorgrade",regSchema)
module.exports=mentorgrademodel
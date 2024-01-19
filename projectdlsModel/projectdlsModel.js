const Mongoose=require("mongoose")

let projectdlsSchema=Mongoose.Schema(

    {
        studentname:String,
        mentorname:String,
        projecttopic:String,
        projecturl:String
       
        
    }
)

let projectdlsModel=Mongoose.model("projectdls",projectdlsSchema)
module.exports=projectdlsModel
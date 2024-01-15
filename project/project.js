const Mongoose=require("mongoose")
let projectSchema=Mongoose.Schema(

    {
        emailid:String,
        password:String
    }
)

let project=Mongoose.model("project",projectSchema)
module.exports=project
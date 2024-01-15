const Mongoose=require("mongoose")

let regSchema=Mongoose.Schema(

    {
        studentname:String,
        email:String,
        phone:String,
        educationqualification:String,
        password:String,
        confirmPassword:String,
        
    }
)

let studentregModel=Mongoose.model("studentreg",regSchema)
module.exports=studentregModel
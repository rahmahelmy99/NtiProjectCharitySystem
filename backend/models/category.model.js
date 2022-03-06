const mongoose = require("mongoose")

const caseSchema = mongoose.Schema({
   
    title:{
        unique:true,
        type:String,
        trim:true,
        required:true
    },
    content:{
        type:String,
        trim:true
    },
    


})
userSchema.virtual("singleCase", {
    ref:"caseStatus",
    localField:"_id",
    foreignField:"catId"
})

const Case = mongoose.model("caseStatus",caseSchema)
module.exports=Case
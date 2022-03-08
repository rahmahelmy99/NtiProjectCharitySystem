const mongoose = require("mongoose")

const catSchema = mongoose.Schema({
   
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

const category = mongoose.model("category",catSchema)
module.exports=category
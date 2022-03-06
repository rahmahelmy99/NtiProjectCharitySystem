const mongoose = require("mongoose")

const caseSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    catId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"category"
    },
    caseName:{
        unique:true,
        type:String,
        trim:true,
        required:true
    },
    caseDescription:{
        type:String,
        trim:true
    },
    image:{ type:String,
        trim:true ,required:true
        
    },

    actions:[{
        action:{
            donate:{type:String, required:true ,trim:true},
            Volunteer:{type:String, required:true ,trim:true}
        }
    }],


})

const Case = mongoose.model("caseStatus",caseSchema)
module.exports=Case
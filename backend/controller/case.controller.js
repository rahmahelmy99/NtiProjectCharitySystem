const upload = require("../middleware/fileUpload")
const caseModel = require("../models/case.model")

class Case{
    static addCase= async(req,res)=>{
        try{
            req.body.userType = "admin"
            const caseStatus = new caseModel({userId:req.user._id, ...req.body})
            // caseStatus.image=req.file.path
            await caseStatus.save()
            
            res.send({apiStatus:true, data:caseStatus, message:"added case successfully"})            
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to add this case"})
        }
    }

    static singleCase= async(req,res)=>{ 
        try{
            await req.user.populate("singleCase")
            res.send({apiStatus:true, data:{user:req.user, cases:req.user.singleCase}, message:"your cases featched successfully"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to featch your cases"})
        }
    }
    static allCases= async(req,res)=>{
        try{
            const cases = await caseModel.find()
            res.send({apiStatus:true, data:cases, message:"all cases featched successfully"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to featch all cases"})
        }
    }

    
    static delCase= async(req,res)=>{
        try{
            const cases = await caseModel.deleteOne({ _id:req.params.id , userId:req.user._id})
            if(!cases) throw new Error("invalid case")
            res.send({apiStatus:true, data:cases, message:"case deleted successfully"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to delete this case"})
        }    
    }

}

module.exports=Case
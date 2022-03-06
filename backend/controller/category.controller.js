const upload = require("../middleware/fileUpload")
const categoryModel = require("../models/category.model")

class Case{
    static addCategory= async(req,res)=>{
        try{
            req.body.userType = "admin"
            const caseStatus = new categoryModel({userId:req.user._id, ...req.body})
            await caseStatus.save()
            
            res.send({apiStatus:true, data:caseStatus, message:"added category successfully"})            
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to add this category"})
        }
    }
}
module.exports=categoryModel
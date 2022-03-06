
const userModel = require("../models/user.model")
const sendEmail=require("../helper/email.helper") 
const genOtop = require("../helper/opt-gen")


var QRCode = require('qrcode')
const fs = require('fs')

class User{
    static register= async(req,res)=>{
        try{
            req.body.userType = "admin"
            const user = new userModel(req.body)
            await user.save()
            //generate otp 
            const otp= genOtop(6)
            //give qrcode to evry user 
            fs.mkdir(`images/qr/${user._id}`,()=>{})
            fs.mkdir(`images/qr/${user._id}/qr`,()=>{})
            QRCode.toFile(`images/qr/${user._id}/qr/${user._id}.png`,'http://www.google.com')
            //send email verification
            sendEmail(user.email, "charitySystem",  "register", "<h5>welcome to our charity</h5>")
            res.send({
                apiStatus:true, data: {user,otp}, message:"register successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error in register"})
        }
    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.send({
                apiStatus:true,
                data:{ user, token }, 
                message:"logged in"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"invalid login"})
        }
    }
    static me = async(req,res)=>{
        res.send({apiStatus:true,data:req.user, message:'featched data successfuly'})
    }
    //all users
    static getAll =async(req,res)=>{
        try{
            const users = await userModel.find() 
            res.send({
                apiStatus:true, data: users, message:"Get all users successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to get all users"})
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            res.send({
                apiStatus:true, data: [], message:"All data deleted successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to delete all data"})
        }
    }

     //single user
    static getUser = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id) 
            res.send({
                apiStatus:true, data: user, message:"get user successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to get user"})
        }
    }
    static delUser = async(req,res)=>{
        try{
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.send({
            apiStatus:true, data: user, message:"user deleted successfuly"
        })
        }
        catch(e){
        res.send({apiStatus:false, data:e.message, message:"error to delete user"})
        }
    }
    //user logout
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter( t => t.token != req.token )
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"user logged out"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error in user logout "})
        }
    }
    static logoutAll = async(req,res)=>{   ///////
        try{
            req.user.tokens = []
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"logged out to all users"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error in logout"})
        }
    }

    static imgProfile = async (req, res) =>{
        try{
            req.user.image = req.file.path
            await req.user.save()
            res.send({apiStatus:true, data:req.user, message:"image uploaded"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error to upload image"})
            }
        }
}   
module.exports=User
const router = require('express').Router()
const userController = require("../controller/user.controller")
const upload = require("../middleware/fileUpload")
const auth = require('../middleware/auth')

router.post("/register", userController.register)
router.post("/login", userController.login)

router.get("/all/:id",auth,userController.getUser)
router.get("/all",userController.getAll)

router.get("/me", auth , userController.me)

router.delete("/all",auth,userController.delAll)
router.delete("/all/:id",auth,userController.delUser)

router.post("/logout", auth,userController.logout)
router.post("/logoutAll", auth,userController.logoutAll)

router.post('/profile',auth,upload.single('profile'), (req,res)=> {
    res.send(req.file)
})

module.exports= router
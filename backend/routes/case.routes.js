const router = require('express').Router()
const auth = require('../middleware/auth')
const caseController = require("../controller/case.controller")
const upload = require('../middleware/fileUpload')

router.post("/addCase",auth, caseController.addCase)

router.get("/allCases", auth, caseController.allCases)
router.get("/singleCase", auth, caseController.singleCase) 

router.delete("/delCase/:id", auth, caseController.delCase)
// router.post('/imgCase',auth,upload.single('img'),caseController.addCase)
router.post('/imgCase',auth,upload.single('imgCase'), (req,res)=> {
    res.send(req.file)
})

module.exports=router 
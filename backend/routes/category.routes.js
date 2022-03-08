const router = require('express').Router()
const auth = require('../middleware/auth')
const categoryController = require("../controller/category.controller")

router.post("/addCategory",auth, categoryController.addCategory)

// router.get("/allCategory", auth, categoryController.allCategory)
// router.get("/singleCategory", auth, categoryController.singleCategory) 

// router.delete("/delCategory/:id", auth, categoryController.delCategory)

module.exports=router 
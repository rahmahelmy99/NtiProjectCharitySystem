const multer = require("multer")
const path = require("path")
const fs = require("fs")

let loc=""
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(req.user){        
           loc = path.join("images", file.fieldname, req.user._id.toString()) 
        }        
        else {
            loc = path.join("images", file.fieldname) 
        }fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req,file, cb){
        const imgName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        cb(null, imgName)
    }
})

const upload = multer({storage,
    limits:{fileSize:50000000},
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  })

module.exports = upload
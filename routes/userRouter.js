const express=require('express')
const router=express.Router()
const {renderHtml,displayImage,displayUserData }=require('../controller/userController')
const upload=require('../middleware/multer')

router.get('/',renderHtml)
router.post('/image',upload.single('image'),displayImage)
router.get('/display/:image',displayUserData )
module.exports=router

//we create a folder for images for
//security
//read write access
//__dirname

   
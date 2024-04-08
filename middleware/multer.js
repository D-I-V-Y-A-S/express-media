
const multer =require('multer')
const path=require('path')
const storage=multer.diskStorage({
    destination:(request,file,cb)=>{
        cb(null,'images')
    },
     filename:(request,file,cb)=>{
        console.log(file)
        // cb(null, Date.now() +path.extname(file.originalname));[thrash value num will be file name ]
        cb(null,file.originalname)
        //original file name will be saved
    }
})
const upload=multer({storage:storage})

module.exports=upload
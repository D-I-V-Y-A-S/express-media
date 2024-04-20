const multer = require('multer')
const fs = require('fs')
const path = require('path')

const directory = (__dirname).split('\middleware')[0]

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, 'images')
    },
    filename: (request, file, cb) => {
        const filePath = path.join(directory, 'images', file.originalname)
        fs.stat(filePath, (error, stat) => {
            if (error) {
                console.log(file)
                // cb(null, Date.now() +path.extname(file.originalname));[thrash value num will be file name ]
                cb(null,file.originalname)
                
            }
            else {
                cb("file already exists")
            }
        }
        )
    }
})

const upload = multer({ storage: storage })

module.exports = upload


















//filename already exists if not checked and the images are diff with same file name on second post request the filename doesnt duplicate instead overwrite with latest post image. 
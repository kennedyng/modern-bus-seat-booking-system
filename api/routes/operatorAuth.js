const express = require("express");
const operatorController = require("../controllers/operator/auth");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/logo');

    },
    filename: ( req, file, cb ) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const fileFilter = ( req, file, cb ) => {
    if( file.mimetype === "image/png"){
        cb(null, true)
    }else{
        cb(null, false)
    }

}
const router = express();
const upload = multer(
    {
        storage:storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 1
        }
    }
)
router.post('/login', operatorController.logIn)
router.post('/register', upload.single('logo_pic'), operatorController.register )




module.exports = router;
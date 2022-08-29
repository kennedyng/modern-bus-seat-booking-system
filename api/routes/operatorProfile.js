const express = require("express");
const router = express();
const operatorProfileController = require("../controllers/operator/profile");
const checkAuth = require("../middlewares/auth-check")
const {  paginateData }  = require("../middlewares/pagination");
const { operatorsProfilesQuery } = require("../controllers/operator/query");

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


const upload = multer(
    {
        storage:storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 1
        }
    }
)




router.get('/view/all', paginateData(operatorsProfilesQuery))
router.get('/view',checkAuth, operatorProfileController.getOperatorProfile )
router.patch('/update', upload.single('logo_pic'), checkAuth, operatorProfileController.updateOperatorProfile )


module.exports = router;
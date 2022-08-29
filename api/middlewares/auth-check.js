const jwt = require("jsonwebtoken");

module.exports = ( req, res, next ) => {
    try {
        const decodedData = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_KEY)
        req.userData = decodedData
        next();

        console.log(req.userData)
    } catch (error) {
       
        res.status(403).json({message: "authorization failed"})
    }

}
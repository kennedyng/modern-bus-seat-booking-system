const jwt = require("jsonwebtoken");

module.exports = ( req, res, next ) => {
    try {
        const decodedData = jwt.verify(req.body.token, process.env.JWT_KEY)
        req.userData = decodedData
        next()
    } catch (error) {
        res.status(401).json({message: "authorization failed"})
    }

}
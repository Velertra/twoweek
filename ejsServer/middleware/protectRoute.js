const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if(!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided "});
        } 

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if(!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Provided "});
        }

        const user = await User.findById(decoded.userId).select("-password");
    
        if(!user) {
            res.status(404).json({ error: "User not Found" });
        }

        req.user = user;

        next()

    } catch {
        console.log("Erorr in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = protectRoute;
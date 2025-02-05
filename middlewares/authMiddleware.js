const jwt = require("jsonwebtoken");
require("dotenv").config();  

exports.authenticateUser = (req, res, next) => {
    const authHeader = req.header("Authorization");

    console.log("Auth Header:", authHeader); 

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No Token Provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  
        console.log("Decoded Token:", decoded); 
        next();  
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(400).json({ message: "Invalid Token." });
    }
};


exports.authorizeRole = (roles) => {
    return (req, res, next) => {
        console.log("User Role from Token:", req.user.role);
        console.log("Allowed Roles for this route:", roles);

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Denied. Unauthorized Role." });
        }
        next();
    };
};


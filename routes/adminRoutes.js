const express = require("express");
const { getAllUsers } = require("../controllers/adminController");  
const { authenticateUser, authorizeRole } = require("../middlewares/authMiddleware");  

const router = express.Router();

router.get("/users", authenticateUser, authorizeRole(["admin"]), getAllUsers);

module.exports = router;

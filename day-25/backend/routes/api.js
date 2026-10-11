const express = require("express")
const { login, userData, logout, studentData } = require("../controllers/apiController")
const isLogedIn = require("../middleware/isLogedIn")
const router = express.Router()

router.post("/login", login)
router.get("/user-data", isLogedIn, userData)
router.get("/logout", isLogedIn, logout)
router.get("/all-student",studentData)

module.exports = router
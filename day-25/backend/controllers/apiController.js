const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        // const encPass = await bcrypt.hash(password, +process.env.SALT)
        // res.send(encPass);
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Both the username and password are required!"
            })
        }

        if (username !== "Admin" || !(await bcrypt.compare(password, process.env.ADMIN_PASS))) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials!"
            })
        }
        const user = {
            name: "Kuddus",
            gender: "Male",
            isAdmin: true
        }

        const token = await jwt.sign(user, process.env.JWT_SECRECT, { expiresIn: "30d" })

        return res.status(200).cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000,
            path: "/"
        }).json({
            success: true,
            message: "Login successful"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const userData = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user || "User not found"
    })
}

const logout = (req, res) => {
    res.status(200).clearCookie("token", "", {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        path: "/"
    }).json({
        success: true,
        message: "Logout successful"
    })
}

const studentData = (req, res) => {
    res.send("Student Data")
}

module.exports = {
    login,
    userData,
    logout,
    studentData
}
const jwt = require("jsonwebtoken")

const isLogedIn = (req, res, next) => {
    try {
        const { token } = req.cookies

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token not found"
            })
        }

        jwt.verify(token, process.env.JWT_SECRECT, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired token"
                })
            }
            req.user = decoded
            next()
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }


}

module.exports = isLogedIn
const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type"],
    credentials: true
}))

const cookieParser = require('cookie-parser')
app.use(cookieParser())

require("dotenv").config()

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

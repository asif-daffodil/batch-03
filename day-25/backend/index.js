const express = require('express')
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))
const cookieParser = require('cookie-parser')
app.use(cookieParser())


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
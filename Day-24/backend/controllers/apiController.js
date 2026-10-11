const bcrypt = require('bcrypt')

const students = [
    {id:1, name: "Omar"},
    {id:2, name: "Nayem"},
    {id:3, name: "Shahed"},
    {id:4, name: "Utsha"},
    {id:5, name: "Istiak"},
    {id:6, name: "Monika"},
    {id:7, name: "Sadia"}
]

const allStudent = (req, res) => {
    res.json(students)
}

const changePass = async (req, res) => {
    const  { pass }  = req.body
    // const encPass = await bcrypt.hash(pass, +process.env.SALT)
    const oldPass = "$2b$09$6.NmCyFZHlJd4I267OCCIeUsk.Tl06j9RQ5Q41RZht4sMdrxXWTEm"
    if (!(await bcrypt.compare(pass, oldPass))) {
        return res.status(401).json({message: "Wrong password"})
    }
    res.status(200).json({message: "Currect password"})
}

module.exports = {
    allStudent,
    changePass
}
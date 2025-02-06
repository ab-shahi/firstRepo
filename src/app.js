const express = require('express')

const app = express()
const port = 7777

app.use("/homepage", (req,res) => {
    res.send("This is homepage!!!")
})

app.use("/",(req,res) => {
    res.send("hello from the server !!!")
})

app.listen(port , () =>{
    console.log(`server started at port number :${port}`)
})
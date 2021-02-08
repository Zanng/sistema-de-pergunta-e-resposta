const express = require('express')
const connection = require("./database/database")
const router = require('./router')
const app = express ()
//database
connection.authenticate().then(()=>{
    console.log("Connection is good")
}).catch((err)=>{
    console.log(err)
})

app.set('view engine', 'ejs')
app.use(router)
app.use(express.static('public'))

app.listen(8080,()=>{
    
    console.log("Server Is Running")
})
const express = require('express')
const app = express ()

app.set('view engine', 'ejs')


app.get("/:nome/:lang",(req,res)=>{
    
    let nome = req.params.nome
    let lang = req.params.lang
    res.render("index", {
        nome,
        lang
    })
})

app.listen(8080,()=>{
    console.log("Server Is Running")
})
const express = require('express')
const app = express ()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const produtos = [
    {nome: "Maçã", preco:0.09},
    {nome:"Doritos",preco:2.08},
    {nome:"agua", preco:2}
]

app.get("/:nome/:lang",(req,res)=>{
    
    let nome = req.params.nome
    let lang = req.params.lang
    res.render("index", {
        nome,
        lang,
        produtos
    })
})

app.listen(8080,()=>{
    console.log("Server Is Running")
})
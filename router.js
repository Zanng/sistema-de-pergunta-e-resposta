const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const controllPergunta = require('./controller/controllPergunta')

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.get("/",controllPergunta.show)
router.get("/perguntar",(req,res)=>{
    res.render('perguntar')
})
router.post("/save", controllPergunta.save)
router.get("/pergunta/:id",controllPergunta.showId)
router.post("/responder",controllPergunta.resposta)

module.exports = router
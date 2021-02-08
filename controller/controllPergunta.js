const perguntaModel = require('../database/Pergunta')
const respostaModel = require('../database/Resposta')

exports.show = (req,res)=>{
    perguntaModel.findAll({raw: true,order:[
        ['id','DESC']  
      ]}).then(perguntas =>{
          res.render("index",{
             perguntas: perguntas
         
          })
      })
}

exports.save = (req,res)=>{
    const title = req.body.title
    const description = req.body.description
    perguntaModel.create({
        title: title,
        description: description
    }).then(()=>{
        res.redirect("/")
    }).catch((err)=>{
        console.log(err)
    })
}

exports.showId = (req,res)=>{
    const id = req.params.id
    perguntaModel.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            respostaModel.findAll({
                where:{perguntaId: pergunta.id},
                order:[
                    ['id', 'DESC']
                ]
            }).then(respostas=>{
                res.render("pergunta",{
                    pergunta,
                    respostas
                })
            }) 
        }else{
            res.redirect("/")
        }
    })
}

exports.resposta = (req,res)=>{
    const corpo = req.body.corpo
    const perguntaId = req.body.pergunta

    respostaModel.create({
        body: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/pergunta/" +perguntaId)
    }).catch((err)=>{
        console.log(err)
    })
}
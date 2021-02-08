const Sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define("respostas",{
    body:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}).then(()=>{
    console.log("Table resposta create/existe")
}).catch((err)=>{
    console.log(err)
})

module.exports = Resposta
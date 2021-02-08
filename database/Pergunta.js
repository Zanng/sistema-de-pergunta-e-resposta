const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false}).then(()=>{
    console.log("table created")
}).catch((err)=>{
    console.log(err)
})

module.exports = Pergunta
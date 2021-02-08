require('dotenv').config()

const Sequelize = require('sequelize')

const connection = new Sequelize(process.env.TABLE,'root',process.env.PASSAWORD,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
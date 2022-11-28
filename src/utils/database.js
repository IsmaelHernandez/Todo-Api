// Importamos sequelize
const {Sequelize} = require('sequelize')

//conexion a la base de datos
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'todobd',
    username: 'postgres',
    password: 'root',
    port: 5432
})



module.exports = db
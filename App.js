//? Importamos express
const express = require('express')
//?Importamos las rutas
const taskRouter = require('./src/task/tasks.routes')
const db = require('./src/utils/database')

//? Definimos el puerto
const port = 9000

//?Inicializamos nuestra app
const app = express()

//?Para que nuestra app acepte formato json 
app.use(express.json())

//? Ruta general de la app punto de inicio
app.get('/', function(req, res) {
    res.json({message: 'Ok!'});
});

app.use('/api', taskRouter)

//inf de la bd
db.authenticate()
    .then(() => console.log('Database Autenticada Correctamente'))
    .catch((err) => console.log(err))


//Sincronizar BD y crear las tablas
db.sync()
    .then(() => console.log('Database Sincronizada Correctamente'))
    .catch((err) => console.log(err))


//?Configuracion del servidor
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
//? Importamos express
const express = require('express')
//?Importamos las rutas
const taskRouter = require('./task/tasks.routes')

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


//?Configuracion del servidor
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
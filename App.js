//? Importamos express
const express = require('express')

//? Definimos el puerto
const port = 9000

//?Inicializamos nuestra app
const app = express()

//?Para que nuestra app acepte formato json 
app.use(express.json())


const todDB = []
let id = 1

//? /todo /todo/:id

app.get('/todo', (req, res) => {
    res.status(200).json(todDB)
})

app.post('/todo', (req, res) => {

    const {title, description} = req.body;

    if(title && description){
        const newTodo = {
            id: id++,
            title,
            description,
            is_completed: false
        }
        todDB.push(newTodo)
        res.status(200).json(newTodo)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
})


//? Ruta general de la app punto de inicio
app.get('/', function(req, res) {
    res.json({message: 'Ok!'});
});

app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    const todo = todDB.find(item => item.id == id)
    if(todo){
        res.status(200).json(todo)
    }else{
        res.status(404).json({message: 'Invalid ID'})
    }
})


//?Configuracion del servidor
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
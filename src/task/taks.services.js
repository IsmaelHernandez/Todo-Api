//importamos los controllers
const taskControllers = require('./taks.controllers')
//En los servicios se maneja el req y el response

const getAllTodo = (req, res) => {
    
    taskControllers.findAllTodo()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getTodoById = (req, res) => {
    const id = req.params.id
    taskControllers.findById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(400).json({message: 'Invalid Data'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
    
}

const postTodo = (req, res) => {
    const { title, description } = req.body

    taskControllers.createTodo({title, description})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.me})
        })
    
}

const patchTask = (req, res) => {
    const id = req.params.id
    const {title, description, is_completed} = req.body

    taskControllers.updateTodo(id, {title, description, is_completed})
        .then((response) => {
            if(response){
                res.status(200).json({message: 'Task Modified Succesfully'})
            }else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const deleteTask = (req, res) => {
    const id = req.params.id
    taskControllers.deleteTodo(id)
        .then((data) => {
            if (data) {
                res.status(204).json({ message: 'Elimined Task :)' })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllTodo,
    getTodoById,
    postTodo,
    patchTask,
    deleteTask,
}

//importamos los controllers
const taskControllers = require('./taks.controllers')
//En los servicios se maneja el req y el response

const getAllTodo = (req, res) => {
    const data = taskControllers.findAllTodo()
    res.status(200).json(data)
}

const getTodoById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res - status(400).json({ messsage: 'Invalid ID' })
    }
}

const postTodo = (req, res) => {
    const { title, description } = req.body
    if (title && description) {
        const data = taskControllers.createTodo({ title, description })
        res.status(201).json(data)
    } else {
        res.status(400).json({ message: 'Invalid Data' })
    }
}

module.exports = {
    getAllTodo,
    getTodoById,
    postTodo
}

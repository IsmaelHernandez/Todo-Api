// Los controller manejan todo sobre la BD
//BD fisticia
const Task = require('../models/task.models')
const todDB = []
let id = 1

const findAllTodo = () => {
    const data = Task.findAll()
    return data
}

const findById = (id) => {
    const todo = todDB.filter(item => item.id == id)
    return todo
}


const createTodo = (obj) => {
    const newTodo = {
        id: id++,
        title: obj.title,
        description: obj.description,
        is_completed: false
    }
    todDB.push(newTodo)
    return newTodo
}


module.exports = {
    createTodo,
    findAllTodo,
    findById
}
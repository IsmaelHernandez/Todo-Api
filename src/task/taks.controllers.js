// Los controller manejan todo sobre la BD
const Task = require('../models/task.models')


const findAllTodo = async () => {
    const data = await Task.findAll()
    return data
}

const findById = async (id) => {
    const todo = await Task.findOne({
        where: {
            id: id
        }
    })
    return todo
}

const patchTask = async(id) => {

}

const createTodo = async (data) => {
    const newTodo = await Task.create({
        title: data.title,
        description: data.description
    })
    return newTodo
}

const updateTodo = async (id, data) => {
    const response = await Task.update(data, {
        where: {
            id: id
        }
    })
    return response
}

const deleteTodo = async (id) => {
    const data = await Task.destroy({
        where: {
            id: id
        }
    })

    return data
}


module.exports = {
    createTodo,
    findAllTodo,
    findById,
    updateTodo,
    deleteTodo,
}
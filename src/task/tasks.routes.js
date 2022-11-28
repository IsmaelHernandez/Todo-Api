const router = require('express').Router()
const taskServices = require('./taks.services')

router.get('/todo', taskServices.getAllTodo)
router.get('/todo/:id', taskServices.getTodoById)
router.post('/todo', taskServices.postTodo)
router.patch('/todo/:id', taskServices.patchTask)
router.delete('/todo/:id', taskServices.deleteTask)


module.exports = router
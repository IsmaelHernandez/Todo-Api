const router = require('express').Router()
const taskServices = require('./taks.services')

router.get('/todo', taskServices.getAllTodo)
router.get('/todo/:id', taskServices.getTodoById)
router.post('/todo', taskServices.postTodo)


module.exports = router
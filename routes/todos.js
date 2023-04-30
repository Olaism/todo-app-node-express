const express = require('express');
const todoControllers = require('../controllers/todos');
const { getTodos, addTodos, getTodoItem, updateTodoItem, deleteTodoItem } = todoControllers;
const router = express.Router()


router.get('/', getTodos);

router.post('/', addTodos);

router.get('/:id', getTodoItem);

router.put('/:id', updateTodoItem);

router.delete('/:id', deleteTodoItem);


module.exports = router;
const express = require('express');
const todoControllers = require('../controllers/todos');
const { getTodos } = todoControllers;
const router = express.Router()


router.get('/api/v1/todos', getTodos);

module.exports = router;
const Todo = require('../models/todos');

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
}

exports.getTodos = getTodos;
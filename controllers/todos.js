const Todo = require('../models/todos');

const getTodos = async (req, res) => {
    const todos = await Todo.find().select("title start end");
    res.send(todos);
}

const addTodos = async (req, res) => {
    const { title, start, end } = req.body;
    const todo = await Todo.create({
        title: title,
        end: Date.now()
    })

    res.send(todo);
}

const getTodoItem = async (req, res) => {
    const todo = await Todo.findById(id=req.params.id).select("title start end");

    res.send(todo);
}

const updateTodoItem = async (req, res) => {
    const todo = await Todo.findById(id=req.params.id);
    const { title, start, end } = req.body;
    if (title) {
        todo.title = title;
    }
    if (start) {
        todo.start = start;
    }
    if (end) {
        todo.end = end;
    }

    const result = await todo.save();
    res.send(result);
}

const deleteTodoItem = async (req, res) => {
    const todo = await Todo.findOneAndRemove(req.params.id).select('title start end');
    res.send(todo);
}

exports.getTodos = getTodos;
exports.addTodos = addTodos;
exports.getTodoItem = getTodoItem;
exports.updateTodoItem = updateTodoItem;
exports.deleteTodoItem = deleteTodoItem;
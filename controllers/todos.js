const Todo = require('../models/todos');
const todoValidator = require('../validators/todo');

const getTodos = async (req, res) => {
    const todos = await Todo.find().select("title startDate dueDate");
    res.send(todos);
}

const addTodos = async (req, res) => {
    try {
        const value = await todoValidator.validateAsync(req.body);
        const todo = await Todo.create(value);
        res.send(todo);
    } catch (err) {
        console.error("Error", err);
        return res.status(404).send(err);
    }
}

const getTodoItem = async (req, res) => {
    const todo = await Todo.findById(id=req.params.id).select("title startDate dueDate");

    res.send(todo);
}

const updateTodoItem = async (req, res) => {
    const todo = await Todo.findById(id=req.params.id);
    const { title, startDate, dueDate, completed } = req.body;
    if (title) {
        todo.title = title;
    }
    if (startDate) {
        todo.startDate = startDate;
    }
    if (dueDate) {
        todo.dueDate = dueDate;
    }
    if (completed) {
        todo.completed = completed;
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
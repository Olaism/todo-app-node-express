const Todo = require('../models/todos');
const todoValidator = require('../validators/todo');

const getTodos = async (req, res) => {
    const todos = await Todo.find().select("title description startDate dueDate completed");
    res.send(todos);
}

const addTodos = async (req, res) => {
    const { value, error } = todoValidator.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const todo = await Todo.create(value);
        res.send(todo);
    } catch(err) {
        return res.status(400).send("Invalid input sent")
    }
}

const getTodoItem = async (req, res) => {
    try {
        const todo = await Todo.
            findById(req.params.id).
            select("title description startDate dueDate completed");
        res.send(todo);
    } catch (error) {
        return res.status(404).send(`Not found with id: ${req.params.id}`);
    }
}

const updateTodoItem = async (req, res) => {
    try {
        const todo = await Todo.findById(id=req.params.id);
        const { title, description, startDate, dueDate, completed } = req.body;
        if (title) {
            todo.title = title;
        }
        if (description) {
            todo.description = description;
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
    } catch (error) {
        return res.status(404).send(`Not found with id: ${req.params.id}`);
    }
}

const deleteTodoItem = async (req, res) => {
    try {
        const todo = await Todo.
            findOneAndDelete({ _id: req.params.id }).
            select('title description startDate dueDate,  completed');
        res.send(todo);
    } catch (error) {
        return res.status(404).send(`Not found with id: ${req.params.id}`);
    }
}

exports.getTodos = getTodos;
exports.addTodos = addTodos;
exports.getTodoItem = getTodoItem;
exports.updateTodoItem = updateTodoItem;
exports.deleteTodoItem = deleteTodoItem;
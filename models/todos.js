const mongoose = require("mongoose");

const { Schema, model } = mongoose;

mongoose.connect("mongodb://localhost/todo")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Connection error", error));


const TodoSchema = new Schema({
    title: { type: "string", required: true, minLength: 5, maxLength: 200 },
    description: String,
    startDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
})

const Todo = model('Todo', TodoSchema);

module.exports = Todo;
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

mongoose.connect("mongodb://localhost/todo")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Connection error", error));


const TodoSchema = new Schema({
    title: { type: "string", required: true, minLength: 5, maxLength: 200 },
    start: { type: Date, default: Date.now },
    end: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
})

const Todo = model('Todo', TodoSchema);

module.exports = Todo;
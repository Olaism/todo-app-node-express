const express = require('express');
const todoRouter = require('./routes/todos');

app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware for handling todo routes
app.use('/api/v1/todos', todoRouter);

// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send('404: Page not found');
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
const express = require('express');
const todoRouter = require('./routes/todos');

app = express();

app.use(express.json())

app.use('/api/v1/todos', todoRouter);

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
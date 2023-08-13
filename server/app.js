// app.js

const express = require('express');
const connectDB = require('./config/db');   // connect database

const app = express();

// Connect Database
connectDB();

// Import the books router
const booksRouter = require('./routes/api/books');

// Use the books router
app.use('/api/books', booksRouter);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
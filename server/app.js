const express = require('express');
const connectDB = require('./config/db');   // connect database
const cp = require('cookie-parser');        // connect cookie parser for authentication
const jwt = require('jsonwebtoken');        // require jwt
const cors = require('cors');               // to connect frontend and backend

const app = express();

// Connect Database
connectDB();

// Import the books router
const booksRouter = require('./routes/api/books');
// Middleware
app.use(cors({ origin: true, credentials: true })); // Allow cross-origin requests
app.use(express.json({ extended: false }));
app.use(cp()); // Use cookie-parser middleware

// Use the books router
app.use('/api/books', booksRouter);

// Set Cookie
app.get("/set/cookie", (req, res) => {
    const payload = {
        name: 'John Doe',
        age: '42',
        website: 'johndoe.com'
    };
    const token = jwt.sign(payload, 'logrocket');
    res.cookie("token", token, {
        httpOnly: true
    }).send("Cookie Shipped");
});
// Return all headers
app.get("/get/cookie", (req, res) => {
    const token = req.cookies.token;
    const payload = jwt.verify(token, 'logrocket');
    res.json({ token, payload });
});

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
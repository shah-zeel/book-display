# Express.js
### Setting up server
**1. npm package initialization**
  - run `npm init`
  - Keep the default answers to the questions

**2. Install dependencies**
- run `npm i express mongoose body-parser config` 
- it will install the dependencies:
    1. body-parser: Allows us to get the data throughout the request
    2. express: Is our main framework
    3. mongoose: Is used to connect and interact with MongoDB
    4. config: This lets you define default parameters for your application

**3. Add Nodemon**
- run `npm i -D nodemon`
- add `"app": "nodemon app.js"` to <code style="color:red">scripts</code>
 in <code style="color:red">package.json</code>
- add `"start": "node app.js"` to <code style="color:red">scripts</code>
 in <code style="color:red">package.json</code> to define a start script of the app
- check if it works or not by running `npm run app`

**4. Setting the entry point**
- create file with name <code style="color:red">app.js</code>
- setup server and check if it is running correct on local port

# MongoDB
### Setup MongoDB
**1. Sign Up and Log In:**
   - Create an account on the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
   - Log in using your credentials.

**2. Create a Project:**
   - Click on "Project" in the top left corner.
   - Choose "Create a New Project" and give it a name.

**3. Build a Database/cluster:**
   - Within your project, click on "Create Database"
   - Configure the database settings according to your needs.
   - Choose a name for your Database (Database Name).
   - Click "Create Database".

**4. Set Up Database User:**
   - Once the cluster is ready, click "CONNECT" to configure access.
   - Create a MongoDB user by clicking "Database Access."
   - Fill in the username and password for the new user.
   - Configure authentication settings (IP Whitelist) based on your preferences.
   - Save the user credentials securely.

**5. Get Connection String:**
   - Click "CONNECT" again and choose "Connect Your Application."
   - Copy the provided connection string. This string contains the necessary information to connect to your MongoDB database.

### Adding the database to our project
- create folder <code style="color:red">config</code>
- create 2 files inside it <code style="color:red">default.json</code> and <code style="color:red">db.js</code>
- add required code in them and test if the database is correctly connected by running `npm run app` and getting output `MongoDB is Connected...`

# REST API
### Building RESTful APIs with the MERN stack
- create a folder named <code style="color:red">routes</code> and inside it create another folder <code style="color:red">api</code>
- create a file <code style="color:red">books.js</code> in <code style="color:red">api</code> folder
- write required code in it

# Database model
*to interact with our database, we have to create a model for each of resources
- create a folder called <code style="color:red">models</code> in the root and inside the models folder, create a file called <code style="color:red">Books.js</code> where write the code for the schema/ Database model
- Edit code in app.js
```javascript
// Import the books router
const booksRouter = require('./routes/api/books');
// Use the books router
app.use('/api/books', booksRouter);
```
- Set up [Postman](https://www.postman.com/) to test out API endpoints

# Authentication
We will use [JWT](https://jwt.io/).

- Add the code to app.js
```javascript
const jwt = require('jsonwebtoken');        // require jwt
```
```javascript
// Use cookie-parser middleware for handling JWT tokens in cookies
app.use(cp());
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
```

# Frontend
We will use React.

### Set up Create React App
- use the command `npx create-react-app front-end` to get the basic file setup (run the command in the root directory)
- to run the rect app use `npm start`, we can now view it on <code style="color:red">http://localhost:3000</code>
- add Bootstrap and Font Awesome CDN to index.html
- install other necessary dependencies by running command `npm install --save react-router-dom` and `npm install --save axios`

### Components and hooks
- Inside <code style="color:red">src</code> folder create another folder <code style="color:red">components</code> and add the files <code style="color:red">CreateBook.js,  ShowBookList.js, BookCard.js, ShowBookDetails.js, UpdateBookInfo.js</code>

### Setting up routes
In <code style="color:red">App.js</code> inside 
<code style="color:red">src</code> folder, add all the required routes

### Add styling
Add styling by adding CSS code in <code style="color:red">App.css</code> inside 
<code style="color:red">src</code> folder

### Add feature components
1. **CreateBook.js** - Add, create, or save a new book
2. **ShowBookList.js** - Show all the books we have stored in the database
3. **ShowBookDetails.js** - Show a single book's details and option to Update/Delete a book
4. **BookCard.js** - Show a single book card
5. **UpdateBookInfo.js** - Update a book

# Connecting frontend to backend
- install <code style="color:red">cors</code> in backend using `npm install cors`

<code style="color:red">models</code>


# Image display
Steps: Take image from frontend > convert to Base64 format > store it in MongoDB > retrieve it and render in frontend
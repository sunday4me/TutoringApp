/**
 * 1. Creating an express server
 * 2. Connect to mongodb
 * 3. Initialize express
 * 4. Initialize express middleware
 * 5. Create a simple get request route (optional)
 * 6. Inject our routes
 * 7. Listen to out app connection
 */
 
const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); // allows us to use the environment variables in .env
const {PORT} = process.env; // constructing
// process.env.PORT // without constructing

// Connect to the db

connectDB();

//Initialize express
const app = express();

//Initialize Express Middleware

app.use(express.json({extended: false}));

//Create a basic express route
app.get('/', (req, res) => res.json({message: "Welcome to Tutoring App!"}));

// PORT
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));




const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/brief2') //give me errors
mongoose.connect('mongodb://127.0.0.1:27017/brief2')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use the user routes
const userRouter = require('./routes/user');
app.use('/users', userRouter);


//running server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

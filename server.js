const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// Connecting the database
let MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[process.env.NODE_ENV || 'production'];

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log("MongoDB connection error: ", err));

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

// Define routes
app.use('/', index);
app.use('/image', image);

// Server listening on port
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});

module.exports = app;

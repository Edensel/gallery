const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Connecting the database
let mongodb_url = process.env.MONGO_URL || 'mongodb+srv://esekondensel:FDg9JCWHnqLXOe3N@projectip1cluster.rybsw.mongodb.net/myDatabaseName?retryWrites=true&w=majority';

// Connect to MongoDB with proper connection string format
mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log("MongoDB connection error: ", err));

// Initializing the app
const app = express();

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
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
var config = {};

// Update to have your correct username, password, and database
config.mongoURI = {
    production: 'mongodb+srv://esekondensel:FDg9JCWHnqLXOe3N@projectip1cluster.rybsw.mongodb.nettest?retryWrites=true&w=majority',
    development: 'mongodb+srv://esekondensel:FDg9JCWHnqLXOe3N@projectip1cluster.rybsw.mongodb.net/test?retryWrites=true&w=majority',
    test: 'mongodb+srv://esekondensel:FDg9JCWHnqLXOe3N@projectip1cluster.rybsw.mongodb.net/test?retryWrites=true&w=majority'
};

module.exports = config;
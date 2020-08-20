const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const messages = require('./routes/api/messages');

const App = express();

// bodyparser middleware
App.use(bodyParser.json());

// database connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));

//use routes
App.use('/api/items', items);
App.use('/api/messages', messages);

const port = process.env.PORT || 5000;

App.listen(port, () => console.log(`Server started on port ${port}`))

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const favoritesRouter = require('./routes/favorites');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/favorites', favoritesRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Server is running!');
});


mongoose.connect('mongodb://127.0.0.1:27017/dogsDB')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/registrationApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server started on port 5000'));
}).catch(err => console.error(err));




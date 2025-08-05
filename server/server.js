require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router'); // ✅ You missed this
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

app.use(express.json()); // Middleware to parse JSON bodies
//responosible for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.

// Middleware to use the routers
app.use('/api/auth', authRoute); // ✅ Correct auth route
app.use('/api/form', contactRoute); // ✅ Correct contact route added

// First time visit in backend
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the server!');
});

app.get('/register', (req, res) => {
    res.status(200).send('Welcome to the registeration page!');
});

// Error handling middleware (should be after all routes)
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    //then is a promise

    // Connect to the database before starting the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

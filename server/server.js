const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');



app.use(express.json()); // Middleware to parse JSON bodies
//responosible for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.


// Middleware to use the router
app.use('/api/auth', router);//router defined and then used


//first time visit in backend
app.get('/', (req,res)=>{
    res.status(200).send('Welcome to the server!');
})

app.get('/register', (req,res)=>{
    res.status(200).send('Welcome to the registeration page!');
})

//start the server
const PORT = 5000;


connectDB().then(()=>{

    //then is a promise

// Connect to the database before starting the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

})
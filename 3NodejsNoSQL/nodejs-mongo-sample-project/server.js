const config = require('./config/config.json');

// Require express
const express = require('express');

// Initialize express
const app = express();

// parse json objects
app.use(express.json()); // parse application/json

// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true})); // parse application/x-www-form-urlencoded

// provide static resource folder path. (static hosting)
// https://www.youtube.com/watch?v=Xl3msGMwPp0&list=PL2PkZdv6p7Zmu51_FBoNDcv8Bk8bXODvH&index=5
app.use(express.static(process.env.STATIC_FOLDER || 'public'));

// Create a Server
const PORT = process.env.PORT || config.application.port || 3000;
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
// dotenv environment config for process.env.VARIABLE_NAME
// https://www.youtube.com/watch?v=Exbe46JuTe8&list=PL2PkZdv6p7Zmu51_FBoNDcv8Bk8bXODvH&index=6

// Home route
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// Application routes
var bookRouter = require('./routers/BookRouter');
app.use('/books', bookRouter)
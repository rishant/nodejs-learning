// Require express
const express = require('express');

// Initialize express
const app = express();

// parse json objects
app.use(express.json());

// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true}));

// provide static resource folder path.
app.use(express.static(process.env.STATIC_FOLDER || 'build'));

// Create a Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

var bookRouter = require('./routers/BookRouter');
app.use('/books', bookRouter)
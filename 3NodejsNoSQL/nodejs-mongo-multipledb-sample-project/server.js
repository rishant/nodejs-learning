const express = require('express');
const config = require('./config/application.config.json');

const app = express();

const cors = require('cors');
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extnended: true }));

// provide static resource folder path. (static hosting)
app.use(express.static(process.env.STATIC_FOLDER || 'public'));

// application start status route.
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to rishant 'nodejs + expressjs + mongoose' application." });
});

// Create a Server
const PORT = process.env.APPLICATION_PORT || config.application.port || 3525;
app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`)
    else
        console.log("Error occurred, server can't start", error);
});

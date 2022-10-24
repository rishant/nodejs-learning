const config = require('./config/application.config.json');

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./utilities/MysqlConnection');
/**
 * In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
 * 
 * db.sequelize.sync({ force: true }).then(() => {
 *  console.log("Drop and re-sync db.");
 * });
*/

db.sequelize.sync().then(() => {
    console.log('Synced db.');
}).catch((err) => {
    console.log("failed to sync db: " + err.message);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rishant application." });
});

require("./routers/tutorial.router.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || config.application.port || 8880;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
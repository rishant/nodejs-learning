const config = require("../config/application.config.json");
//const mysql = require('mysql');
const mysql = require('mysql2');

function buildMySQLConnection(user, password, host, port, database){
    const connection1 = mysql.createConnection({
        user: user,
        password: password,
        host: host,
        port: port,
        database: database,
        multipleStatements: true
    });
    
    connection1.connect((error) => {
        if (error) {
            console.log(`An error occurred: ${error}`);
            throw error;
        }
        console.log("Mysql Connected with App...");
    });
    
    return connection1;
}

//Create an empty object which can store our databases
const db = {};
//Extract the database information into an array
const databases = Object.keys(config.databases);
//Loop over the array and create a new Sequelize instance for every database from config.js
for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    //Store the database connection in our db object
    db[database] = buildMySQLConnection(dbPath.user, dbPath.password, dbPath.host, dbPath.port, dbPath.database);
}

module.exports = {db};
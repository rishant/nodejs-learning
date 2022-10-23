const config = require("../config/application.config.json");
//const mysql = require('mysql');
const mysql = require('mysql2');

/*------------------------------------------
Database Connection
--------------------------------------------*/
function buildMySQLConnectionURI(){
    let user = process.env.MYSQL_DB_USER || config.mysql.user;
    let password = process.env.MYSQL_DB_PASSWORD || config.mysql.password;
    let host = process.env.MYSQL_DB_HOST || config.mysql.host;
    let port = process.env.MYSQL_DB_PORT || config.mysql.port;
    let database = process.env.MYSQL_DB || config.mysql.database;
    //"mysql://root:root@localhost:3306/tutorialDB?get-server-public-key=true"
    let uriString = `mysql://${user}:${password}@${host}:${port}/${database}`;
    console.log(uriString);
    return uriString;
}

// Way : 1
const connection = mysql.createConnection(buildMySQLConnectionURI());
connection.connect((error) => {
    if (error) {
        console.log(`An error occurred: ${error}`);
        throw error;
    }
    console.log("Mysql Connected with App...");

    // let createdatabase = `CREATE DATABASE IF NOT EXISTS appdb`;
    // connection.query(createdatabase, function(err, results, fields) {
    //     if (err) {
    //         console.log(err.message);
    //     }
    // });

    // let createUser = `CREATE TABLE users (user_id INT(100), user_name VARCHAR(255), email VARCHAR(255))`;
    // connection.query(createUser, function(err, results, fields) {
    //     if (err) {
    //         console.log(err.message);
    //     }
    // });
});

// Way : 2
const connection1 = mysql.createConnection({
    user: process.env.MYSQL_DB_USER || config.mysql.user,
    password: process.env.MYSQL_DB_PASSWORD || config.mysql.password,
    host: process.env.MYSQL_DB_HOST || config.mysql.host,
    port: process.env.MYSQL_DB_PORT || config.mysql.port,
    database: process.env.MYSQL_DB || config.mysql.database,
    multipleStatements: true
});

connection1.connect((error) => {
    if (error) {
        console.log(`An error occurred: ${error}`);
        throw error;
    }
    console.log("Mysql Connected with App...");
});

// Below exports are only accessible outside of this js file.
// module.exports = connection;
module.exports = {connection, connection1};
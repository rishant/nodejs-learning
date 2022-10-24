const config = require("../config/application.config.json");
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
//Extract the tenants information into an array
const tenants = Object.keys(config.tenants);
//Loop over the array and create a new Sequelize instance for every database from config.js
for(let i = 0; i < tenants.length; ++i) {
    let tenant = tenants[i];
    let tenantDbPath = config.tenants[tenant];
    //Store the database connection in our db object
    db[tenant] = buildMySQLConnection(tenantDbPath.user, tenantDbPath.password, tenantDbPath.host, tenantDbPath.port, tenantDbPath.database);
}

module.exports = {db};
const config = require('../config/application.config.json');

const Sequelize = require("sequelize");
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
const sequelize = new Sequelize(
    process.env.MYSQL_DB_NAME || config.database.database,
    process.env.MYSQL_DB_USER || config.database.user,
    process.env.MYSQL_DB_PASSWORD || config.database.password,
    {
        host: process.env.MYSQL_DB_HOST || config.database.host,
        port: process.env.MYSQL_DB_HOST_PORT || config.database.port,
        dialect: config.database.dialect,
        operatorsAliases: false,
        pool: {
            max: config.database.pool.max,
            min: config.database.pool.min,
            acquire: config.database.pool.acquire,
            idle: config.database.pool.idle
        }
    });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("../models/tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
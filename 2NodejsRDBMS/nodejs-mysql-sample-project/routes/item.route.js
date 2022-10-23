// Example Type: 1
const express = require('express');
const router = express.Router();

var mysqlDatabases = require('../services/mysql.database.js');

/**
 * Get All Items
 *
 * @return response()
 */
router.get('/', (req, res) => {
    let sqlQuery = "SELECT * FROM items";

    let query = mysqlDatabases.connection.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Get Single Item
 *
 * @return response()
 */
router.get('/:id', (req, res) => {
    let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

    let query = mysqlDatabases.connection.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Create New Item
 *
 * @return response()
 */
router.post('/', (req, res) => {
    let data = { title: req.body.title, body: req.body.body };

    let sqlQuery = "INSERT INTO items SET ?";

    let query = mysqlDatabases.connection.query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Update Item
 *
 * @return response()
 */
router.put('/:id', (req, res) => {
    let sqlQuery = "UPDATE items SET title='" + req.body.title + "', body='" + req.body.body + "' WHERE id=" + req.params.id;

    let query = mysqlDatabases.connection.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Delete Item
 *
 * @return response()
 */
router.delete('/:id', (req, res) => {
    let sqlQuery = "DELETE FROM items WHERE id=" + req.params.id + "";

    let query = mysqlDatabases.connection.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}

module.exports = router;
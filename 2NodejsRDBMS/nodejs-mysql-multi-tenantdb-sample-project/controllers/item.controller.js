const mysqlDatabases = require("../services/mysql.database.js");

exports.create = (req, res) => {
    let tenantId = req.headers["tenant-id"];
    if (tenantId === null || tenantId === undefined || tenantId === "") {
        return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
    }

    let data = { title: req.body.title, body: req.body.body };
    
    let sqlQuery = "INSERT INTO items SET ?";
    let query = mysqlDatabases.db[tenantId].query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
}

exports.findAll = (req, res) => {
    let tenantId = req.headers["tenant-id"];
    if (tenantId === null || tenantId === undefined || tenantId === "") {
        return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
    }

    let sqlQuery = "SELECT * FROM items";
    let query = mysqlDatabases.db[tenantId].query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
}

exports.findOne = (req, res) => {
    let tenantId = req.headers["tenant-id"];
    if (tenantId === null || tenantId === undefined || tenantId === "") {
        return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
    }

    let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;
    let query = mysqlDatabases.db[tenantId].query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
}

exports.update = (req, res) => {
    let tenantId = req.headers["tenant-id"];
    if (tenantId === null || tenantId === undefined || tenantId === "") {
        return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
    }

    let sqlQuery = "UPDATE items SET title='" + req.body.title + "', body='" + req.body.body + "' WHERE id=" + req.params.id;
    let query = mysqlDatabases.db[tenantId].query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
}

exports.delete = (req, res) => {
    let tenantId = req.headers["tenant-id"];
    if (tenantId === null || tenantId === undefined || tenantId === "") {
        return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
    }

    let sqlQuery = "DELETE FROM items WHERE id=" + req.params.id + "";
    let query = mysqlDatabases.db[tenantId].query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
}

function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}

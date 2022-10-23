const mysqlDatabases = require("../services/mysql.database.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Database query for create records.
  var sql = "insert into products (product_name, retail_price) values (?, ?)";

  // Query parameters.
  var params = [];
  params.push(req.body.product_name);
  params.push(req.body.retail_price);

  // Database connection and query execution.
  mysqlDatabases.connection.query(sql, params, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = (req, res) => {
  // Database query for find All records.
  var sql = "SELECT * FROM products";
  
  // Database connection and query execution.
  mysqlDatabases.connection.query(sql, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    } else {
      res.send(data);
    }
  });
};

exports.findOne = (req, res) => {
  // Database query for findById records.
  var sql = "SELECT * FROM products";
  
  // Query parameters.
  var params = [];
  const productId = req.params.product_id;
  if(productId != ""){
    sql = sql + " WHERE productId = ?";
    params.push(productId);
  }

  // Database connection and query execution.
  mysqlDatabases.connection.query(sql, params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.update = function (req, res) {
  // Database query for update records.
  var sql = "update products set product_name = ?, retail_price = ? where product_id = ?";
  
  // Query parameters
  var params = [];
  // Request body
  params.push(req.body.product_name);
  params.push(req.body.retail_price);
  // Request parameters
  params.push(req.params.product_id);

  // Database connection and query execution.
  mysqlDatabases.connection.query(sql, params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating product with id " + req.params.id
        });
      }
    } else res.send(data);
  });
}

exports.delete = function (req, res) {
  // Request parameters
  const productId = req.params.product_id;

  // Database query for delete records.
  var sql = "delete from products where product_id = ?";
  
  // Query parameters
  var params = [];
  params.push(productId);

  // Database connection and query execution.
  mysqlDatabases.connection.query(sql, params, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.product_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error deleting product with id " + req.params.product_id
        });
      }
    } else res.send(data);
  });

}
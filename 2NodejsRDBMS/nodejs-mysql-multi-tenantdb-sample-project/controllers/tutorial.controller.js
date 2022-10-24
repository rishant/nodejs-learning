const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tenantId, tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  const title = req.query.title;

  Tutorial.getAll(tenantId, title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  Tutorial.findById(tenantId, req.params.id, (err, data) => {
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

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  Tutorial.getAllPublished(tenantId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    tenantId,
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  let tenantId = req.headers["tenant-id"];
  if (tenantId === null || tenantId === undefined || tenantId === "") {
      return res.status(400).end('Notable to proceed request dueto Invalid tenant-id.');
  }

  Tutorial.remove(tenantId, req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};
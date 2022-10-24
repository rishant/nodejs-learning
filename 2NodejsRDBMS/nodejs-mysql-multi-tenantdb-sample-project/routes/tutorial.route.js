// Example Type: 3
const express = require('express');
const router = express.Router();

const tutorials = require("../controllers/tutorial.controller.js");

/**
 * Create New Item
 *
 * @return response()
 */
router.post('/', tutorials.create);

/**
 * Get All Items
 *
 * @return response()
 */
router.get('/', tutorials.findAll);

/**
 * Get Single Item
 *
 * @return response()
 */
router.get('/:id', tutorials.findOne);

/**
 * Update Item
 *
 * @return response()
 */
router.put('/:id', tutorials.update);

/**
 * Delete Item
 *
 * @return response()
 */
router.delete('/:id', tutorials.delete);

module.exports = router;
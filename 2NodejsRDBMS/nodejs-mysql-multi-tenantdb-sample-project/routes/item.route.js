// Example Type: 1
const express = require('express');
const router = express.Router();

const items = require("../controllers/item.controller.js");

/**
 * Get All Items
 *
 * @return response()
 */
router.get('/', items.findAll);

/**
 * Get Single Item
 *
 * @return response()
 */
router.get('/:id', items.findOne);

/**
 * Create New Item
 *
 * @return response()
 */
router.post('/', items.create);

/**
 * Update Item
 *
 * @return response()
 */
router.put('/:id', items.update);

/**
 * Delete Item
 *
 * @return response()
 */
router.delete('/:id', items.delete);

module.exports = router;
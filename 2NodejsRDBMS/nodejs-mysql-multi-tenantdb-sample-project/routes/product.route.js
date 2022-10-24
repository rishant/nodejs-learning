// Example Type: 2
const express = require('express');
const router = express.Router();

const products = require("../controllers/product.controller.js");

/**
 * Create New Products
 *
 * @return response()
 */
router.post('/', products.create);

/**
 * Get All Products
 *
 * @return response()
 */
router.get('/', products.findAll);

/**
 * Get Single Product
 *
 * @return response()
 */
router.get('/:product_id', products.findOne);

/**
 * Update Product
 *
 * @return response()
 */
router.put('/:product_id', products.update);

/**
 * Delete Product
 *
 * @return response()
 */
router.delete('/:product_id', products.delete);

module.exports = router;
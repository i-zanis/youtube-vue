const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
} = require('../controllers/categories');

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(createCategory);

router.route('/id')
  .get(getCategory)
  .put(updateCategory);

module.exports = router;

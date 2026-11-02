const express = require('express');
const essaysController = require('./essays.controller');

const router = express.Router();

router.get('/', essaysController.list);
router.get('/:slug', essaysController.getBySlug);

module.exports = router;

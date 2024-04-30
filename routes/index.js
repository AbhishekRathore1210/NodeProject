const express = require('express');
const router = express.Router();

console.log('router loaded');
router.get('/',require('../controllers/home_controller'));

module.exports = router;
const express = require('express');

const { rootController } = require('../controllers');

const router = express.Router();

router.get('/', rootController);


module.exports = router;
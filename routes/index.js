const express = require('express');
const router = express.Router();

const controller = require("../controllers/index");

router.get('/list');
router.get('/download');
router.get('/refresh');

module.exports = router;
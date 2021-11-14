const express = require('express');
const router = express.Router();

const controller = require("../controllers/index");

router.get('/list', controller.get_list);
router.get('/download', controller.download_repo);
router.get('/refresh', controller.refresh_sync);
router.get('/url', controller.getUrl);

module.exports = router;
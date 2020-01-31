const express = require('express');
const router = express.Router();

const formsRouter = require('./forms');
const reportsRouter = require('./reports');

router.use('/forms', formsRouter);
router.use('/reports', reportsRouter);

module.exports = router;
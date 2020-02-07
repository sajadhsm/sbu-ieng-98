const express = require('express');
const router = express.Router();

const formsRouter = require('./forms');
const reportsRouter = require('./reports');
const polygonsRouter = require('./polygons');

router.use('/forms', formsRouter);
router.use('/reports', reportsRouter);
router.use('/polygons', polygonsRouter);

module.exports = router;
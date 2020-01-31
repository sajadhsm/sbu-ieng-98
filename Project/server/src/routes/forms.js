const express = require("express");
const router = express.Router();
const status = require('http-status');
const winston = require('winston');

const Form = require("../models/Form");

router.get("/", (req, res) => {
  Form.find()
    .exec()
    .then(docs => {
      res.status(status.OK).json(docs);
    })
    .catch(error => {
      winston.error(error);
      res.status(status.INTERNAL_SERVER_ERROR).json({
        error
      });
    });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const status = require('http-status');
const winston = require('winston');

const Report = require("../models/Report");

router.get("/", (req, res) => {
  Report.find()
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

router.post("/", (req, res) => {
  const { form, responses } = req.body;

  const report = new Report({
    form,
    responses
  });

  report
    .save()
    .then(result => {
      res.status(status.CREATED).json(result);
    })
    .catch(error => {
      winston.error(error);
      res.status(status.INTERNAL_SERVER_ERROR).json({
        error
      });
    });
});

router.get("/:formId", (req, res) => {
  const id = req.params.formId;
  Report.find({ form: id })
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
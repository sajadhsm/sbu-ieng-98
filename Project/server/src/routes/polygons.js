const express = require("express");
const router = express.Router();
const status = require('http-status');
const winston = require('winston');

const Polygon = require("../models/Polygon");

router.get("/areas", (req, res) => {
  Polygon.find()
    .exec()
    .then(docs => {
      const names = docs.map(({ properties: { name } }) => name);
      res.status(status.OK).json(names);
    })
    .catch(error => {
      winston.error(error);
      res.status(status.INTERNAL_SERVER_ERROR).json({
        error
      });
    });
});

router.post("/", (req, res) => {
  const { feature } = req.body;
  const polygon = new Polygon(feature);

  polygon
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

router.delete("/:polygonId", (req, res) => {
  Polygon.remove({ _id: req.params.polygonId })
    .exec()
    .then(result => {
      res.status(status.OK).json(result);
    })
    .catch(error => {
      winston.error(error);
      res.status(status.INTERNAL_SERVER_ERROR).json({
        error
      });
    });
});

module.exports = router;
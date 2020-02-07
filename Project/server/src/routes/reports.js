const express = require("express");
const router = express.Router();
const status = require('http-status');
const winston = require('winston');
const turf = require('@turf/turf');

const Report = require("../models/Report");
const Polygon = require("../models/Polygon");

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
    .populate('form')
    .exec()
    .then(reports => {
      if (!reports.length) {
        res.status(status.OK).json(reports);
      }

      Polygon.find()
        .exec()
        .then(polygons => {
          const finalResponse = reports.map(report => {
            const locationFields = report.form.fields.filter(field => field.type === 'location');

            locationFields.forEach(locField => {
              const matchedResponse = report.responses.find(res => res.name === locField.name);

              if (matchedResponse) {
                const areas = [];

                const locations = matchedResponse.value;
                locations.forEach(location => {
                  const { lat, long } = location.value;
                  const point = turf.point([long, lat]);

                  polygons.forEach(polygon => {
                    if (turf.booleanPointInPolygon(point, polygon)) {
                      const { name } = polygon.properties;
                      if (!areas.includes(name)) {
                        areas.push(name);
                      }
                    }
                  });
                });

                matchedResponse.set('areas', areas, { strict: false });
              }
            })
            return report;
          });

          res.status(status.OK).json(finalResponse);
        })
        .catch(error => {
          winston.error(error);
          res.status(status.INTERNAL_SERVER_ERROR).json({
            error
          });
        });
    })
    .catch(error => {
      winston.error(error);
      res.status(status.INTERNAL_SERVER_ERROR).json({
        error
      });
    });
});

module.exports = router;
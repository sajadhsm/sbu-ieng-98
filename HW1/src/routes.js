const router = require('express').Router();
const turf = require('@turf/turf');

const db = require('./db');

router.get('/gis/testpoint', (req, res) => {
  const { lat, long } = req.query;
  const point = turf.point([lat, long]);
  const polygons = [];
  
  db.data.features.forEach(feature => {
    if (turf.booleanPointInPolygon(point, feature)) {
      polygons.push(feature.properties.name);
    }
  });

  res.json({ polygons });
});

router.put('/gis/addpolygon', (req, res) => {
  // Needs validation!!
  db.data.features.push(req.body);
  res.json({ message: 'New polygon added!' });
});

module.exports = router;
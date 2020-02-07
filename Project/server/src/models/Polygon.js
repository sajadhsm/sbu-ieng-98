const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const polygonSchema = new Schema({
  type: { type: String, default: "Feature" },
  properties: Schema.Types.Mixed, // MUST INCLUDE NAME
  geometry: {
    type: { type: String, default: "Polygon" },
    coordinates: [
      [
        [Number]
      ]
    ]
  }
}, { timestamps: true });

const Polygon = mongoose.model('Polygon', polygonSchema);

module.exports = Polygon;
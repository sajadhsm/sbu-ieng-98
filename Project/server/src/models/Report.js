const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  form: {
    type: Schema.Types.ObjectId,
    ref: "Form",
    required: true
  },
  responses: [
    {
      name: String,
      value: Schema.Types.Mixed
    }
  ]
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  title: String,
  fields: [
    {
      name: String,
      title: String,
      type: { type: String },
      required: Boolean
    }
  ],
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
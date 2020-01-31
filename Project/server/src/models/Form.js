const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  fields: [
    {
      name: String,
      title: String,
      type: String,
      required: Boolean
    }
  ],
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
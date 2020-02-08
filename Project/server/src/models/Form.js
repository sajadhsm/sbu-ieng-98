const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  fields: [
    {
      name: String,
      title: String,
      type: { type: String },
      options: [
        {
          text: String,
          value: Schema.Types.Mixed
        }
      ],
      required: Boolean
    }
  ],
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
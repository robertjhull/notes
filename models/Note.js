const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Note = new Schema({
  user_id: {
    /* The owner of the note */
    type: String,
    required: [true],
  },
  content: {
    /* The content of the note */
    type: String,
    required: [true, "Note must have content"],
    maxLength: [255, "Note cannot be longer than 255 characters"],
  },
  priority: {
    /* Priority of the note */
    required: [false],
    type: Number
  },
  date_added: {
    required: [true],
    type: String
  },
  finished: {
    type: Boolean
  }
})

module.exports = mongoose.models.Note || mongoose.model('Note', Note)

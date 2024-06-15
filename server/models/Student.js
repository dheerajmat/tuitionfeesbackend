// server/models/Student.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  class: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String
  }
});

module.exports = mongoose.model('Student', StudentSchema);

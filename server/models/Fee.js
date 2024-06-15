// server/models/Fee.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeeSchema = new Schema({
  studentId: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Fee', FeeSchema);

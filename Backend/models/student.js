const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Student', studentSchema);

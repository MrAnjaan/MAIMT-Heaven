const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const CourseSchema = new Schema({

coursename: { type: String, required: true },

 semester: {type: String, required: true },

 subject:{type: String, required: true },

syllabus: {url: String, public_id: String},

previousPapers:{ url: String,public_id: String,},

books:{ url: String,public_id: String},

otherNotes: { url: String,public_id: String }
  
});

module.exports = mongoose.model('CourseData', CourseSchema);

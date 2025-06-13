 const CourseData=require("../models/course")
 
 const uploadData =async(req, res) => {
  try {
     console.log("Uploaded File Details:", req.file); 
     console.log("Request Body Data:", req.body);
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileUrl = `http://localhost:5000/upload/${req.file.filename}`;
    const {coursename,semester,subject,filetype}=req.body;

  const existingCourse = await CourseData.findOne({
  coursename:coursename,
  semester:semester,
  subject:subject
  });
  console.log("existingCourse:",existingCourse);
    
  if (existingCourse) {
  const fileUrl = `http://localhost:5000/upload/${req.file.filename}`;

  if (req.body.fileType == "syllabus") {
    existingCourse.syllabus = { url: fileUrl, public_id: req.file.filename };
  } else if (req.body.fileType =="books") {
    existingCourse.books ={ url: fileUrl, public_id: req.file.filename};
  }
   else if (req.body.fileType == "previousPapers") {
    existingCourse.previousPapers={ url: fileUrl, public_id: req.file.filename };
  }
  else if (req.body.fileType == "otherNotes") {
    existingCourse.otherNotes ={ url: fileUrl, public_id: req.file.filename };
  }
  await existingCourse.save();
  res.status(200).json({ message: "File added to existing course!", data: existingCourse });
}
else {
  const newCourse = new CourseData({
    coursename: coursename,
    semester: semester,
    subject: subject,
    
     otherNotes: req.body.fileType == "otherNotes" ? { url: fileUrl, public_id: req.file.filename }: null,

    syllabus: req.body.fileType == "syllabus" ? { url: fileUrl, public_id: req.file.filename } : null,
    
    previousPapers: req.body.fileType == "previousPapers" ? { url: fileUrl, public_id: req.file.filename } : null,
    
    books: req.body.fileType =="books" ? { url: fileUrl, public_id: req.file.filename }: null,
    
   
  });

  await newCourse.save();
  res.status(200).json({ message: "New course added!", data: newCourse });
}
  } catch (error) {
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};


module.exports = {
    uploadData
}
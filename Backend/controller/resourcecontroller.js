 

const CourseData=require("../models/course")
 
 
 const resource=async (req, res) => {
  try {
    const { coursename, semester } = req.body;

    if (!coursename || !semester) {
      return res.status(400).json({ message: "coursename and semester are required" });
    }

    const resource = await CourseData.find({ coursename, semester });

    if (resource.length > 0) {
      res.status(200).json({ message: "Data exists", data: resource });
    } else {
      res.status(404).json({ message: "No data found for given coursename and semester" });
    }
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
    resource
}
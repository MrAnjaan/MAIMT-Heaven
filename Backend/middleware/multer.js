const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/"); // local temporary folder
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`); // unique filename
  },
});

const upload = multer({ storage });

module.exports = upload;

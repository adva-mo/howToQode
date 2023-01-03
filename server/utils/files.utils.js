const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `Images`);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const uploadFile = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = { upload, uploadFile };

const multer = require("multer");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  // fileFilter(req, file, cb) {
  //   if (!file.originalname.endsWith(".py")) {
  //     return cb(new Error("File must be a text file (.js .py. etc)"));
  //   }
  //   // this.fi
  //   cb(undefined, true);
  //   // cb(undefined, false);
  // },
  // // filename: (req, file, cb) => {
  //   cb(null, new Date().toISOString.replace(/:/g, "-") + file.originalname);
  // },
});

module.exports = upload;

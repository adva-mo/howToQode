const fs = require("fs");
const Image = require("../models/Image");

const getFileContent = async (req, res) => {
  console.log("k");
  try {
    const filePath = req.file.filename;
    const path = process.cwd() + "/images/" + filePath;
    const content = fs.readFileSync(path);
    fs.unlink(path, (e) => {
      if (e) throw Error(e);
    });
    res.send(content.toString());
    //
  } catch (e) {
    res.status(400).send(e.message);
  }
};

// const saveImage = async (req, res) => {
//   try {
//     const newImage = new Image(req.body);
//     await newImage.save();
//   } catch (e) {
//     console.log(e);
//   }
// };

module.exports = { getFileContent };

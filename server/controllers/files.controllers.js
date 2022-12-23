const fs = require("fs");

const getFileContent = async (req, res) => {
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

module.exports = getFileContent;

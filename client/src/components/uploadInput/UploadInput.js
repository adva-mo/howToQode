import React, { useState, useContext } from "react";
import axios from "axios";
import newSnippetContext from "../../context/snippet.context.js";

function UploadInput() {
  const [imageToUpload, setImageToUpload] = useState(null);

  const { setSnippetObject } = useContext(newSnippetContext);

  const uploadFileHandler = async () => {
    try {
      let formData = new FormData();
      formData.append("upload-snippet", imageToUpload);
      const res = await axios.post(
        "http://localhost:3001/files/upload/snippet",
        formData
      );
      setSnippetObject((prev) => ({ ...prev, code: res.data }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <p>load a script:</p>
      <label htmlFor="file">file</label>
      <input
        placeholder="enter your file"
        type="file"
        onChange={(e) => setImageToUpload(e.target.files[0])}
      />
      <button onClick={uploadFileHandler}>upload</button>
    </div>
  );
}

export default UploadInput;

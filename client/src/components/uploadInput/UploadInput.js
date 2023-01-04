import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import newSnippetContext from "../../context/snippet.context.js";
import "./uploadInput.css";

function UploadInput({ setIsFileUploaded }) {
  const [imageToUpload, setImageToUpload] = useState(null);

  const { setSnippetObject } = useContext(newSnippetContext);

  const uploadFile = async () => {
    try {
      let formData = new FormData();
      formData.append("upload-snippet", imageToUpload);
      const res = await axios.post(
        "http://localhost:3001/files/upload/snippet",
        formData
      );
      setIsFileUploaded((prev) => !prev);
      setSnippetObject((prev) => ({ ...prev, code: res.data }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    uploadFile();
    // eslint-disable-next-line
  }, [imageToUpload]);

  return (
    <div>
      <p>load a script:</p>{" "}
      <input
        className="upload-snippet-input"
        accept="text/plain"
        placeholder="enter your file"
        type="file"
        onChange={(e) => setImageToUpload(e.target.files[0])}
      />
      {/* <button onClick={uploadFileHandler}>upload</button> */}
    </div>
  );
}

export default UploadInput;

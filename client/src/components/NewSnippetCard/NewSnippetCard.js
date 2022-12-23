import React from "react";
import CodeInput from "../CodeInput/CodeInput";

function NewSnippetCard() {
  return (
    <form>
      <div>
        <label htmlFor="title">title</label>
        <input
          // className={titleClasses}
          placeholder="enter your title"
          type="text"
          name="title"
          // value={emailValue}
          // onChange={emailChangeHandler}
          // onBlur={emailBlurHndler}
        />
      </div>
      <div>
        <select>
          <option value="">select coding language</option>
          <option value="python">python</option>
          <option value="javascript">javascript</option>
          <option value="cpp">cpp</option>
          <option value="java">java</option>
          <option value="go">go</option>
          <option value="applescript">applescript</option>
          <option value="c">c</option>
          <option value="css">css</option>
          <option value="django">django</option>
          <option value="dos">dos</option>
          <option value="json">json</option>
          <option value="php">php</option>
          <option value="ruby">ruby</option>
          <option value="sql">sql</option>
          <option value="typescript">typescript</option>
          <option value="xml">xml</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          // className={descriptionClasses}
          placeholder="enter your description"
          type="text"
          name="description"
          // value={emailValue}
          // onChange={emailChangeHandler}
          // onBlur={emailBlurHndler}
        />
      </div>
      <div>
        <p>load a script:</p>
        <label htmlFor="file">file</label>
        <input placeholder="enter your file" type="file" />
        <button>upload</button>
      </div>
      <CodeInput />
      <button>submit</button>
    </form>
  );
}

export default NewSnippetCard;

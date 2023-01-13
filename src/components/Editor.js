import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "./Editor.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/css/css.js";
import "codemirror/theme/material.css";

function Editor(props) {
  const [open, setOpen] = useState(true);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? "editor" : "editor editor--close"}>
      <div className="editor__head">
        <span className="editor__head__title">{props.type}</span>
        <button onClick={handleToggleClick}>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={props.handleChange}
        value={props.value}
        className="controlled-editor"
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lint: true,
          lineWrapping: true,
        }}
      />
    </div>
  );
}

export default Editor;

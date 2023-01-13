import "./App.css";
import { useState } from "react";
import Editor from "./Editor";

function App() {
  const [HTML, setHTML] = useState(null);
  const [CSS, setCSS] = useState(null);
  const [JS, setJS] = useState(null);

  const handleHTMLChange = (editor, data, value) => {
    setHTML(value);
  };

  const handleCSSChange = (editor, data, value) => {
    setCSS(value);
  };

  const handleJSChange = (editor, data, value) => {
    setJS(value);
  };

  return (
    <div>
      <div className="top-pane">
        <Editor type="HTML" value={HTML} handleChange={handleHTMLChange} />
        <Editor type="CSS" value={CSS} handleChange={handleCSSChange} />
        <Editor type="JS" value={JS} handleChange={handleJSChange} />
      </div>
      <div className="bottom-pane">
        <iframe className="bottom-pane__frame"></iframe>
      </div>
    </div>
  );
}

export default App;

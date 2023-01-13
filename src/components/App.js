import "./App.css";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import Editor from "./Editor";

function App() {
  const [srcDoc, setSrcDoc] = useLocalStorage("srcDoc", "");
  const [HTML, setHTML] = useLocalStorage("HTML", null);
  const [CSS, setCSS] = useLocalStorage("CSS", null);
  const [JS, setJS] = useLocalStorage("JS", null);

  const handleHTMLChange = (editor, data, value) => {
    setHTML(value);
  };

  const handleCSSChange = (editor, data, value) => {
    setCSS(value);
  };

  const handleJSChange = (editor, data, value) => {
    setJS(value);
  };

  const clearData = () => {
    setHTML("");
    setCSS("");
    setJS("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`${HTML} <style> ${CSS} </style> <script> ${JS} </script>`);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [HTML, CSS, JS, setSrcDoc]);

  return (
    <div>
      <header>
        <h1>Code Editor</h1>
        <button className="refresh-btn" onClick={clearData}>
          Reset Everything
        </button>
      </header>
      <div className="top-pane">
        <Editor type="HTML" value={HTML} handleChange={handleHTMLChange} />
        <Editor type="CSS" value={CSS} handleChange={handleCSSChange} />
        <Editor type="JS" value={JS} handleChange={handleJSChange} />
      </div>
      <div className="bottom-pane">
        <iframe className="bottom-pane__frame" srcDoc={srcDoc} title="Output" />
      </div>
    </div>
  );
}

export default App;

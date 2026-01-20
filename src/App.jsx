import { useState } from "react";
import "./App.css";
import Editor from "./components/cv-editor/Editor";
import Preview from "./components/cv-preview/Preview";
import { emptyData, sampleData } from "./data";

function App() {
  const [data, setData] = useState(sampleData);

  function clearResume() {
    setData(emptyData);
  }

  function loadSample() {
    setData(sampleData);
  }

  return (
    <div className="app">
      <Editor
        data={data}
        setData={setData}
        onClear={clearResume}
        onLoadSample={loadSample}
      />
      <Preview data={data} />
    </div>
  );
}

export default App;

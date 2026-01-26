import { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/cv-editor/Editor";
import Preview from "./components/cv-preview/Preview";
import { emptyData, sampleData } from "./data";

const STORAGE_KEY = "buildr-resume-v1";

function App() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : emptyData;
    } catch {
      return sampleData;
    }
  });

  const [sectionOrder, setSectionOrder] = useState([
    "personal",
    "skills",
    "experience",
    "projects",
    "education",
    "certificates",
  ]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // silently fail (storage full / disabled)
    }
  }, [data]);

  function clearResume() {
    localStorage.removeItem(STORAGE_KEY);
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
        sectionOrder={sectionOrder}
        setSectionOrder={setSectionOrder}
      />
      <Preview data={data} sectionOrder={sectionOrder} />
    </div>
  );
}

export default App;

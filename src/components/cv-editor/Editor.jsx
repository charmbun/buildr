import "/src/styles/Editor.css";
import { useState } from "react";
import Sidebar from "./Sidebar";

import Personal from "./sections/Personal";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";

import saveIcon from "../../assets/icons/save.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import loadIcon from "../../assets/icons/wand.svg";

const SECTIONS = {
  personal: Personal,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  certificates: Certificates,
};

function Editor({ data, setData, onClear, onLoadSample }) {
  const [activeSection, setActiveSection] = useState("personal");
  const ActiveSectionComponent = SECTIONS[activeSection];

  return (
    <div className="editor-layout">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="editor-content">
        {ActiveSectionComponent && (
          <ActiveSectionComponent data={data} setData={setData} />
        )}
      </div>

      <div className="editor-actions">
        <button className="clear-btn" onClick={onClear}>
          <img src={deleteIcon}></img>
        </button>
        <button className="load-btn" onClick={onLoadSample}>
          <img src={loadIcon}></img>
        </button>
        <button className="download-btn" onClick={() => window.print()}>
          <img src={saveIcon}></img>
        </button>
      </div>
    </div>
  );
}

export default Editor;

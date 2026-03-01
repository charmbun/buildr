import styles from "./Editor.module.css";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

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

function Editor({
  data,
  setData,
  sectionOrder,
  setSectionOrder,
  onClear,
  onLoadSample,
}) {
  const [activeSection, setActiveSection] = useState("personal");
  const ActiveSectionComponent = SECTIONS[activeSection];

  return (
    <div className={styles.editorLayout}>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionOrder={sectionOrder}
        setSectionOrder={setSectionOrder}
      />

      <div className={styles.editorContent}>
        {ActiveSectionComponent && (
          <ActiveSectionComponent data={data} setData={setData} />
        )}
      </div>

      <div className={styles.editorActions}>
        <button className={styles.clearBtn} onClick={onClear}>
          <img src={deleteIcon}></img>
        </button>
        <button className={styles.loadBtn} onClick={onLoadSample}>
          <img src={loadIcon}></img>
        </button>
        <button className={styles.downloadBtn} onClick={() => window.print()}>
          <img src={saveIcon}></img>
        </button>
      </div>
    </div>
  );
}

export default Editor;

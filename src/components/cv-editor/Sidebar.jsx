import personalIcon from "../../assets/icons/personal.svg";
import skillsIcon from "../../assets/icons/skills.svg";
import experienceIcon from "../../assets/icons/experience.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import educationIcon from "../../assets/icons/education.svg";
import certificateIcon from "../../assets/icons/certificate.svg";

function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    { id: "personal", icon: personalIcon },
    { id: "skills", icon: skillsIcon },
    { id: "experience", icon: experienceIcon },
    { id: "projects", icon: projectsIcon },
    { id: "education", icon: educationIcon },
    { id: "certificates", icon: certificateIcon },
  ];

  return (
    <nav className="sidebar">
      {sections.map((section) => (
        <button
          key={section.id}
          className={activeSection === section.id ? "active" : ""}
          onClick={() => setActiveSection(section.id)}
        >
          <img src={section.icon} alt={section.label} className="icon" />
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;

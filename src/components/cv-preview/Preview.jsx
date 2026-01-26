import "/src/styles/Preview.css";

/* ----------------------------------------
   Helpers
---------------------------------------- */

function renderBullets(text) {
  if (!text?.trim()) return null;

  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  return (
    <ul className="preview-bullets">
      {lines.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

function hasAnyValue(obj) {
  return Object.values(obj).some((v) => v && v.toString().trim());
}

/* ----------------------------------------
   Section Renderers
---------------------------------------- */

function SkillsSection({ skills }) {
  if (!skills.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Skills</h2>
      {skills.filter(hasAnyValue).map((skill) => (
        <div key={skill.id}>
          {skill.groupName && <strong>{skill.groupName}</strong>}
          {skill.items && (
            <>
              {skill.groupName && ": "}
              <span>{skill.items}</span>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

function ExperienceSection({ experience }) {
  if (!experience.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Experience</h2>
      {experience.filter(hasAnyValue).map((exp) => (
        <div className="section-entry" key={exp.id}>
          {(exp.position || exp.dateFrom || exp.dateTo) && (
            <div className="first-row">
              {exp.position && <strong>{exp.position}</strong>}
              {(exp.dateFrom || exp.dateTo) && (
                <p>{[exp.dateFrom, exp.dateTo].filter(Boolean).join(" - ")}</p>
              )}
            </div>
          )}
          {exp.company && <i>{exp.company}</i>}
          {renderBullets(exp.description)}
        </div>
      ))}
    </section>
  );
}

function EducationSection({ education }) {
  if (!education.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Education</h2>
      {education.filter(hasAnyValue).map((edu) => (
        <div className="section-entry" key={edu.id}>
          {(edu.school || edu.dateGraduated) && (
            <div className="first-row">
              {edu.school && <strong>{edu.school}</strong>}
              {edu.dateGraduated && <p>{edu.dateGraduated}</p>}
            </div>
          )}
          {edu.degree && <i>{edu.degree}</i>}
          {renderBullets(edu.description)}
        </div>
      ))}
    </section>
  );
}

function ProjectsSection({ projects }) {
  if (!projects.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Projects</h2>
      {projects.filter(hasAnyValue).map((proj) => (
        <div className="section-entry" key={proj.id}>
          {(proj.title || proj.link) && (
            <div className="first-row">
              {proj.title && <strong>{proj.title}</strong>}
              {proj.link && (
                <a
                  href={`https://${proj.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.link}
                </a>
              )}
            </div>
          )}
          {renderBullets(proj.description)}
        </div>
      ))}
    </section>
  );
}

function CertificatesSection({ certificates }) {
  if (!certificates.some(hasAnyValue)) return null;

  return (
    <section className="preview-section">
      <h2>Certificates</h2>
      {certificates.filter(hasAnyValue).map((cert) => (
        <div className="section-entry" key={cert.id}>
          {(cert.name || cert.dateIssued) && (
            <div className="first-row">
              {cert.name && <strong>{cert.name}</strong>}
              {cert.dateIssued && <p>{cert.dateIssued}</p>}
            </div>
          )}
          {cert.organization && <i>{cert.organization}</i>}
        </div>
      ))}
    </section>
  );
}

/* ----------------------------------------
   Section Map
---------------------------------------- */

const SECTION_RENDERERS = {
  skills: SkillsSection,
  experience: ExperienceSection,
  education: EducationSection,
  projects: ProjectsSection,
  certificates: CertificatesSection,
};

/* ----------------------------------------
   Component
---------------------------------------- */

function Preview({ data, sectionOrder }) {
  const { personal } = data;

  const contactLinks = [
    personal.email && <span key="email">{personal.email}</span>,
    personal.linkPortfolio && (
      <a
        key="portfolio"
        href={`https://${personal.linkPortfolio}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {personal.linkPortfolio}
      </a>
    ),
    personal.linkGithub && (
      <a
        key="github"
        href={`https://${personal.linkGithub}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {personal.linkGithub}
      </a>
    ),
  ].filter(Boolean);

  return (
    <div className="preview-layout">
      <div className="a4-page">
        {/* PERSONAL HEADER */}
        {(personal.name || contactLinks.length > 0) && (
          <header className="preview-header">
            {personal.name && <h1>{personal.name}</h1>}
            {contactLinks.length > 0 && (
              <p>{contactLinks.reduce((p, c) => [p, " • ", c])}</p>
            )}
          </header>
        )}

        {/* ORDERED SECTIONS */}
        {sectionOrder.map((key) => {
          const Section = SECTION_RENDERERS[key];
          return Section ? <Section key={key} {...data} /> : null;
        })}
      </div>
    </div>
  );
}

export default Preview;

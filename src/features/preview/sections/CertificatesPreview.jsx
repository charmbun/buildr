import { hasAnyValue } from "../utils";

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

export default CertificatesSection;

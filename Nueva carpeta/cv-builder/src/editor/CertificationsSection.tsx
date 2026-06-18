import type { Certification } from '../data/cv.model';

interface Props {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: Props) {
  return (
    <div className="cv-section">
      <div className="cv-section-title">Certifications</div>
      <div className="cv-certs-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="cv-cert">
            <div className="cv-cert-name">{cert.name}</div>
            {cert.date && <div className="cv-cert-date">{cert.date}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

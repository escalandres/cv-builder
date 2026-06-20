import type { Certification } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';

interface Props {
  certifications: Certification[];
  variant?: SectionVariant;
}

export default function CertificationsSection({ certifications, variant = 'standard' }: Props) {

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">Certifications</div>
        <div className="harvardcv-certifications">
          {certifications.map(cert => (
            <div key={cert.id} className="harvardcv-certification">
              <span>{cert.name}</span>
              {cert.date && <span>{cert.date}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>Certifications</h2>
        {certifications.map(cert => (
          <div key={cert.id} className="europass-text">
            {cert.name}{cert.date && ` — ${cert.date}`}
          </div>
        ))}
      </div>
    );
  }

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

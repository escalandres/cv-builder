import type { Certification } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';
import { useTranslation } from 'react-i18next';

interface Props {
  certifications: Certification[];
  variant?: SectionVariant;
}

export default function CertificationsSection({ certifications, variant = 'standard' }: Props) {

  const { t } = useTranslation();

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">{t('cv.sections.certifications')}</div>
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
        <h2>{t('cv.sections.certifications')}</h2>
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
      <div className="cv-section-title">{t('cv.sections.certifications')}</div>
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

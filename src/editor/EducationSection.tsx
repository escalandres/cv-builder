import type { Education } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';
import { useTranslation } from 'react-i18next';
interface Props {
  education: Education;
  variant?: SectionVariant;
}

export default function EducationSection({ education, variant = 'standard' }: Props) {
  const school = [education.school, education.location].filter(Boolean).join(' · ');

  const { t } = useTranslation();

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">{t('cv.sections.education')}</div>
        <div className="harvardcv-item">
          {education.degree && <div className="harvardcv-title">{education.degree}</div>}
          {school && <div className="harvardcv-subtitle">{school}</div>}
        </div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>{t('cv.sections.education')}</h2>
        <div className="europass-job-title">{education.degree}</div>
        {school && <div className="europass-text">{school}</div>}
      </div>
    );
  }

  return (
    <div className="cv-section">
      <div className="cv-section-title">{t('cv.sections.education')}</div>

      {education.degree && (
        <div className="cv-edu-degree">{education.degree}</div>
      )}
      {school && (
        <div className="cv-edu-school">{school}</div>
      )}
    </div>
  );
}

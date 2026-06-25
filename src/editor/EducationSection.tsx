import type { Education } from '../types/cv.types';
import type { SectionVariant } from './HeaderSection';

interface Props {
  education: Education;
  variant?: SectionVariant;
}

export default function EducationSection({ education, variant = 'standard' }: Props) {
  const school = [education.school, education.location].filter(Boolean).join(' · ');

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">Education</div>
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
        <h2>Education</h2>
        <div className="europass-job-title">{education.degree}</div>
        {school && <div className="europass-text">{school}</div>}
      </div>
    );
  }

  return (
    <div className="cv-section">
      <div className="cv-section-title">Education</div>

      {education.degree && (
        <div className="cv-edu-degree">{education.degree}</div>
      )}
      {school && (
        <div className="cv-edu-school">{school}</div>
      )}
    </div>
  );
}

import type { Education } from '../data/cv.model';

interface Props {
  education: Education;
}

export default function EducationSection({ education }: Props) {
  const school = [education.school, education.location].filter(Boolean).join(' · ');

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

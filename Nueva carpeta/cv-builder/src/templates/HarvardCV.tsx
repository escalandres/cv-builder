import '../styles/harvard.css';

import type { CV } from '../types/cv.types';

import HeaderSection from '../editor/HeaderSection';
import SummarySection from '../editor/SummarySection';
import ExperienceSection from '../editor/ExperienceSection';
import EducationSection from '../editor/EducationSection';
import SkillsSection from '../editor/SkillsSection';
import CertificationsSection from '../editor/CertificationsSection';
import BottomSection from '../editor/BottomSection';

interface Props {
  cv: CV;
}

export default function HarvardCV({ cv }: Props) {

  const hasEducation = Boolean(
    cv.education.degree ||
    cv.education.school
  );

  const hasBottom =
    cv.languages.length > 0 ||
    cv.softSkills.length > 0;

  return (

    <div className="cv-pages harvard-template">

      {/* ── Página 1 ── */}

      <div className="cv-doc harvardcv">

        <HeaderSection
          personal={cv.personal}
          variant="harvard"
        />

        {cv.summary && (

          <SummarySection
            summary={cv.summary}
            variant="harvard"
          />

        )}

        {hasEducation && (

          <EducationSection
            education={cv.education}
            variant="harvard"
          />

        )}

        {cv.experience.length > 0 && (

          <ExperienceSection
            experience={cv.experience}
            variant="harvard"
          />

        )}

      </div>

      {/* ── Página 2 ── */}

      <div className="harvardcv">

        {cv.skills.length > 0 && (

          <SkillsSection
            skills={cv.skills}
            variant="harvard"
          />

        )}

        {cv.certifications.length > 0 && (

          <CertificationsSection
            certifications={cv.certifications}
            variant="harvard"
          />

        )}

        {hasBottom && (

          <BottomSection
            languages={cv.languages}
            softSkills={cv.softSkills}
            variant="harvard"
          />

        )}

      </div>

    </div>

  );

}

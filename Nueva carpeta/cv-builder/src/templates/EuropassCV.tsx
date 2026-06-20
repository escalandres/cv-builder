import '../styles/europass.css';

import type { CV } from '../types/cv.types';

import HeaderSection from '../editor/HeaderSection';
import SummarySection from '../editor/SummarySection';
import ExperienceSection from '../editor/ExperienceSection';
import EducationSection from '../editor/EducationSection';
import SkillsSection from '../editor/SkillsSection';
import BottomSection from '../editor/BottomSection';

interface Props {
  cv: CV;
}

export default function EuropassCV({ cv }: Props) {

  const hasEducation = Boolean(
    cv.education.degree ||
    cv.education.school
  );

  const hasBottom =
    cv.languages.length > 0 ||
    cv.softSkills.length > 0;

  return (

    <div className="cv-pages europass-template">

      {/* ── Página 1 ── */}

      <div className="cv-doc europass">

        <HeaderSection
          personal={cv.personal}
          variant="europass"
        />

        {cv.summary && (

          <SummarySection
            summary={cv.summary}
            variant="europass"
          />

        )}

        {cv.experience.length > 0 && (

          <ExperienceSection
            experience={cv.experience}
            variant="europass"
          />

        )}

      </div>

      {/* ── Página 2 ── */}

      <div className="cv-doc europass">

        {hasEducation && (

          <EducationSection
            education={cv.education}
            variant="europass"
          />

        )}

        {cv.skills.length > 0 && (

          <SkillsSection
            skills={cv.skills}
            variant="europass"
          />

        )}

        {hasBottom && (

          <BottomSection
            languages={cv.languages}
            softSkills={cv.softSkills}
            variant="europass"
          />

        )}

      </div>

    </div>

  );

}

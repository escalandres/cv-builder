import '../styles/europass.css';

import type { CV } from '../data/cv.model';

import HeaderSection from '../editor/HeaderSection';
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

      <div className="cv-doc">

        <HeaderSection
          personal={cv.personal}
        />

        {cv.experience.length > 0 && (

          <ExperienceSection
            experience={cv.experience}
          />

        )}

      </div>

      {/* ── Página 2 ── */}

      <div className="cv-doc">

        {hasEducation && (

          <EducationSection
            education={cv.education}
          />

        )}

        {cv.skills.length > 0 && (

          <SkillsSection
            skills={cv.skills}
          />

        )}

        {hasBottom && (

          <BottomSection
            languages={cv.languages}
            softSkills={cv.softSkills}
          />

        )}

      </div>

    </div>

  );

}
import '../styles/standard.css';
import type { CV } from '../data/cv.model';
import HeaderSection from '../editor/HeaderSection';
import SummarySection from '../editor/SummarySection';
import SkillsSection from '../editor/SkillsSection';
import ExperienceSection from '../editor/ExperienceSection';
import ProjectsSection from '../editor/ProjectsSection';
import EducationSection from '../editor/EducationSection';
import CertificationsSection from '../editor/CertificationsSection';
import BottomSection from '../editor/BottomSection';

interface Props {
  cv: CV;
}

export default function StandardCV({ cv }: Props) {
  const hasEducation = Boolean(cv.education.degree || cv.education.school);
  const hasBottom    = cv.languages.length > 0 || cv.softSkills.length > 0;

  return (
    <div className="cv-pages cv-template">

      {/* ── Página 1 ── */}
      <div className="cv-doc">
        <HeaderSection personal={cv.personal} />

        {cv.summary && (
          <SummarySection summary={cv.summary} />
        )}

        {cv.skills.length > 0 && (
          <SkillsSection skills={cv.skills} />
        )}

        {cv.experience.length > 0 && (
          <ExperienceSection experience={cv.experience} />
        )}
      </div>

      {/* ── Página 2 ── */}
      <div className="cv-doc">
        {cv.projects.length > 0 && (
          <ProjectsSection projects={cv.projects} />
        )}

        {hasEducation && (
          <EducationSection education={cv.education} />
        )}

        {cv.certifications.length > 0 && (
          <CertificationsSection certifications={cv.certifications} />
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
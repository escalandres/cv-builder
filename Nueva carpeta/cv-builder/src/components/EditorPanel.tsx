import type { CV } from '../types/cv.types';
import { CV_TEMPLATES, LANGUAGES, LANGUAGE_LEVELS } from '../data/constants';
import Field       from '../ui/Field';
import SectionCard from '../ui/SectionCard';
import BulletEditor from '../ui/BulletEditor';
import MonthInput from '../ui/MonthInput';
import '../styles/editor.css';

interface Props {
  cv:               CV;
  onTemplate:       (val: string) => void;
  onPersonal:       (field: string, val: string) => void;
  onSummary:        (val: string) => void;
  onAddSkill:       () => void;
  onSetSkill:       (i: number, val: string) => void;
  onRemoveSkill:    (i: number) => void;
  onAddExp:         () => void;
  onSetExp:         (id: number, field: string, val: string) => void;
  onRemoveExp:      (id: number) => void;
  onSetExpBullets:  (id: number, bullets: string[]) => void;
  onAddProj:        () => void;
  onSetProj:        (id: number, field: string, val: string) => void;
  onRemoveProj:     (id: number) => void;
  onSetProjBullets: (id: number, bullets: string[]) => void;
  onSetEdu:         (field: string, val: string) => void;
  onAddCert:        () => void;
  onSetCert:        (id: number, field: string, val: string) => void;
  onRemoveCert:     (id: number) => void;
  onAddLang:        () => void;
  onSetLang:        (id: number, field: string, val: string) => void;
  onRemoveLang:     (id: number) => void;
  onAddSoftSkill:   () => void;
  onSetSoftSkill:   (i: number, val: string) => void;
  onRemoveSoftSkill:(i: number) => void;
  visible:          boolean;
  width:            number;
}

export default function EditorPanel({ width, cv, visible, ...on }: Props) {
  return (
    <div className="editor-panel" style={{ display: visible ? 'flex' : 'none', width }}>
      <div className="editor-scroll">

        {/* CV Format */}
        <SectionCard icon="📄" title="CV Format">
          <Field label="Template">
            <select value={cv.template} onChange={e => on.onTemplate(e.target.value)}>
              {CV_TEMPLATES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </Field>
        </SectionCard>

        {/* Personal Info */}
        <SectionCard icon="👤" title="Personal Info">
          <div className="field-row">
            <Field label="Full Name">
              <input value={cv.personal.name} onChange={e => on.onPersonal('name', e.target.value)} placeholder="Jane Smith" />
            </Field>
            <Field label="Job Title / Role">
              <input value={cv.personal.role} onChange={e => on.onPersonal('role', e.target.value)} placeholder="Full Stack Developer" />
            </Field>
          </div>
          <div className="field-row">
            <Field label="Email">
              <input value={cv.personal.email} onChange={e => on.onPersonal('email', e.target.value)} placeholder="email@example.com" />
            </Field>
            <Field label="Phone">
              <input value={cv.personal.phone} onChange={e => on.onPersonal('phone', e.target.value)} placeholder="+1 234 567 8900" />
            </Field>
          </div>
          <Field label="Location">
            <input value={cv.personal.location} onChange={e => on.onPersonal('location', e.target.value)} placeholder="City, Country" />
          </Field>
          <Field label="LinkedIn (without https://)">
            <input value={cv.personal.linkedin} onChange={e => on.onPersonal('linkedin', e.target.value)} placeholder="linkedin.com/in/yourprofile" />
          </Field>
          <Field label="GitHub (without https://)">
            <input value={cv.personal.github} onChange={e => on.onPersonal('github', e.target.value)} placeholder="github.com/yourusername" />
          </Field>
          <Field label="Portfolio (without https://)">
            <input value={cv.personal.portfolio} onChange={e => on.onPersonal('portfolio', e.target.value)} placeholder="yourportfolio.com" />
          </Field>
        </SectionCard>

        {/* Summary */}
        <SectionCard icon="📝" title="Professional Summary">
          <Field label="Summary">
            <textarea
              value={cv.summary}
              onChange={e => on.onSummary(e.target.value)}
              placeholder="Write a concise 2–4 sentence summary highlighting your experience, key skills, and what makes you stand out..."
              rows={5}
            />
          </Field>
        </SectionCard>

        {/* Technical Skills */}
        <SectionCard icon="⚙️" title="Technical Skills">
          <Field label="Technical Skills">
            {cv.skills.map((s, i) => (
              <div key={i} className="skill-row">
                <input
                  value={s}
                  onChange={e => on.onSetSkill(i, e.target.value)}
                  placeholder="e.g. React.js, Node.js, TypeScript"
                />
                <button className="btn-icon" onClick={() => on.onRemoveSkill(i)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddSkill}>＋ Add skill group</button>
          </Field>
        </SectionCard>

        {/* Work Experience */}
        <SectionCard icon="💼" title="Work Experience">
          {cv.experience.map(job => (
            <div key={job.id} className="list-item">
              <div className="list-item-header">
                <div style={{ flex: 1 }}>
                  <div className="list-item-title">{job.title || 'New Position'}</div>
                  <div className="list-item-sub">{job.company}</div>
                </div>
                <button className="btn-icon" onClick={() => on.onRemoveExp(job.id)}>✕</button>
              </div>
              <div className="field-row">
                <Field label="Job Title">
                  <input value={job.title} onChange={e => on.onSetExp(job.id, 'title', e.target.value)} placeholder="Software Engineer" />
                </Field>
                <Field label="Company">
                  <input value={job.company} onChange={e => on.onSetExp(job.id, 'company', e.target.value)} placeholder="Acme Corp" />
                </Field>
              </div>
              <Field label="Location">
                <input value={job.location} onChange={e => on.onSetExp(job.id, 'location', e.target.value)} placeholder="City, Country" />
              </Field>
              <div className="field-row">
                <Field label="Start Date">
                  <MonthInput value={job.startDate} onChange={v => on.onSetExp(job.id, 'startDate', v)} placeholder="Jan 2022" />
                </Field>
                <Field label="End Date">
                  <MonthInput value={job.endDate} onChange={v => on.onSetExp(job.id, 'endDate', v)} placeholder="Dec 2023" allowPresent />
                </Field>
              </div>
              <label className="form-group-label">Achievements / Responsibilities</label>
              <BulletEditor bullets={job.bullets} onChange={b => on.onSetExpBullets(job.id, b)} />
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddExp}>＋ Add position</button>
        </SectionCard>

        {/* Projects */}
        <SectionCard icon="🚀" title="Projects">
          {cv.projects.map(p => (
            <div key={p.id} className="list-item">
              <div className="list-item-header">
                <div style={{ flex: 1 }}>
                  <div className="list-item-title">{p.title || 'New Project'}</div>
                  <div className="list-item-sub">{p.tech}</div>
                </div>
                <button className="btn-icon" onClick={() => on.onRemoveProj(p.id)}>✕</button>
              </div>
              <Field label="Project Title">
                <input value={p.title} onChange={e => on.onSetProj(p.id, 'title', e.target.value)} placeholder="My Awesome Project" />
              </Field>
              <Field label="Tech Stack">
                <input value={p.tech} onChange={e => on.onSetProj(p.id, 'tech', e.target.value)} placeholder="React · Node.js · PostgreSQL" />
              </Field>
              <div className="field-row">
                <Field label="Start Date">
                  <MonthInput value={p.startDate} onChange={v => on.onSetProj(p.id, 'startDate', v)} placeholder="Mar 2023" />
                </Field>
                <Field label="End Date">
                  <MonthInput value={p.endDate} onChange={v => on.onSetProj(p.id, 'endDate', v)} placeholder="Jun 2023" allowPresent />
                </Field>
              </div>
              <label className="form-group-label">Description</label>
              <BulletEditor bullets={p.bullets} onChange={b => on.onSetProjBullets(p.id, b)} />
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddProj}>＋ Add project</button>
        </SectionCard>

        {/* Education */}
        <SectionCard icon="🎓" title="Education">
          <Field label="Degree / Program">
            <input value={cv.education.degree} onChange={e => on.onSetEdu('degree', e.target.value)} placeholder="Bachelor of Computer Science" />
          </Field>
          <Field label="School / University">
            <input value={cv.education.school} onChange={e => on.onSetEdu('school', e.target.value)} placeholder="MIT" />
          </Field>
          <Field label="Location">
            <input value={cv.education.location} onChange={e => on.onSetEdu('location', e.target.value)} placeholder="Cambridge, MA, USA" />
          </Field>
        </SectionCard>

        {/* Certifications */}
        <SectionCard icon="🏅" title="Certifications">
          {cv.certifications.map(c => (
            <div key={c.id} className="list-item">
              <div className="list-item-header">
                <div className="list-item-title" style={{ flex: 1 }}>{c.name || 'New Certification'}</div>
                <button className="btn-icon" onClick={() => on.onRemoveCert(c.id)}>✕</button>
              </div>
              <div className="field-row">
                <Field label="Certification Name">
                  <input value={c.name} onChange={e => on.onSetCert(c.id, 'name', e.target.value)} placeholder="AWS Solutions Architect" />
                </Field>
                <Field label="Date">
                  <MonthInput value={c.date} onChange={v => on.onSetCert(c.id, 'date', v)} placeholder="Jan 2024" />
                </Field>
              </div>
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddCert}>＋ Add certification</button>
        </SectionCard>

        {/* Languages */}
        <SectionCard icon="🌐" title="Languages">
          <Field label="Languages">
            {cv.languages.map(l => (
              <div key={l.id} className="skill-row">
                <select
                  value={l.name}
                  onChange={e => on.onSetLang(l.id, 'name', e.target.value)}
                  style={{ flex: '0 0 180px' }}
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang} value={lang}>{lang || 'Select language'}</option>
                  ))}
                </select>
                <select value={l.level} onChange={e => on.onSetLang(l.id, 'level', e.target.value)}>
                  {LANGUAGE_LEVELS.map(level => (
                    <option key={level} value={level}>{level || 'Select level'}</option>
                  ))}
                </select>
                <button className="btn-icon" onClick={() => on.onRemoveLang(l.id)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddLang}>＋ Add language</button>
          </Field>
        </SectionCard>

        {/* Soft Skills */}
        <SectionCard icon="🤝" title="Soft Skills">
          <Field label="Soft Skills">
            {cv.softSkills.map((s, i) => (
              <div key={i} className="skill-row">
                <input value={s} onChange={e => on.onSetSoftSkill(i, e.target.value)} placeholder="e.g. Leadership" />
                <button className="btn-icon" onClick={() => on.onRemoveSoftSkill(i)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddSoftSkill}>＋ Add soft skill</button>
          </Field>
        </SectionCard>

        <div style={{ height: 20 }} />
      </div>
    </div>
  );
}

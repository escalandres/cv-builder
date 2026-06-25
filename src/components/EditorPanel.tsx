import { useTranslation } from 'react-i18next';

import type { CV } from '../types/cv.types';
import { CV_TEMPLATES, LANGUAGES, LANGUAGE_LEVELS } from '../data/constants';
import Field        from '../ui/Field';
import SectionCard  from '../ui/SectionCard';
import BulletEditor from '../ui/BulletEditor';
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
  width?:           number;
}

export default function EditorPanel({ cv, visible, width, ...on }: Props) {
  const { t } = useTranslation();

  return (
    <div
      className="editor-panel"
      style={{
        display: visible ? 'flex' : 'none',
        ...(width ? { width, minWidth: width } : {}),
      }}
    >
      <div className="editor-scroll">

        {/* CV Format */}
        <SectionCard icon="📄" title={t('editor.sections.format')}>
          <Field label={t('editor.fields.template')}>
            <select value={cv.template} onChange={e => on.onTemplate(e.target.value)}>
              {CV_TEMPLATES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </Field>
        </SectionCard>

        {/* Personal Info */}
        <SectionCard icon="👤" title={t('editor.sections.personal')}>
          <div className="field-row">
            <Field label={t('editor.fields.fullName')}>
              <input
                value={cv.personal.name}
                onChange={e => on.onPersonal('name', e.target.value)}
                placeholder={t('editor.placeholders.fullName')}
              />
            </Field>
            <Field label={t('editor.fields.role')}>
              <input
                value={cv.personal.role}
                onChange={e => on.onPersonal('role', e.target.value)}
                placeholder={t('editor.placeholders.role')}
              />
            </Field>
          </div>
          <div className="field-row">
            <Field label={t('editor.fields.email')}>
              <input
                value={cv.personal.email}
                onChange={e => on.onPersonal('email', e.target.value)}
                placeholder={t('editor.placeholders.email')}
              />
            </Field>
            <Field label={t('editor.fields.phone')}>
              <input
                value={cv.personal.phone}
                onChange={e => on.onPersonal('phone', e.target.value)}
                placeholder={t('editor.placeholders.phone')}
              />
            </Field>
          </div>
          <Field label={t('editor.fields.location')}>
            <input
              value={cv.personal.location}
              onChange={e => on.onPersonal('location', e.target.value)}
              placeholder={t('editor.placeholders.location')}
            />
          </Field>
          <Field label={t('editor.fields.linkedin')}>
            <input
              value={cv.personal.linkedin}
              onChange={e => on.onPersonal('linkedin', e.target.value)}
              placeholder={t('editor.placeholders.linkedin')}
            />
          </Field>
          <Field label={t('editor.fields.github')}>
            <input
              value={cv.personal.github}
              onChange={e => on.onPersonal('github', e.target.value)}
              placeholder={t('editor.placeholders.github')}
            />
          </Field>
          <Field label={t('editor.fields.portfolio')}>
            <input
              value={cv.personal.portfolio}
              onChange={e => on.onPersonal('portfolio', e.target.value)}
              placeholder={t('editor.placeholders.portfolio')}
            />
          </Field>
        </SectionCard>

        {/* Summary */}
        <SectionCard icon="📝" title={t('editor.sections.summary')}>
          <Field label={t('editor.fields.summary')}>
            <textarea
              value={cv.summary}
              onChange={e => on.onSummary(e.target.value)}
              placeholder={t('editor.placeholders.summary')}
              rows={5}
            />
          </Field>
        </SectionCard>

        {/* Technical Skills */}
        <SectionCard icon="⚙️" title={t('editor.sections.skills')}>
          <Field label={t('editor.fields.technicalSkills')}>
            {cv.skills.map((s, i) => (
              <div key={i} className="skill-row">
                <input
                  value={s}
                  onChange={e => on.onSetSkill(i, e.target.value)}
                  placeholder={t('editor.placeholders.skillGroup')}
                />
                <button className="btn-icon" onClick={() => on.onRemoveSkill(i)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddSkill}>
              {t('editor.actions.addSkill')}
            </button>
          </Field>
        </SectionCard>

        {/* Work Experience */}
        <SectionCard icon="💼" title={t('editor.sections.experience')}>
          {cv.experience.map(job => (
            <div key={job.id} className="list-item">
              <div className="list-item-header">
                <div style={{ flex: 1 }}>
                  <div className="list-item-title">
                    {job.title || t('editor.placeholders.newPosition')}
                  </div>
                  <div className="list-item-sub">{job.company}</div>
                </div>
                <button className="btn-icon" onClick={() => on.onRemoveExp(job.id)}>✕</button>
              </div>
              <div className="field-row">
                <Field label={t('editor.fields.jobTitle')}>
                  <input
                    value={job.title}
                    onChange={e => on.onSetExp(job.id, 'title', e.target.value)}
                    placeholder={t('editor.placeholders.jobTitle')}
                  />
                </Field>
                <Field label={t('editor.fields.company')}>
                  <input
                    value={job.company}
                    onChange={e => on.onSetExp(job.id, 'company', e.target.value)}
                    placeholder={t('editor.placeholders.company')}
                  />
                </Field>
              </div>
              <Field label={t('editor.fields.location')}>
                <input
                  value={job.location}
                  onChange={e => on.onSetExp(job.id, 'location', e.target.value)}
                  placeholder={t('editor.placeholders.location')}
                />
              </Field>
              <div className="field-row">
                <Field label={t('editor.fields.startDate')}>
                  <input
                    value={job.startDate}
                    onChange={e => on.onSetExp(job.id, 'startDate', e.target.value)}
                    placeholder={t('editor.placeholders.present')}
                  />
                </Field>
                <Field label={t('editor.fields.endDate')}>
                  <input
                    value={job.endDate}
                    onChange={e => on.onSetExp(job.id, 'endDate', e.target.value)}
                    placeholder={t('editor.placeholders.present')}
                  />
                </Field>
              </div>
              <label className="form-group-label">
                {t('editor.fields.achievements')}
              </label>
              <BulletEditor
                bullets={job.bullets}
                onChange={b => on.onSetExpBullets(job.id, b)}
                t={t}
              />
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddExp}>
            {t('editor.actions.addPosition')}
          </button>
        </SectionCard>

        {/* Projects */}
        <SectionCard icon="🚀" title={t('editor.sections.projects')}>
          {cv.projects.map(p => (
            <div key={p.id} className="list-item">
              <div className="list-item-header">
                <div style={{ flex: 1 }}>
                  <div className="list-item-title">
                    {p.title || t('editor.placeholders.newProject')}
                  </div>
                  <div className="list-item-sub">{p.tech}</div>
                </div>
                <button className="btn-icon" onClick={() => on.onRemoveProj(p.id)}>✕</button>
              </div>
              <Field label={t('editor.fields.projectTitle')}>
                <input
                  value={p.title}
                  onChange={e => on.onSetProj(p.id, 'title', e.target.value)}
                  placeholder={t('editor.placeholders.projectTitle')}
                />
              </Field>
              <Field label={t('editor.fields.techStack')}>
                <input
                  value={p.tech}
                  onChange={e => on.onSetProj(p.id, 'tech', e.target.value)}
                  placeholder={t('editor.placeholders.techStack')}
                />
              </Field>
              <div className="field-row">
                <Field label={t('editor.fields.startDate')}>
                  <input
                    value={p.startDate}
                    onChange={e => on.onSetProj(p.id, 'startDate', e.target.value)}
                    placeholder={t('editor.placeholders.present')}
                  />
                </Field>
                <Field label={t('editor.fields.endDate')}>
                  <input
                    value={p.endDate}
                    onChange={e => on.onSetProj(p.id, 'endDate', e.target.value)}
                    placeholder={t('editor.placeholders.present')}
                  />
                </Field>
              </div>
              <label className="form-group-label">
                {t('editor.fields.description')}
              </label>
              <BulletEditor
                bullets={p.bullets}
                onChange={b => on.onSetProjBullets(p.id, b)}
                t={t}
              />
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddProj}>
            {t('editor.actions.addProject')}
          </button>
        </SectionCard>

        {/* Education */}
        <SectionCard icon="🎓" title={t('editor.sections.education')}>
          <Field label={t('editor.fields.degree')}>
            <input
              value={cv.education.degree}
              onChange={e => on.onSetEdu('degree', e.target.value)}
              placeholder={t('editor.placeholders.degree')}
            />
          </Field>
          <Field label={t('editor.fields.school')}>
            <input
              value={cv.education.school}
              onChange={e => on.onSetEdu('school', e.target.value)}
              placeholder={t('editor.placeholders.school')}
            />
          </Field>
          <Field label={t('editor.fields.location')}>
            <input
              value={cv.education.location}
              onChange={e => on.onSetEdu('location', e.target.value)}
              placeholder={t('editor.placeholders.schoolLoc')}
            />
          </Field>
        </SectionCard>

        {/* Certifications */}
        <SectionCard icon="🏅" title={t('editor.sections.certs')}>
          {cv.certifications.map(c => (
            <div key={c.id} className="list-item">
              <div className="list-item-header">
                <div className="list-item-title" style={{ flex: 1 }}>
                  {c.name || t('editor.placeholders.newCert')}
                </div>
                <button className="btn-icon" onClick={() => on.onRemoveCert(c.id)}>✕</button>
              </div>
              <div className="field-row">
                <Field label={t('editor.fields.certName')}>
                  <input
                    value={c.name}
                    onChange={e => on.onSetCert(c.id, 'name', e.target.value)}
                    placeholder={t('editor.placeholders.certName')}
                  />
                </Field>
                <Field label={t('editor.fields.date')}>
                  <input
                    value={c.date}
                    onChange={e => on.onSetCert(c.id, 'date', e.target.value)}
                    placeholder={t('editor.placeholders.present')}
                  />
                </Field>
              </div>
            </div>
          ))}
          <button className="btn-add" onClick={on.onAddCert}>
            {t('editor.actions.addCert')}
          </button>
        </SectionCard>

        {/* Languages */}
        <SectionCard icon="🌐" title={t('editor.sections.languages')}>
          <Field label={t('editor.fields.location')}>
            {cv.languages.map(l => (
              <div key={l.id} className="skill-row">
                <select
                  value={l.name}
                  onChange={e => on.onSetLang(l.id, 'name', e.target.value)}
                  style={{ flex: '0 0 180px' }}
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang} value={lang}>
                      {lang || t('editor.actions.selectLang')}
                    </option>
                  ))}
                </select>
                <select
                  value={l.level}
                  onChange={e => on.onSetLang(l.id, 'level', e.target.value)}
                >
                  {LANGUAGE_LEVELS.map(level => (
                    <option key={level} value={level}>
                      {level || t('editor.actions.selectLevel')}
                    </option>
                  ))}
                </select>
                <button className="btn-icon" onClick={() => on.onRemoveLang(l.id)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddLang}>
              {t('editor.actions.addLanguage')}
            </button>
          </Field>
        </SectionCard>

        {/* Soft Skills */}
        <SectionCard icon="🤝" title={t('editor.sections.softSkills')}>
          <Field label={t('editor.fields.softSkills')}>
            {cv.softSkills.map((s, i) => (
              <div key={i} className="skill-row">
                <input
                  value={s}
                  onChange={e => on.onSetSoftSkill(i, e.target.value)}
                  placeholder={t('editor.placeholders.softSkill')}
                />
                <button className="btn-icon" onClick={() => on.onRemoveSoftSkill(i)}>✕</button>
              </div>
            ))}
            <button className="btn-add" onClick={on.onAddSoftSkill}>
              {t('editor.actions.addSoftSkill')}
            </button>
          </Field>
        </SectionCard>

        <div style={{ height: 20 }} />
      </div>
    </div>
  );
}
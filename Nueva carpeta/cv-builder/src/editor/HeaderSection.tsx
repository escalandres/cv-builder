import type { Personal } from '../data/cv.model';

interface Props {
  personal: Personal;
}

export default function HeaderSection({ personal }: Props) {
  return (
    <div className="cv-header">
      <div className="cv-name">{personal.name || 'Your Name'}</div>

      {personal.role && (
        <div className="cv-role">{personal.role}</div>
      )}

      <div className="cv-contacts">
        {personal.email    && <span>{personal.email}</span>}
        {personal.phone    && <span>{personal.phone}</span>}
        {personal.location && <span>{personal.location}</span>}
        {personal.linkedin  && (
          <a href={`https://${personal.linkedin}`}>{personal.linkedin}</a>
        )}
        {personal.github && (
          <a href={`https://${personal.github}`}>{personal.github}</a>
        )}
        {personal.portfolio && (
          <a href={`https://${personal.portfolio}`}>{personal.portfolio}</a>
        )}
      </div>
    </div>
  );
}

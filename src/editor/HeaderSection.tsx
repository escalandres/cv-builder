import type { Personal } from '../types/cv.types';

export type SectionVariant = 'standard' | 'harvard' | 'europass';

interface Props {
  personal: Personal;
  variant?: SectionVariant;
}

export default function HeaderSection({ personal, variant = 'standard' }: Props) {
  const contacts = [
    personal.email,
    personal.phone,
    personal.location,
  ].filter(Boolean);

  const links = [
    personal.linkedin  && { href: `https://${personal.linkedin}`,  label: personal.linkedin },
    personal.github     && { href: `https://${personal.github}`,    label: personal.github },
    personal.portfolio  && { href: `https://${personal.portfolio}`, label: personal.portfolio },
  ].filter(Boolean) as { href: string; label: string }[];

  if (variant === 'harvard') {
    return (
      <div className="harvardcv-header">
        <h1>{personal.name || 'Your Name'}</h1>
        {personal.role && <div>{personal.role}</div>}
        <div className="harvardcv-contact">
          {contacts.map((c, i) => <span key={i}>{c}</span>)}
          {links.map((l, i) => (
            <span key={i}><a href={l.href}>{l.label}</a></span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <>
        <div className="europass-header">
          <h1>{personal.name || 'Your Name'}</h1>
          <div className="europass-logo">
            <img src="/europass-logo.webp" alt="Europass Logo" />
            <span className="europass-brand">europass</span>
          </div>

        </div>
        {personal.role && <div className="europass-text">{personal.role}</div>}
        <div className="europass-divider" />
        <div className="europass-contact">
          {contacts.map((c, i) => <span key={i}>{c}</span>)}
          {links.map((l, i) => (
            <span key={i}><a href={l.href}>{l.label}</a></span>
          ))}
        </div>
      </>
    );
  }

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

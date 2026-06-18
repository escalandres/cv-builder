import { ReactNode, useState } from 'react';

interface Props {
  icon:         string;
  title:        string;
  children:     ReactNode;
  defaultOpen?: boolean;
}

export default function SectionCard({ icon, title, children, defaultOpen = true }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-card">
      <div className="section-header" onClick={() => setOpen(o => !o)}>
        <span className="section-icon">{icon}</span>
        <span className="section-title">{title}</span>
        <span className={`section-chevron ${open ? 'open' : ''}`}>▼</span>
      </div>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
}

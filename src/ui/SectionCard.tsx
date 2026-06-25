import { useState } from 'react';
import type { ReactNode } from 'react';
import '../styles/ui.css';

interface Props {
  icon: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function SectionCard({
  icon,
  title,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-card">

      <button
        type="button"
        className="section-header"
        onClick={() => setOpen(prev => !prev)}
      >
        <div className="section-title">

          <span className="section-icon">
            {icon}
          </span>

          <span>
            {title}
          </span>

        </div>

        <span
          className={`section-chevron ${open ? 'open' : ''}`}
        >
          ▼
        </span>

      </button>

      {open && (
        <div className="section-body">
          {children}
        </div>
      )}

    </div>
  );
}

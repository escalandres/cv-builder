import type { ReactNode } from 'react';

import '../styles/ui.css';

interface Props {
  label: string;
  children: ReactNode;
  className?: string;
}

export default function Field({
  label,
  children,
  className = '',
}: Props) {

  return (

    <div className={`field ${className}`.trim()}>

      <label className="field-label">

        {label}

      </label>

      <div className="field-control">

        {children}

      </div>

    </div>

  );

}

import { ReactNode } from 'react';

interface Props {
  label:     string;
  children:  ReactNode;
  className?: string;
}

export default function Field({ label, children, className = '' }: Props) {
  return (
    <div className={`field ${className}`.trim()}>
      <label>{label}</label>
      {children}
    </div>
  );
}

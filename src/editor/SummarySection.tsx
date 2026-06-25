import type { SectionVariant } from './HeaderSection';

interface Props {
  summary: string;
  variant?: SectionVariant;
}

export default function SummarySection({ summary, variant = 'standard' }: Props) {
  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">Professional Summary</div>
        <div className="harvardcv-summary">{summary}</div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>Professional Summary</h2>
        <div className="europass-text">{summary}</div>
      </div>
    );
  }

  return (
    <div className="cv-section">
      <div className="cv-section-title">Professional Summary</div>
      <div className="cv-summary">{summary}</div>
    </div>
  );
}

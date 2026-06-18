interface Props {
  summary: string;
}

export default function SummarySection({ summary }: Props) {
  return (
    <div className="cv-section">
      <div className="cv-section-title">Professional Summary</div>
      <div className="cv-summary">{summary}</div>
    </div>
  );
}

import type { SectionVariant } from './HeaderSection';
import { useTranslation } from 'react-i18next';
interface Props {
  summary: string;
  variant?: SectionVariant;
}

export default function SummarySection({ summary, variant = 'standard' }: Props) {
  const { t } = useTranslation();
  if (variant === 'harvard') {
    return (
      <div className="harvardcv-section">
        <div className="harvardcv-section-title">{t('cv.sections.summary')}</div>
        <div className="harvardcv-summary">{summary}</div>
      </div>
    );
  }

  if (variant === 'europass') {
    return (
      <div className="europass-section">
        <h2>{t('cv.sections.summary')}</h2>
        <div className="europass-text">{summary}</div>
      </div>
    );
  }

  return (
    <div className="cv-section">
      <div className="cv-section-title">{t('cv.sections.summary')}</div>
      <div className="cv-summary">{summary}</div>
    </div>
  );
}

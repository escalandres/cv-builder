import { useTranslation } from 'react-i18next';

import type { CV } from '../types/cv.types';
import TemplateRenderer from '../templates/TemplateRenderer';

import '../styles/preview-panel.css';

interface Props {
  cv: CV;
  onExportPDF: () => void;
  toolbarLabel?: string;
  fullWidth?: boolean;
}

export default function PreviewPanel({
  cv,
  onExportPDF,
  toolbarLabel,
  fullWidth = false,
}: Props) {

  const { t } = useTranslation();

  return (
    <div
      className={`preview-panel ${
        fullWidth ? 'preview-full' : ''
      }`}
    >

      <div className="preview-toolbar">

        <span>
          {toolbarLabel ??
            t('preview.livePreview')}
        </span>

        <button
          type="button"
          className="btn btn-teal btn-sm"
          onClick={onExportPDF}
        >
          🖨 {t('preview.exportPdf')}
        </button>

      </div>

      <div className="preview-scroll">
        <TemplateRenderer cv={cv} />
      </div>

    </div>
  );
}
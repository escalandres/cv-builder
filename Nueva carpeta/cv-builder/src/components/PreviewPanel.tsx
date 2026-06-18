import type { CV } from '../data/cv.model';
import TemplateRenderer from '../templates/TemplateRenderer';

interface Props {
  cv:CV;
  onExportPDF:() => void;
  toolbarLabel:string;
  fullWidth?:boolean;
}

export default function PreviewPanel({
  cv,
  onExportPDF,
  toolbarLabel = 'Live preview',
  fullWidth = false
}: Props) {
  return (
    <div className={`preview-panel ${fullWidth ? 'preview-full' : ''}`}>
      <div className="preview-toolbar">
        <span>{toolbarLabel}</span>
        <button className="btn btn-teal btn-sm" onClick={onExportPDF}>
          🖨 Export PDF
        </button>
      </div>
      <div className="preview-scroll">
        <TemplateRenderer cv={cv} />
      </div>
    </div>
  );
}

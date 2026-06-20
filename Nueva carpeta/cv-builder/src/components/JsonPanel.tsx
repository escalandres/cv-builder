import type { CV } from '../types/cv.types';
import '../styles/json.css';

interface Props {
  cv:           CV;
  onExportJSON: () => void;
  onOpenImport: () => void;
}

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)/g,
    match => {
      let cls = 'json-number';
      if (match.startsWith('"')) {
        cls = match.endsWith(':')
          ? 'json-key'
          : 'json-string';
      }
      else if (
        match === 'true' ||
        match === 'false'
      ) {
        cls = 'json-bool';
      }
      else if (
        match === 'null'
      ) {
        cls = 'json-null';
      }
      return `<span class="${cls}">${match}</span>`;
    },
  );
}

export default function JsonPanel({ cv, onExportJSON, onOpenImport }: Props) {
  const jsonStr = JSON.stringify(cv, null, 2);

  return (
    <div className="json-panel">
      <div className="json-toolbar">
        <div className="json-toolbar-left">
          <div className="json-toolbar-title">
            {'{ }'} Live JSON
          </div>
          <div className="json-toolbar-subtitle">
            Edit in the Editor panel, export/import with the toolbar buttons
          </div>
        </div>
        <div className="json-toolbar-actions">
          <button
            className="btn btn-teal"
            onClick={onExportJSON}
          >
            📥 Export
          </button>
          <button
            className="btn btn-ghost"
            onClick={onOpenImport}
          >
            📤 Import
          </button>
        </div>
      </div>
      <div className="json-container">
        <pre
          className="json-content"
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(jsonStr)
          }}
        />
      </div>
    </div>
  );
}

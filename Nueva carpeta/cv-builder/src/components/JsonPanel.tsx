import type { CV } from '../data/cv.model';

interface Props {
  cv:           CV;
  onExportJSON: () => void;
  onOpenImport: () => void;
}

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    match => {
      let cls = 'json-number';
      if (/^"/.test(match))       cls = /:$/.test(match) ? 'json-key' : 'json-string';
      else if (/true|false/.test(match)) cls = 'json-bool';
      return `<span class="${cls}">${match}</span>`;
    },
  );
}

export default function JsonPanel({ cv, onExportJSON, onOpenImport }: Props) {
  const jsonStr = JSON.stringify(cv, null, 2);

  return (
    <div className="json-panel">
      <div className="json-toolbar">
        <span>{'{ }'} Live JSON — edit in the Editor panel, export/import with the toolbar buttons</span>
        <button className="btn btn-ghost btn-sm" onClick={onExportJSON}>📥 Export</button>
        <button className="btn btn-ghost btn-sm" onClick={onOpenImport}>📤 Import</button>
      </div>
      <div className="json-scroll">
        <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(jsonStr) }} />
      </div>
    </div>
  );
}

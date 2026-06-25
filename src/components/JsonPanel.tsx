import { useTranslation } from 'react-i18next';

import type { CV } from '../types/cv.types';

import '../styles/json.css';

interface Props {
  cv: CV;
  onExportJSON: () => void;
  onOpenImport: () => void;
}

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    match => {
      let cls = 'json-number';

      if (match.startsWith('"')) {
        cls = match.endsWith(':')
          ? 'json-key'
          : 'json-string';
      } else if (
        match === 'true' ||
        match === 'false'
      ) {
        cls = 'json-bool';
      } else if (
        match === 'null'
      ) {
        cls = 'json-null';
      }

      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export default function JsonPanel({
  cv,
  onExportJSON,
  onOpenImport,
}: Props) {

  const { t } = useTranslation();

  const jsonStr = JSON.stringify(
    cv,
    null,
    2
  );

  return (
    <div className="json-panel">

      <div className="json-header">

        <div>

          <h2 className="json-title">
            {'{ }'} {t('json.title')}
          </h2>

          <p className="json-subtitle">
            {t('json.description')}
          </p>

        </div>

        <div className="json-actions">

          <button
            type="button"
            className="btn btn-ghost"
            onClick={onExportJSON}
          >
            📥 {t('json.export')}
          </button>

          <button
            type="button"
            className="btn btn-teal"
            onClick={onOpenImport}
          >
            📤 {t('json.import')}
          </button>

        </div>

      </div>

      <pre
        className="json-content"
        dangerouslySetInnerHTML={{
          __html: syntaxHighlight(jsonStr),
        }}
      />

    </div>
  );
}
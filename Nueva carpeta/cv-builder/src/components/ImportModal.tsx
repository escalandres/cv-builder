import { useState } from 'react';

interface Props {
  onImport: (text: string) => string | null; // returns error string or null on success
  onClose:  () => void;
}

export default function ImportModal({ onImport, onClose }: Props) {
  const [text,  setText]  = useState('');
  const [error, setError] = useState('');

  const handleImport = () => {
    const err = onImport(text);
    if (err) setError(err);
    else onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h3>📤 Import CV from JSON</h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>
          Paste a previously exported JSON below. This will replace your current data.
        </p>
        <textarea
          value={text}
          onChange={e => { setText(e.target.value); setError(''); }}
          placeholder={'{\n  "personal": { "name": "..." },\n  ...\n}'}
        />
        {error && <div className="modal-error">⚠️ {error}</div>}
        <div className="modal-actions">
          <button
            className="btn btn-ghost"
            style={{ color: 'var(--text)', border: '1px solid var(--border)' }}
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="btn btn-teal" onClick={handleImport}>Import</button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import '../styles/import-modal.css';

interface Props {
  onImport: (text: string) => string | null;
  onClose: () => void;
}

export default function ImportModal({
  onImport,
  onClose,
}: Props) {

  const [text,setText] = useState('');

  const [error,setError] = useState('');

  useEffect(() => {

    const handleEsc = (
      e: KeyboardEvent
    ) => {

      if (e.key === 'Escape') {

        onClose();

      }

    };

    window.addEventListener(
      'keydown',
      handleEsc
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleEsc
      );

    };

  },[onClose]);

  const handleImport = () => {

    if (!text.trim()) {

      setError(
        'JSON cannot be empty.'
      );

      return;

    }

    const err = onImport(text);

    if (err) {

      setError(err);

      return;

    }

    onClose();

  };

  const handleOverlayClick = (

    e: React.MouseEvent<HTMLDivElement>

  ) => {

    if (
      e.target === e.currentTarget
    ) {

      onClose();

    }

  };

  return (

    <div

      className="modal-overlay"

      onClick={handleOverlayClick}

      role="dialog"

      aria-modal="true"

    >

      <div className="modal">

        <div className="modal-header">

          <h3>

            📤 Import CV from JSON

          </h3>

        </div>

        <div className="modal-description">

          Paste a previously exported JSON below.

          This will replace your current data.

        </div>

        <textarea

          className="modal-textarea"

          value={text}

          onChange={e => {

            setText(

              e.target.value

            );

            if (error) {

              setError('');

            }

          }}

          placeholder={`{
  "personal": {
    "name":"..."
  }
}`}

        />

        {error && (

          <div className="modal-error">

            ⚠️ {error}

          </div>

        )}

        <div className="modal-actions">

          <button

            type="button"

            className="btn btn-ghost"

            onClick={onClose}

          >

            Cancel

          </button>

          <button

            type="button"

            className="btn btn-teal"

            onClick={handleImport}

            disabled={!text.trim()}

          >

            Import

          </button>

        </div>

      </div>

    </div>

  );
}
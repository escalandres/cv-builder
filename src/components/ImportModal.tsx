import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/import-modal.css';

interface Props {
  onImport: (text: string) => string | null;
  onClose: () => void;
}

export default function ImportModal({
  onImport,
  onClose,
}: Props) {

  const { t } = useTranslation();

  const [text, setText] = useState('');
  const [error, setError] = useState('');

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

  }, [onClose]);

  const handleImport = () => {

    if (!text.trim()) {

      setError(
        t('modal.import.errorEmpty')
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
            {t('modal.import.title')}
          </h3>

        </div>

        <div className="modal-description">

          {t('modal.import.description')}

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
          placeholder={t('modal.import.placeholder')}
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

            {t('modal.import.cancel')}

          </button>

          <button
            type="button"
            className="btn btn-teal"
            onClick={handleImport}
            disabled={!text.trim()}
          >

            {t('modal.import.import')}

          </button>

        </div>

      </div>

    </div>

  );

}
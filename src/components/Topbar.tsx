import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/topbar.css';

import { SUPPORTED_LANGUAGES } from '../i18n/index';
import type { LangCode } from '../i18n/index';

type Tab = 'editor' | 'preview' | 'json';

interface Props {
  activeTab:    Tab;
  onTabChange:  (tab: Tab) => void;
  onSample:     () => void;
  onOpenImport: () => void;
  onExportJSON: () => void;
  onExportPDF:  () => void;
  onFileImport: (file: File) => void;
  onClear:      () => void;
}

export default function Topbar({
  activeTab,
  onTabChange,
  onSample,
  onOpenImport,
  onExportJSON,
  onExportPDF,
  onFileImport,
  onClear,
}: Props) {

  const { t, i18n } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileImport(file);
    e.target.value = '';
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value as LangCode);
  };

  const TABS = [
    { value: 'editor'  as Tab, label: t('topbar.tabs.editor')  },
    { value: 'preview' as Tab, label: t('topbar.tabs.preview') },
    { value: 'json'    as Tab, label: t('topbar.tabs.json')    },
  ];

  return (
    <header className="topbar">

      <div className="topbar-logo">
        <img src="/cv-builder-favicon.svg" alt="CV Builder" />
        CV <span className="topbar-logo-highlight" style={{ color: '#0ea5e9' }}>Builder</span>
      </div>

      <div className="topbar-tabs">
        {TABS.map(tab => (
          <button
            key={tab.value}
            type="button"
            className={`tab-btn ${activeTab === tab.value ? 'active' : ''}`}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="topbar-spacer" />

      <div className="topbar-actions">

        {/* Selector de idioma */}
        <select
          className="lang-select"
          value={i18n.language}
          onChange={handleLangChange}
          title="Interface language"
        >
          {SUPPORTED_LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        <button type="button" className="btn btn-ghost" onClick={onSample}>
          ✨ {t('topbar.sample')}
        </button>

        <button type="button" className="btn btn-danger" onClick={onClear}>
          🗑 {t('topbar.clear')}
        </button>

        <button type="button" className="btn btn-ghost" onClick={onOpenImport}>
          📤 {t('topbar.importJson')}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          hidden
          onChange={handleFile}
        />

        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => fileInputRef.current?.click()}
        >
          📂 {t('topbar.openFile')}
        </button>

        <button type="button" className="btn btn-ghost" onClick={onExportJSON}>
          📥 {t('topbar.exportJson')}
        </button>

        <button type="button" className="btn btn-teal" onClick={onExportPDF}>
          🖨 {t('topbar.exportPdf')}
        </button>

      </div>

    </header>
  );
}
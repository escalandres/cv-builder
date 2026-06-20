import { useRef } from 'react';

import '../styles/topbar.css';

type Tab = 'editor' | 'preview' | 'json';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onSample: () => void;
  onOpenImport: () => void;
  onExportJSON: () => void;
  onExportPDF: () => void;
  onFileImport: (file: File) => void;
  onClear: () => void;
}

const TABS:{ value:Tab;label:string }[] = [
  { value:'editor',label:'✏️ Editor' },
  { value:'preview',label:'👁 Preview' },
  { value:'json',label:'{ } JSON' },
];

export default function Topbar({
  activeTab,
  onTabChange,
  onSample,
  onOpenImport,
  onExportJSON,
  onExportPDF,
  onFileImport,
  onClear,
}:Props) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (
    e:React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileImport(file);
    }
    e.target.value = '';
  };
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
            className={`
              tab-btn
              ${activeTab === tab.value ? 'active' : ''}
            `}
            onClick={() =>
              onTabChange(tab.value)
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="topbar-spacer" />
      <div className="topbar-actions">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onSample}
        >
          ✨ Sample
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onClear}
        >
          🗑 Clear
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onOpenImport}
        >
          📤 Import JSON
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
          onClick={() =>
            fileInputRef.current?.click()
          }
        >
          📂 Open File
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onExportJSON}
        >
          📥 Export JSON
        </button>
        <button
          type="button"
          className="btn btn-teal"
          onClick={onExportPDF}
        >
          🖨 Export PDF
        </button>
      </div>
    </header>
  );
}

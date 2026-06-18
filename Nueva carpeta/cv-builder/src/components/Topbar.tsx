import { useRef } from 'react';

type Tab = 'editor' | 'preview' | 'json';

interface Props {
  activeTab:    Tab;
  onTabChange:  (tab: Tab) => void;
  onSample:     () => void;
  onOpenImport: () => void;
  onExportJSON: () => void;
  onExportPDF:  () => void;
  onFileImport: (file: File) => void;
  onClear: () => void;
}

const TABS: { value: Tab; label: string }[] = [
  { value: 'editor',  label: '✏️ Editor'  },
  { value: 'preview', label: '👁 Preview' },
  { value: 'json',    label: '{ } JSON'   },
];

export default function Topbar({
  activeTab,
  onTabChange,
  onSample,
  onOpenImport,
  onExportJSON,
  onExportPDF,
  onFileImport,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileImport(file);
    e.target.value = '';
  };

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <img src="/favicon.svg" alt="CV Builder" width={20} height={20} />
        CV<span>Builder</span>
      </div>

      <div className="topbar-tabs">
        {TABS.map(t => (
          <button
            key={t.value}
            className={`tab-btn ${activeTab === t.value ? 'active' : ''}`}
            onClick={() => onTabChange(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="topbar-spacer" />

      <div className="topbar-actions">
        <button className="btn btn-ghost" onClick={onSample}>✨ Sample</button>
        <button className="btn btn-ghost" onClick={onOpenImport}>📤 Import JSON</button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={handleFile}
        />
        <button className="btn btn-ghost" onClick={() => fileInputRef.current?.click()}>📂 Open File</button>
        <button className="btn btn-ghost" onClick={onExportJSON}>📥 Export JSON</button>
        <button className="btn btn-teal"  onClick={onExportPDF}>🖨 Export PDF</button>
      </div>
    </div>
  );
}

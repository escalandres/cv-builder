import { useState } from 'react';

import { useCv } from './hooks/useCv';
import { useToast } from './hooks/useToast';

import Topbar from './components/Topbar';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import JsonPanel from './components/JsonPanel';
import ImportModal from './components/ImportModal';
import Toast from './components/Toast';

import './App.css';

type Tab = 'editor' | 'preview' | 'json';

export default function App() {

  const [activeTab, setActiveTab] = useState<Tab>('editor');

  const [showImportModal, setShowImportModal] = useState(false);

  const { toast, showToast } = useToast();

  const {
    cv,
    setTemplate,
    setPersonal,
    setSummary,
    addSkill,
    setSkill,
    removeSkill,
    addExp,
    setExp,
    removeExp,
    setExpBullets,
    addProj,
    setProj,
    removeProj,
    setProjBullets,
    setEdu,
    addCert,
    setCert,
    removeCert,
    addLang,
    setLang,
    removeLang,
    addSoftSkill,
    setSoftSkill,
    removeSoftSkill,
    exportJSON,
    importJSON,
    importFile,
    loadSample,
    clearAll,
  } = useCv();

  const handleExportJSON = () => {
    exportJSON();
    showToast('download', 'JSON exported successfully');
  };

  const handleImportJSON = (text: string): string | null => {

    const err = importJSON(text);

    if (!err) {
      showToast('upload', 'CV imported successfully');
    }

    return err;

  };

  const handleFileImport = (file: File) => {

    importFile(
      file,
      () => showToast('upload', 'File imported successfully'),
      msg => showToast('error', `Error: ${msg}`)
    );

  };

  const handleSample = () => {

    loadSample();

    showToast(
      'sample',
      'Sample CV loaded'
    );

  };

  const handleClear = () => {

    const confirmed = window.confirm(
      'Are you sure you want to clear all CV data?'
    );

    if (!confirmed) return;

    clearAll();

    setActiveTab('editor');

    setShowImportModal(false);

    showToast(
      'delete',
      'CV cleared successfully'
    );

  };

  const handleExportPDF = () => {

    setActiveTab('preview');

    setTimeout(() => {
      window.print();
    }, 300);

  };

  return (

    <div className="app">

      <Topbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSample={handleSample}
        onOpenImport={() => setShowImportModal(true)}
        onExportJSON={handleExportJSON}
        onExportPDF={handleExportPDF}
        onFileImport={handleFileImport}
        onClear={handleClear}
      />

      <main className="app-main">

        {activeTab === 'editor' && (

          <>

            <EditorPanel
              cv={cv}
              visible
              onTemplate={setTemplate}
              onPersonal={setPersonal}
              onSummary={setSummary}
              onAddSkill={addSkill}
              onSetSkill={setSkill}
              onRemoveSkill={removeSkill}
              onAddExp={addExp}
              onSetExp={setExp}
              onRemoveExp={removeExp}
              onSetExpBullets={setExpBullets}
              onAddProj={addProj}
              onSetProj={setProj}
              onRemoveProj={removeProj}
              onSetProjBullets={setProjBullets}
              onSetEdu={setEdu}
              onAddCert={addCert}
              onSetCert={setCert}
              onRemoveCert={removeCert}
              onAddLang={addLang}
              onSetLang={setLang}
              onRemoveLang={removeLang}
              onAddSoftSkill={addSoftSkill}
              onSetSoftSkill={setSoftSkill}
              onRemoveSoftSkill={removeSoftSkill}
            />

            <PreviewPanel
              cv={cv}
              onExportPDF={handleExportPDF}
              toolbarLabel="Live preview"
            />

          </>

        )}

        {activeTab === 'preview' && (

          <PreviewPanel
            cv={cv}
            onExportPDF={handleExportPDF}
            toolbarLabel="ATS-ready preview · Print or Ctrl+P to save as PDF"
            fullWidth
          />

        )}

        {activeTab === 'json' && (

          <JsonPanel
            cv={cv}
            onExportJSON={handleExportJSON}
            onOpenImport={() => setShowImportModal(true)}
          />

        )}

      </main>

      {showImportModal && (

        <ImportModal
          onImport={handleImportJSON}
          onClose={() => setShowImportModal(false)}
        />

      )}

      {toast && (

        <Toast
          type={toast.type}
          icon={toast.icon}
          msg={toast.msg}
        />

      )}

    </div>

  );

}

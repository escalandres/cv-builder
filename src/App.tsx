import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCv } from './hooks/useCv';
import { useToast } from './hooks/useToast';

import { useResizableWidth } from './hooks/useResizableWidth';
import ResizeHandle from './ui/ResizeHandle';

import Topbar from './components/Topbar';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import JsonPanel from './components/JsonPanel';
import ImportModal from './components/ImportModal';
import Toast from './components/Toast';

import './App.css';

type Tab = 'editor' | 'preview' | 'json';

export default function App() {
  const { t } = useTranslation();
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

  const sidebar = useResizableWidth({
    defaultWidth: 440,
    min: 320,
    max: 720,
  });

  const handleExportJSON = () => {
    exportJSON();
    showToast('download', t('toast.jsonExported'));
  };

  const handleImportJSON = (text: string): string | null => {

    const err = importJSON(text);

    if (!err) {
      showToast('upload', t('toast.cvImported'));
    }

    return err;

  };

  const handleFileImport = (file: File) => {

    importFile(
      file,
      () => showToast('upload', t('toast.fileImported')),
      msg => showToast('error', t('toast.error', { message: msg }))
    );

  };

  const handleSample = () => {

    loadSample();

    showToast(
      'sample',
      t('toast.sampleLoaded')
    );

  };

  const handleClear = () => {

    const confirmed = window.confirm(
      t('dialogs.clearCvConfirm')
    );

    if (!confirmed) return;

    clearAll();

    setActiveTab('editor');

    setShowImportModal(false);

    showToast(
      'delete',
      t('toast.cvCleared')
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
              width={sidebar.width}
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

            <ResizeHandle
              onMouseDown={sidebar.onMouseDown}
              onDoubleClick={sidebar.resetWidth}
            />

            <PreviewPanel
              cv={cv}
              onExportPDF={handleExportPDF}
              toolbarLabel={t('preview.label')}
            />
          </>
        )}

        {activeTab === 'preview' && (
          <PreviewPanel
            cv={cv}
            onExportPDF={handleExportPDF}
            toolbarLabel={t('preview.atsPreview')}
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

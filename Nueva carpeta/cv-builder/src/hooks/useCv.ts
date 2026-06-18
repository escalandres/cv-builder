import { useState } from 'react';
import { type CV, EMPTY_CV, SAMPLE_CV } from '../data/cv.model';

let nextId = 100;
const uid = () => ++nextId;

export function useCv() {
  const [cv, setCV] = useState<CV>(EMPTY_CV);

  // ── Personal ────────────────────────────────────────────────
  const setPersonal = (field: string, val: string) =>
    setCV(c => ({ ...c, personal: { ...c.personal, [field]: val } }));

  // ── Summary ─────────────────────────────────────────────────
  const setSummary = (val: string) =>
    setCV(c => ({ ...c, summary: val }));

  // ── Template ────────────────────────────────────────────────
  const setTemplate = (val: string) =>
    setCV(c => ({ ...c, template: val }));

  // ── Skills ──────────────────────────────────────────────────
  const addSkill = () =>
    setCV(c => ({ ...c, skills: [...c.skills, ''] }));

  const setSkill = (i: number, val: string) =>
    setCV(c => { const s = [...c.skills]; s[i] = val; return { ...c, skills: s }; });

  const removeSkill = (i: number) =>
    setCV(c => ({ ...c, skills: c.skills.filter((_, j) => j !== i) }));

  // ── Experience ──────────────────────────────────────────────
  const addExp = () =>
    setCV(c => ({
      ...c,
      experience: [
        ...c.experience,
        { id: uid(), title: '', company: '', location: '', startDate: '', endDate: '', bullets: [''] },
      ],
    }));

  const removeExp = (id: number) =>
    setCV(c => ({ ...c, experience: c.experience.filter(e => e.id !== id) }));

  const setExp = (id: number, field: string, val: string) =>
    setCV(c => ({
      ...c,
      experience: c.experience.map(e => e.id === id ? { ...e, [field]: val } : e),
    }));

  const setExpBullets = (id: number, bullets: string[]) =>
    setCV(c => ({
      ...c,
      experience: c.experience.map(e => e.id === id ? { ...e, bullets } : e),
    }));

  // ── Projects ─────────────────────────────────────────────────
  const addProj = () =>
    setCV(c => ({
      ...c,
      projects: [
        ...c.projects,
        { id: uid(), title: '', tech: '', startDate: '', endDate: '', bullets: [''] },
      ],
    }));

  const removeProj = (id: number) =>
    setCV(c => ({ ...c, projects: c.projects.filter(p => p.id !== id) }));

  const setProj = (id: number, field: string, val: string) =>
    setCV(c => ({
      ...c,
      projects: c.projects.map(p => p.id === id ? { ...p, [field]: val } : p),
    }));

  const setProjBullets = (id: number, bullets: string[]) =>
    setCV(c => ({
      ...c,
      projects: c.projects.map(p => p.id === id ? { ...p, bullets } : p),
    }));

  // ── Education ────────────────────────────────────────────────
  const setEdu = (field: string, val: string) =>
    setCV(c => ({ ...c, education: { ...c.education, [field]: val } }));

  // ── Certifications ───────────────────────────────────────────
  const addCert = () =>
    setCV(c => ({
      ...c,
      certifications: [...c.certifications, { id: uid(), name: '', date: '' }],
    }));

  const removeCert = (id: number) =>
    setCV(c => ({ ...c, certifications: c.certifications.filter(x => x.id !== id) }));

  const setCert = (id: number, field: string, val: string) =>
    setCV(c => ({
      ...c,
      certifications: c.certifications.map(x => x.id === id ? { ...x, [field]: val } : x),
    }));

  // ── Languages ─────────────────────────────────────────────────
  const addLang = () =>
    setCV(c => ({
      ...c,
      languages: [...c.languages, { id: uid(), name: '', level: '' }],
    }));

  const removeLang = (id: number) =>
    setCV(c => ({ ...c, languages: c.languages.filter(x => x.id !== id) }));

  const setLang = (id: number, field: string, val: string) =>
    setCV(c => ({
      ...c,
      languages: c.languages.map(x => x.id === id ? { ...x, [field]: val } : x),
    }));

  // ── Soft skills ───────────────────────────────────────────────
  const addSoftSkill = () =>
    setCV(c => ({ ...c, softSkills: [...c.softSkills, ''] }));

  const setSoftSkill = (i: number, val: string) =>
    setCV(c => { const s = [...c.softSkills]; s[i] = val; return { ...c, softSkills: s }; });

  const removeSoftSkill = (i: number) =>
    setCV(c => ({ ...c, softSkills: c.softSkills.filter((_, j) => j !== i) }));

  // ── Import / Export ───────────────────────────────────────────
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(cv, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `${cv.personal.name.replace(/\s+/g, '_') || 'cv'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (text: string): string | null => {
    try {
      const parsed = JSON.parse(text);
      if (!parsed.personal) return 'Invalid CV JSON: missing "personal" field.';
      setCV({ ...EMPTY_CV, ...parsed });
      return null;
    } catch (e) {
      return (e as Error).message;
    }
  };

  const importFile = (file: File, onSuccess: () => void, onError: (msg: string) => void) => {
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target?.result as string);
        if (!parsed.personal) throw new Error('Invalid CV JSON file.');
        setCV({ ...EMPTY_CV, ...parsed });
        onSuccess();
      } catch (err) {
        onError((err as Error).message);
      }
    };
    reader.readAsText(file);
  };

  const loadSample = () => setCV(SAMPLE_CV);
  const clearAll   = () => setCV(EMPTY_CV);

  return {
    cv,
    setTemplate,
    setPersonal,
    setSummary,
    addSkill,    setSkill,    removeSkill,
    addExp,      setExp,      removeExp,      setExpBullets,
    addProj,     setProj,     removeProj,     setProjBullets,
    setEdu,
    addCert,     setCert,     removeCert,
    addLang,     setLang,     removeLang,
    addSoftSkill, setSoftSkill, removeSoftSkill,
    exportJSON,
    importJSON,
    importFile,
    loadSample,
    clearAll,
  };
}

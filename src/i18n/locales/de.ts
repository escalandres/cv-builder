// import type { Translations } from '../types';

const de = {
  topbar: {
    sample:     'Beispiel',
    clear:      'Leeren',
    importJson: 'JSON importieren',
    openFile:   'Datei öffnen',
    exportJson: 'JSON exportieren',
    exportPdf:  'PDF exportieren',
    tabs: {
      editor:  '✏️ Editor',
      preview: '👁 Vorschau',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:     'Lebenslauf-Format',
      personal:   'Persönliche Daten',
      summary:    'Berufliches Profil',
      skills:     'Technische Fähigkeiten',
      experience: 'Berufserfahrung',
      projects:   'Projekte',
      education:  'Ausbildung',
      certs:      'Zertifizierungen',
      languages:  'Sprachen',
      softSkills: 'Soft Skills',
    },
    fields: {
      template:        'Vorlage',
      fullName:        'Vollständiger Name',
      role:            'Berufsbezeichnung / Rolle',
      email:           'E-Mail',
      phone:           'Telefon',
      location:        'Standort',
      linkedin:        'LinkedIn (ohne https://)',
      github:          'GitHub (ohne https://)',
      portfolio:       'Portfolio (ohne https://)',
      summary:         'Profil',
      technicalSkills: 'Technische Fähigkeiten',
      jobTitle:        'Berufsbezeichnung',
      company:         'Unternehmen',
      startDate:       'Startdatum',
      endDate:         'Enddatum',
      achievements:    'Erfolge / Aufgaben',
      projectTitle:    'Projektname',
      techStack:       'Technologie-Stack',
      description:     'Beschreibung',
      degree:          'Abschluss / Studiengang',
      school:          'Schule / Universität',
      certName:        'Name der Zertifizierung',
      date:            'Datum',
      softSkills:      'Soft Skills',
    },
    placeholders: {
      fullName:     'Anna Müller',
      role:         'Full-Stack-Entwicklerin',
      email:        'email@beispiel.de',
      phone:        '+49 151 12345678',
      location:     'Stadt, Land',
      linkedin:     'linkedin.com/in/ihrprofil',
      github:       'github.com/ihrname',
      portfolio:    'ihrportfolio.de',
      summary:      'Schreiben Sie eine prägnante Zusammenfassung von 2 bis 4 Sätzen, die Ihre Erfahrung, Kernkompetenzen und Ihre Stärken hervorhebt...',
      skillGroup:   'z.B. React.js, Node.js, TypeScript',
      jobTitle:     'Softwareentwickler',
      company:      'Musterfirma GmbH',
      projectTitle: 'Mein Projekt',
      techStack:    'React · Node.js · PostgreSQL',
      degree:       'Bachelor of Science Informatik',
      school:       'TU München',
      schoolLoc:    'München, Deutschland',
      certName:     'AWS Solutions Architect',
      softSkill:    'z.B. Führungskompetenz',
      newPosition:  'Neue Stelle',
      newProject:   'Neues Projekt',
      newCert:      'Neue Zertifizierung',
      present:      'Heute',
    },
    actions: {
      addSkill:     '＋ Fähigkeitsgruppe hinzufügen',
      addPosition:  '＋ Stelle hinzufügen',
      addProject:   '＋ Projekt hinzufügen',
      addCert:      '＋ Zertifizierung hinzufügen',
      addLanguage:  '＋ Sprache hinzufügen',
      addSoftSkill: '＋ Soft Skill hinzufügen',
      selectLang:   'Sprache auswählen',
      selectLevel:  'Niveau auswählen',
      present:      'Heute',
    },
  },

  json: {
    title:    '{ } Live-JSON',
    subtitle: 'Im Editor-Panel bearbeiten, mit den Schaltflächen exportieren/importieren',
    export:   'Exportieren',
    import:   'Importieren',
  },

  toast: {
    jsonExported: 'JSON erfolgreich exportiert',
    cvImported: 'Lebenslauf erfolgreich importiert',
    fileImported: 'Datei erfolgreich importiert',
    sampleLoaded: 'Beispiellebenslauf geladen',
    cvCleared: 'Lebenslauf erfolgreich gelöscht',
    error: 'Fehler: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      'Sind Sie sicher, dass Sie alle Lebenslaufdaten löschen möchten?',
  },

  preview: {
    label:     'Vorschau',
    exportPdf: 'PDF exportieren',
    atsPreview: 'ATS-fähige Vorschau · Drucken oder Strg+P zum Speichern als PDF',
  },

  modal: {
    import: {
      title:       '📤 Lebenslauf aus JSON importieren',
      description: 'Fügen Sie ein zuvor exportiertes JSON ein. Dadurch werden Ihre aktuellen Daten ersetzt.',
      cancel:      'Abbrechen',
      import:      'Importieren',
      errorEmpty:  'Das JSON darf nicht leer sein.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Berufliches Profil',
      skills:         'Technische Fähigkeiten',
      experience:     'Berufserfahrung',
      education:      'Ausbildung',
      certifications: 'Zertifizierungen',
      projects:       'Projekte',
      languages:      'Sprachen',
      softSkills:     'Soft Skills',
    },
  },

  // de.ts

    ui: {
    bullets: {
        placeholder: 'Stichpunkt eingeben',
        add: '＋ Stichpunkt hinzufügen',
    },

    monthInput: {
        placeholder: 'MMM JJJJ',
        present: 'Aktuell',
        months: {
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mär',
        Apr: 'Apr',
        May: 'Mai',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Okt',
        Nov: 'Nov',
        Dec: 'Dez',
        }
    },
    },
} as const;

export default de;
// import type { Translations } from '../types';

const nl = {
  topbar: {
    sample:     'Voorbeeld',
    clear:      'Wissen',
    importJson: 'JSON importeren',
    openFile:   'Bestand openen',
    exportJson: 'JSON exporteren',
    exportPdf:  'PDF exporteren',
    tabs: {
      editor:  '✏️ Editor',
      preview: '👁 Voorbeeld',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:     'CV-indeling',
      personal:   'Persoonlijke gegevens',
      summary:    'Professionele samenvatting',
      skills:     'Technische vaardigheden',
      experience: 'Werkervaring',
      projects:   'Projecten',
      education:  'Opleiding',
      certs:      'Certificeringen',
      languages:  'Talen',
      softSkills: 'Soft skills',
    },
    fields: {
      template:        'Sjabloon',
      fullName:        'Volledige naam',
      role:            'Functietitel / Rol',
      email:           'E-mail',
      phone:           'Telefoon',
      location:        'Locatie',
      linkedin:        'LinkedIn (zonder https://)',
      github:          'GitHub (zonder https://)',
      portfolio:       'Portfolio (zonder https://)',
      summary:         'Samenvatting',
      technicalSkills: 'Technische vaardigheden',
      jobTitle:        'Functietitel',
      company:         'Bedrijf',
      startDate:       'Startdatum',
      endDate:         'Einddatum',
      achievements:    'Prestaties / Verantwoordelijkheden',
      projectTitle:    'Projectnaam',
      techStack:       'Technologiestack',
      description:     'Beschrijving',
      degree:          'Diploma / Opleiding',
      school:          'School / Universiteit',
      certName:        'Naam van de certificering',
      date:            'Datum',
      softSkills:      'Soft skills',
    },
    placeholders: {
      fullName:     'Anna de Vries',
      role:         'Full Stack Ontwikkelaar',
      email:        'email@voorbeeld.nl',
      phone:        '+31 6 12345678',
      location:     'Stad, Land',
      linkedin:     'linkedin.com/in/uwprofiel',
      github:       'github.com/uwgebruikersnaam',
      portfolio:    'uwportfolio.nl',
      summary:      'Schrijf een beknopte samenvatting van 2 tot 4 zinnen waarin u uw ervaring, kernvaardigheden en wat u onderscheidt belicht...',
      skillGroup:   'bijv. React.js, Node.js, TypeScript',
      jobTitle:     'Software Engineer',
      company:      'Voorbeeldbedrijf B.V.',
      projectTitle: 'Mijn Project',
      techStack:    'React · Node.js · PostgreSQL',
      degree:       'Bachelor Informatica',
      school:       'TU Delft',
      schoolLoc:    'Delft, Nederland',
      certName:     'AWS Solutions Architect',
      softSkill:    'bijv. Leiderschap',
      newPosition:  'Nieuwe functie',
      newProject:   'Nieuw project',
      newCert:      'Nieuwe certificering',
      present:      'Heden',
    },
    actions: {
      addSkill:     '＋ Vaardigheidsgroep toevoegen',
      addPosition:  '＋ Functie toevoegen',
      addProject:   '＋ Project toevoegen',
      addCert:      '＋ Certificering toevoegen',
      addLanguage:  '＋ Taal toevoegen',
      addSoftSkill: '＋ Soft skill toevoegen',
      selectLang:   'Taal selecteren',
      selectLevel:  'Niveau selecteren',
      present:      'Heden',
    },
  },

  json: {
    title:    '{ } Live JSON',
    subtitle: 'Bewerk in het Editor-paneel, exporteer/importeer met de werkbalkknopen',
    export:   'Exporteren',
    import:   'Importeren',
  },

  toast: {
    jsonExported: 'JSON geëxporteerd succesvol',
    cvImported: 'CV geïmporteerd succesvol',
    fileImported: 'Bestand geïmporteerd succesvol',
    sampleLoaded: 'Voorbeeld CV geladen',
    cvCleared: 'CV gewist succesvol',
    error: 'Fout: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      'Bent u zeker dat u alle Lebenslaufdaten wilt wissen?'
  },

  preview: {
    label:     'Live voorbeeld',
    exportPdf: 'PDF exporteren',
    atsPreview: 'ATS-compatibele preview · Afdrukken of Ctrl+P om op te slaan als PDF',
  },

  modal: {
    import: {
      title:       '📤 CV importeren vanuit JSON',
      description: 'Plak een eerder geëxporteerde JSON. Dit vervangt uw huidige gegevens.',
      cancel:      'Annuleren',
      import:      'Importeren',
      errorEmpty:  'De JSON mag niet leeg zijn.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Professionele samenvatting',
      skills:         'Technische vaardigheden',
      experience:     'Werkervaring',
      education:      'Opleiding',
      certifications: 'Certificeringen',
      projects:       'Projecten',
      languages:      'Talen',
      softSkills:     'Soft skills',
    },
  },

    ui: {
    bullets: {
        placeholder: 'Voer een bulletpunt in',
        add: '＋ Bulletpunt toevoegen',
    },

    monthInput: {
        placeholder: 'MMM JJJJ',
        present: 'Heden',
        months: {
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mrt',
        Apr: 'Apr',
        May: 'Mei',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Okt',
        Nov: 'Nov',
        Dec: 'Dec',
        }
    },
    },
} as const;

export default nl;
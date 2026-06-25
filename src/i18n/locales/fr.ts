// import type { Translations } from '../types';

// const fr: Translations = {
const fr = {
  topbar: {
    sample:     'Exemple',
    clear:      'Effacer',
    importJson: 'Importer JSON',
    openFile:   'Ouvrir fichier',
    exportJson: 'Exporter JSON',
    exportPdf:  'Exporter PDF',
    tabs: {
      editor:  '✏️ Éditeur',
      preview: '👁 Aperçu',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:     'Format du CV',
      personal:   'Informations personnelles',
      summary:    'Résumé professionnel',
      skills:     'Compétences techniques',
      experience: 'Expérience professionnelle',
      projects:   'Projets',
      education:  'Formation',
      certs:      'Certifications',
      languages:  'Langues',
      softSkills: 'Compétences relationnelles',
    },
    fields: {
      template:        'Modèle',
      fullName:        'Nom complet',
      role:            'Intitulé du poste / Rôle',
      email:           'E-mail',
      phone:           'Téléphone',
      location:        'Localisation',
      linkedin:        'LinkedIn (sans https://)',
      github:          'GitHub (sans https://)',
      portfolio:       'Portfolio (sans https://)',
      summary:         'Résumé',
      technicalSkills: 'Compétences techniques',
      jobTitle:        'Intitulé du poste',
      company:         'Entreprise',
      startDate:       'Date de début',
      endDate:         'Date de fin',
      achievements:    'Réalisations / Responsabilités',
      projectTitle:    'Nom du projet',
      techStack:       'Stack technologique',
      description:     'Description',
      degree:          'Diplôme / Formation',
      school:          'École / Université',
      certName:        'Nom de la certification',
      date:            'Date',
      softSkills:      'Compétences relationnelles',
    },
    placeholders: {
      fullName:     'Marie Dupont',
      role:         'Développeuse Full Stack',
      email:        'email@exemple.fr',
      phone:        '+33 6 12 34 56 78',
      location:     'Ville, Pays',
      linkedin:     'linkedin.com/in/votreprofil',
      github:       'github.com/votrenom',
      portfolio:    'votreportfolio.fr',
      summary:      'Rédigez un résumé concis de 2 à 4 phrases mettant en avant votre expérience, vos compétences clés et ce qui vous distingue...',
      skillGroup:   'ex. React.js, Node.js, TypeScript',
      jobTitle:     'Ingénieur Logiciel',
      company:      'Entreprise S.A.S.',
      projectTitle: 'Mon Projet',
      techStack:    'React · Node.js · PostgreSQL',
      degree:       'Licence en Informatique',
      school:       'École Polytechnique',
      schoolLoc:    'Paris, France',
      certName:     'AWS Solutions Architect',
      softSkill:    'ex. Leadership',
      newPosition:  'Nouveau poste',
      newProject:   'Nouveau projet',
      newCert:      'Nouvelle certification',
      present:      'Présent',
    },
    actions: {
      addSkill:     '＋ Ajouter un groupe de compétences',
      addPosition:  '＋ Ajouter un poste',
      addProject:   '＋ Ajouter un projet',
      addCert:      '＋ Ajouter une certification',
      addLanguage:  '＋ Ajouter une langue',
      addSoftSkill: '＋ Ajouter une compétence relationnelle',
      selectLang:   'Sélectionner une langue',
      selectLevel:  'Sélectionner un niveau',
      present:      'Présent',
    },
  },

  json: {
    title:    '{ } JSON en direct',
    subtitle: 'Modifiez dans le panneau Éditeur, exportez/importez avec les boutons de la barre',
    export:   'Exporter',
    import:   'Importer',
  },

  
  toast: {
    jsonExported: 'JSON exporté avec succès',
    cvImported: 'CV importé avec succès',
    fileImported: 'Fichier importé avec succès',
    sampleLoaded: 'CV d\'exemple chargé',
    cvCleared: 'CV effacé avec succès',
    error: 'Erreur: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      'Êtes-vous sûr de vouloir effacer toutes les données du CV?',
  },

  preview: {
    label:     'Aperçu en direct',
    exportPdf: 'Exporter PDF',
    atsPreview: 'Aperçu compatible avec les systèmes de suivi des candidatures (ATS) · Imprimer ou Ctrl+P pour enregistrer au format PDF',
  },

  modal: {
    import: {
      title:       '📤 Importer le CV depuis JSON',
      description: 'Collez un JSON précédemment exporté. Cela remplacera vos données actuelles.',
      cancel:      'Annuler',
      import:      'Importer',
      errorEmpty:  'Le JSON ne peut pas être vide.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Résumé professionnel',
      skills:         'Compétences techniques',
      experience:     'Expérience professionnelle',
      education:      'Formation',
      certifications: 'Certifications',
      projects:       'Projets',
      languages:      'Langues',
      softSkills:     'Compétences relationnelles',
    },
  },

  // fr.ts

    ui: {
    bullets: {
        placeholder: 'Saisissez un point',
        add: '＋ Ajouter un point',
    },

    monthInput: {
        placeholder: 'MMM AAAA',
        present: 'Actuel',
        months: {
        Jan: 'Jan',
        Feb: 'Fév',
        Mar: 'Mars',
        Apr: 'Avr',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juil',
        Aug: 'Août',
        Sep: 'Sept',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Déc',
        }
    },
    },
} as const;

export default fr;
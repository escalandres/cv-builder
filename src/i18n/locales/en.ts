// import type { Translations } from '../types';

const en = {
  topbar: {
    sample:     'Sample',
    clear:      'Clear',
    importJson: 'Import JSON',
    openFile:   'Open File',
    exportJson: 'Export JSON',
    exportPdf:  'Export PDF',
    tabs: {
      editor:  '✏️ Editor',
      preview: '👁 Preview',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:      'CV Format',
      personal:    'Personal Info',
      summary:     'Professional Summary',
      skills:      'Technical Skills',
      experience:  'Work Experience',
      projects:    'Projects',
      education:   'Education',
      certs:       'Certifications',
      languages:   'Languages',
      softSkills:  'Soft Skills',
    },
    fields: {
      template:       'Template',
      fullName:       'Full Name',
      role:           'Job Title / Role',
      email:          'Email',
      phone:          'Phone',
      location:       'Location',
      linkedin:       'LinkedIn (without https://)',
      github:         'GitHub (without https://)',
      portfolio:      'Portfolio (without https://)',
      summary:        'Summary',
      technicalSkills:'Technical Skills',
      jobTitle:       'Job Title',
      company:        'Company',
      startDate:      'Start Date',
      endDate:        'End Date',
      achievements:   'Achievements / Responsibilities',
      projectTitle:   'Project Title',
      techStack:      'Tech Stack',
      description:    'Description',
      degree:         'Degree / Program',
      school:         'School / University',
      certName:       'Certification Name',
      date:           'Date',
      softSkills:     'Soft Skills',
    },
    placeholders: {
      fullName:    'Jane Smith',
      role:        'Full Stack Developer',
      email:       'email@example.com',
      phone:       '+1 234 567 8900',
      location:    'City, Country',
      linkedin:    'linkedin.com/in/yourprofile',
      github:      'github.com/yourusername',
      portfolio:   'yourportfolio.com',
      summary:     'Write a concise 2–4 sentence summary highlighting your experience, key skills, and what makes you stand out...',
      skillGroup:  'e.g. React.js, Node.js, TypeScript',
      jobTitle:    'Software Engineer',
      company:     'Acme Corp',
      projectTitle:'My Awesome Project',
      techStack:   'React · Node.js · PostgreSQL',
      degree:      'Bachelor of Computer Science',
      school:      'MIT',
      schoolLoc:   'Cambridge, MA, USA',
      certName:    'AWS Solutions Architect',
      softSkill:   'e.g. Leadership',
      newPosition: 'New Position',
      newProject:  'New Project',
      newCert:     'New Certification',
      present:     'Present',
    },
    actions: {
      addSkill:     '＋ Add skill group',
      addPosition:  '＋ Add position',
      addProject:   '＋ Add project',
      addCert:      '＋ Add certification',
      addLanguage:  '＋ Add language',
      addSoftSkill: '＋ Add soft skill',
      selectLang:   'Select language',
      selectLevel:  'Select level',
      present:      'Present',
    },
  },

  json: {
    title:    '{ } Live JSON',
    subtitle: 'Edit in the Editor panel, export/import with the toolbar buttons',
    export:   'Export',
    import:   'Import',
  },

  toast: {
    jsonExported: 'JSON exported successfully',
    cvImported: 'CV imported successfully',
    fileImported: 'File imported successfully',
    sampleLoaded: 'Sample CV loaded',
    cvCleared: 'CV cleared successfully',
    error: 'Error: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      'Are you sure you want to clear all CV data?',
  },

  preview: {
    label:     'Live preview',
    exportPdf: 'Export PDF',
    atsPreview: 'ATS-ready preview · Print or Ctrl+P to save as PDF',
  },

  modal: {
    import: {
      title:       '📤 Import CV from JSON',
      description: 'Paste a previously exported JSON below. This will replace your current data.',
      cancel:      'Cancel',
      import:      'Import',
      errorEmpty:  'JSON cannot be empty.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Professional Summary',
      skills:         'Technical Skills',
      experience:     'Work Experience',
      education:      'Education',
      certifications: 'Certifications',
      projects:       'Projects',
      languages:      'Languages',
      softSkills:     'Soft Skills',
    },
  },

  ui: {
    bullets: {
      placeholder: 'Enter bullet point',
      add: '＋ Add bullet',
    },

    monthInput: {
      placeholder: 'MMM YYYY',
      present: 'Present',
      months: {
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Apr',
        May: 'May',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dec',
      }
    },
  },
} as const;

export default en;
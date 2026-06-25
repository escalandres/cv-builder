// import type { Translations } from '../types';

// const es: Translations = {
const es = {
  topbar: {
    sample:     'Ejemplo',
    clear:      'Limpiar',
    importJson: 'Importar JSON',
    openFile:   'Abrir archivo',
    exportJson: 'Exportar JSON',
    exportPdf:  'Exportar PDF',
    tabs: {
      editor:  '✏️ Editor',
      preview: '👁 Vista previa',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:     'Formato del CV',
      personal:   'Información personal',
      summary:    'Resumen profesional',
      skills:     'Habilidades técnicas',
      experience: 'Experiencia laboral',
      projects:   'Proyectos',
      education:  'Educación',
      certs:      'Certificaciones',
      languages:  'Idiomas',
      softSkills: 'Habilidades blandas',
    },
    fields: {
      template:        'Plantilla',
      fullName:        'Nombre completo',
      role:            'Puesto / Rol',
      email:           'Correo electrónico',
      phone:           'Teléfono',
      location:        'Ubicación',
      linkedin:        'LinkedIn (sin https://)',
      github:          'GitHub (sin https://)',
      portfolio:       'Portafolio (sin https://)',
      summary:         'Resumen',
      technicalSkills: 'Habilidades técnicas',
      jobTitle:        'Puesto de trabajo',
      company:         'Empresa',
      startDate:       'Fecha de inicio',
      endDate:         'Fecha de fin',
      achievements:    'Logros / Responsabilidades',
      projectTitle:    'Nombre del proyecto',
      techStack:       'Stack tecnológico',
      description:     'Descripción',
      degree:          'Título / Programa',
      school:          'Escuela / Universidad',
      certName:        'Nombre de la certificación',
      date:            'Fecha',
      softSkills:      'Habilidades blandas',
    },
    placeholders: {
      fullName:     'Ana García',
      role:         'Desarrolladora Full Stack',
      email:        'correo@ejemplo.com',
      phone:        '+52 55 1234 5678',
      location:     'Ciudad, País',
      linkedin:     'linkedin.com/in/tuperfil',
      github:       'github.com/tuusuario',
      portfolio:    'tuportafolio.com',
      summary:      'Escribe un resumen conciso de 2 a 4 oraciones destacando tu experiencia, habilidades clave y lo que te hace sobresalir...',
      skillGroup:   'ej. React.js, Node.js, TypeScript',
      jobTitle:     'Ingeniero de Software',
      company:      'Empresa S.A.',
      projectTitle: 'Mi Proyecto',
      techStack:    'React · Node.js · PostgreSQL',
      degree:       'Ingeniería en Sistemas Computacionales',
      school:       'UNAM',
      schoolLoc:    'Ciudad de México, México',
      certName:     'AWS Solutions Architect',
      softSkill:    'ej. Liderazgo',
      newPosition:  'Nueva posición',
      newProject:   'Nuevo proyecto',
      newCert:      'Nueva certificación',
      present:      'Presente',
    },
    actions: {
      addSkill:     '＋ Agregar grupo de habilidades',
      addPosition:  '＋ Agregar posición',
      addProject:   '＋ Agregar proyecto',
      addCert:      '＋ Agregar certificación',
      addLanguage:  '＋ Agregar idioma',
      addSoftSkill: '＋ Agregar habilidad blanda',
      selectLang:   'Seleccionar idioma',
      selectLevel:  'Seleccionar nivel',
      present:      'Presente',
    },
  },

  json: {
    title:    '{ } JSON en vivo',
    subtitle: 'Edita en el panel Editor, exporta/importa con los botones de la barra',
    export:   'Exportar',
    import:   'Importar',
  },

  toast: {
    jsonExported: 'JSON exportado exitosamente',
    cvImported: 'CV importado exitosamente',
    fileImported: 'Archivo importado exitosamente',
    sampleLoaded: 'CV de muestra cargado',
    cvCleared: 'CV borrado exitosamente',
    error: 'Error: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      '¿Estás seguro de que quieres borrar todos los datos del CV?',
  },

  preview: {
    label:     'Vista previa',
    exportPdf: 'Exportar PDF',
    atsPreview: 'Vista previa ATS · Imprimir o Ctrl+P para guardar como PDF',
  },

  modal: {
    import: {
      title:       '📤 Importar CV desde JSON',
      description: 'Pega un JSON exportado previamente. Esto reemplazará tus datos actuales.',
      cancel:      'Cancelar',
      import:      'Importar',
      errorEmpty:  'El JSON no puede estar vacío.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Resumen profesional',
      skills:         'Habilidades técnicas',
      experience:     'Experiencia laboral',
      education:      'Educación',
      certifications: 'Certificaciones',
      projects:       'Proyectos',
      languages:      'Idiomas',
      softSkills:     'Habilidades blandas',
    },
  },

  // es.ts

    ui: {
    bullets: {
        placeholder: 'Ingrese un punto',
        add: '＋ Agregar punto',
    },

    monthInput: {
        placeholder: 'MMM AAAA',
        present: 'Actual',
        months: {
        Jan: 'Ene',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Abr',
        May: 'May',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Ago',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dic',
        }
    },
    },
} as const;

export default es;
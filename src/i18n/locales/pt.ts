// import type { Translations } from '../types';

const pt = {
  topbar: {
    sample:     'Exemplo',
    clear:      'Limpar',
    importJson: 'Importar JSON',
    openFile:   'Abrir arquivo',
    exportJson: 'Exportar JSON',
    exportPdf:  'Exportar PDF',
    tabs: {
      editor:  '✏️ Editor',
      preview: '👁 Pré-visualização',
      json:    '{ } JSON',
    },
  },

  editor: {
    sections: {
      format:     'Formato do CV',
      personal:   'Informações pessoais',
      summary:    'Resumo profissional',
      skills:     'Habilidades técnicas',
      experience: 'Experiência profissional',
      projects:   'Projetos',
      education:  'Educação',
      certs:      'Certificações',
      languages:  'Idiomas',
      softSkills: 'Habilidades interpessoais',
    },
    fields: {
      template:        'Modelo',
      fullName:        'Nome completo',
      role:            'Cargo / Função',
      email:           'E-mail',
      phone:           'Telefone',
      location:        'Localização',
      linkedin:        'LinkedIn (sem https://)',
      github:          'GitHub (sem https://)',
      portfolio:       'Portfólio (sem https://)',
      summary:         'Resumo',
      technicalSkills: 'Habilidades técnicas',
      jobTitle:        'Cargo',
      company:         'Empresa',
      startDate:       'Data de início',
      endDate:         'Data de término',
      achievements:    'Conquistas / Responsabilidades',
      projectTitle:    'Nome do projeto',
      techStack:       'Stack tecnológico',
      description:     'Descrição',
      degree:          'Título / Curso',
      school:          'Escola / Universidade',
      certName:        'Nome da certificação',
      date:            'Data',
      softSkills:      'Habilidades interpessoais',
    },
    placeholders: {
      fullName:     'Ana Silva',
      role:         'Desenvolvedora Full Stack',
      email:        'email@exemplo.com',
      phone:        '+55 11 91234-5678',
      location:     'Cidade, País',
      linkedin:     'linkedin.com/in/seuperfil',
      github:       'github.com/seuusuario',
      portfolio:    'seuportfolio.com',
      summary:      'Escreva um resumo conciso de 2 a 4 frases destacando sua experiência, principais habilidades e o que o torna único...',
      skillGroup:   'ex. React.js, Node.js, TypeScript',
      jobTitle:     'Engenheiro de Software',
      company:      'Empresa Ltda.',
      projectTitle: 'Meu Projeto',
      techStack:    'React · Node.js · PostgreSQL',
      degree:       'Bacharelado em Ciência da Computação',
      school:       'USP',
      schoolLoc:    'São Paulo, Brasil',
      certName:     'AWS Solutions Architect',
      softSkill:    'ex. Liderança',
      newPosition:  'Nova posição',
      newProject:   'Novo projeto',
      newCert:      'Nova certificação',
      present:      'Atual',
    },
    actions: {
      addSkill:     '＋ Adicionar grupo de habilidades',
      addPosition:  '＋ Adicionar posição',
      addProject:   '＋ Adicionar projeto',
      addCert:      '＋ Adicionar certificação',
      addLanguage:  '＋ Adicionar idioma',
      addSoftSkill: '＋ Adicionar habilidade interpessoal',
      selectLang:   'Selecionar idioma',
      selectLevel:  'Selecionar nível',
      present:      'Atual',
    },
  },

  json: {
    title:    '{ } JSON ao vivo',
    subtitle: 'Edite no painel Editor, exporte/importe com os botões da barra',
    export:   'Exportar',
    import:   'Importar',
  },

  
  toast: {
    jsonExported: 'JSON exportado com sucesso',
    cvImported: 'CV importado com sucesso',
    fileImported: 'Arquivo importado com sucesso',
    sampleLoaded: 'CV de exemplo carregado',
    cvCleared: 'CV limpo com sucesso',
    error: 'Erro: {{message}}',
  },

  dialogs: {
    clearCvConfirm:
      'Tem certeza de que deseja limpar todos os dados do CV?'
  },

  preview: {
    label:     'Pré-visualização',
    exportPdf: 'Exportar PDF',
    atsPreview: 'Pré-visualização compatível com ATS · Imprimir ou Ctrl+P para salvar como PDF',
  },

  modal: {
    import: {
      title:       '📤 Importar CV de JSON',
      description: 'Cole um JSON exportado anteriormente. Isso substituirá seus dados atuais.',
      cancel:      'Cancelar',
      import:      'Importar',
      errorEmpty:  'O JSON não pode estar vazio.',
      placeholder: `{
  "personal": {
    "name": "..."
  }
}`
    },
  },

  cv: {
    sections: {
      summary:        'Resumo profissional',
      skills:         'Habilidades técnicas',
      experience:     'Experiência profissional',
      education:      'Educação',
      certifications: 'Certificações',
      projects:       'Projetos',
      languages:      'Idiomas',
      softSkills:     'Habilidades interpessoais',
    },
  },

    ui: {
        bullets: {
            placeholder: 'Digite um item',
            add: '＋ Adicionar item',
        },

        monthInput: {
            placeholder: 'MMM AAAA',
            present: 'Atual',
            months: {
            Jan: 'Jan',
            Feb: 'Fev',
            Mar: 'Mar',
            Apr: 'Abr',
            May: 'Mai',
            Jun: 'Jun',
            Jul: 'Jul',
            Aug: 'Ago',
            Sep: 'Set',
            Oct: 'Out',
            Nov: 'Nov',
            Dec: 'Dez',
            }
        },
    },
} as const;

export default pt;
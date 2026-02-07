export type Experience = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export type Education = {
  diploma: string
  school: string
  location: string
  period: string
  details?: string[]
}

export type Highlight = {
  title: string
  description: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  year: string
  accent: string
}

export type LocaleContent = {
  title: string
  about: string
  sections: {
    experience: { title: string; subtitle: string }
    highlights: { title: string; subtitle: string }
    skills: { title: string; subtitle: string }
    languages: { title: string; subtitle: string }
    passions: { title: string; subtitle: string }
    education: { title: string; subtitle: string }
    projects: { title: string; subtitle: string }
    contact: { title: string; subtitle: string }
  }
  cta: {
    download: string
    contact: string
    availability: string
  }
  metricsTitle: string
  contactLabels: {
    name: string
    email: string
    message: string
    send: string
    success: string
  }
}

export type Profile = {
  name: string
  role: string
  location: string
  phone: string
  email: string
  website: string
  experiences: Experience[]
  highlights: Highlight[]
  skills: string[]
  education: Education[]
  languages: string[]
  passions: string[]
  metrics: { label: string; value: string }[]
  projects: Project[]
  locales: Record<'fr' | 'en', LocaleContent>
}

const profile: Profile = {
  name: 'Léo-Paul Ciron',
  role: 'Développeur Web Junior',
  location: 'Amiens, France',
  phone: '+33 6 17 17 89 08',
  email: 'leopaulciron@gmail.com',
  website: 'lciron.com',
  experiences: [
    {
      role: 'Développeur Web',
      company: 'Polyclinique de Picardie',
      location: 'Amiens',
      period: '09/2024 – 12/2024',
      bullets: [
        "Réalisation d'une solution web de gestion des entretiens annuels d'évaluations, impactant plus de 400 salariés.",
        'Gestion de la phase de test et de mise en production.',
      ],
    },
    {
      role: 'Freelancer',
      company: 'HYDROMAG',
      location: 'Chambly',
      period: '11/2023 – 07/2024',
      bullets: [
        "Réalisation d'un site vitrine comptant plusieurs centaines de visiteurs mensuels.",
        "Réalisation d'un concepteur de vérin personnalisé, facilitant le contact avec des clients.",
        'Optimisation des performances du site afin de correspondre aux bonnes pratiques Google.',
      ],
    },
    {
      role: 'Alternant développeur web',
      company: 'Polyclinique de Picardie',
      location: 'Amiens',
      period: '01/2021 – 09/2024',
      bullets: [
        "Conception et développement de solutions web pour la gestion RH de l'entreprise (contrat, accident de travail), impactant plus de 400 personnes.",
        'Gestion de projet avec recueil des besoins, conception de cahier des charges, notes de cadrage et documentation applicative.',
        'Gestion des phases de test et de mise en production des applications web.',
      ],
    },
  ],
  highlights: [
    {
      title: 'Optimisation de la vitesse des sites web',
      description: 'Réduction du temps de chargement de 30%.',
    },
    {
      title: 'Déploiement de solutions web',
      description: 'Déploiement de 5 solutions web optimisant les processus RH.',
    },
    {
      title: 'Réalisation de formations',
      description:
        'Formations des salariés sur les enjeux et bonnes pratiques en cybersécurité.',
    },
  ],
  skills: [
    'Agile',
    'Angular',
    'Java',
    'JavaScript',
    'Laravel',
    'NestJS',
    'Nx',
    'PHP',
    'PowerShell',
    'SQL',
    'Symfony',
    'TypeScript',
    'WordPress',
    'Docker',
    'Git',
  ],
  education: [
    {
      diploma: 'Master MIAGE',
      school: 'Université Picardie Jules Verne',
      location: 'Amiens',
      period: '01/2022 – 01/2024',
    },
    {
      diploma: 'Licence Professionnelle',
      school: 'IUT Amiens',
      location: 'Amiens',
      period: '01/2021 – 01/2022',
      details: ['Réseaux et Génie Informatique', 'Mention Bien'],
    },
    {
      diploma: 'DUT Informatique',
      school: 'IUT Amiens',
      location: 'Amiens',
      period: '01/2019 – 01/2021',
    },
  ],
  languages: ['Anglais (lu, parlé et écrit)'],
  passions: ['Balade dans la nature'],
  metrics: [
    { label: 'Collaborateurs impactés', value: '400+' },
    { label: 'Solutions RH déployées', value: '5' },
    { label: 'Gain de performance', value: '30%' },
  ],
  projects: [
    {
      title: 'Suite RH modulable',
      description:
        "Plateforme de gestion RH avec automatisation des contrats, accidents de travail et workflows d'approbation.",
      tags: ['React', 'Node', 'SQL'],
      year: '2024',
      accent: '#b08d57',
    },
    {
      title: 'Configurateur industriel',
      description:
        "Outil interactif pour configurer des vérins sur mesure et générer des demandes clients qualifiées.",
      tags: ['TypeScript', 'UX', 'API'],
      year: '2024',
      accent: '#1b1b1b',
    },
    {
      title: 'Site vitrine premium',
      description: 'Site vitrine performant optimisé SEO avec suivi analytique et contenu éditorial.',
      tags: ['WordPress', 'SEO', 'Performance'],
      year: '2023',
      accent: '#6e5c3a',
    },
  ],
  locales: {
    fr: {
      title: 'Développeur Web Junior',
      about:
        'Passionné par le développement web et la gestion agile, avec une expertise en React et PHP, je souhaite contribuer à des projets innovants et collaboratifs tout en poursuivant un apprentissage continu pour avoir un impact positif.',
      sections: {
        experience: {
          title: 'EXPÉRIENCES',
          subtitle: 'Des expériences orientées impact et qualité produit.',
        },
        highlights: {
          title: 'RÉALISATIONS',
          subtitle: 'Des livrables mesurables et des résultats tangibles.',
        },
        skills: {
          title: 'COMPÉTENCES',
          subtitle: 'Stack technique & méthodes de travail.',
        },
        languages: {
          title: 'LANGUES',
          subtitle: 'Communication claire et collaborative.',
        },
        passions: {
          title: 'PASSIONS',
          subtitle: 'Équilibre & inspirations.',
        },
        education: {
          title: 'FORMATIONS',
          subtitle: 'Un parcours académique solide et progressif.',
        },
        projects: {
          title: 'PROJETS',
          subtitle: 'Une sélection de livrables haut de gamme.',
        },
        contact: {
          title: 'CONTACT',
          subtitle: 'Parlons de votre prochain produit digital.',
        },
      },
      cta: {
        download: 'Télécharger le CV',
        contact: 'Prendre contact',
        availability: 'Disponible pour des missions React / Fullstack.',
      },
      metricsTitle: 'Impact & résultats',
      contactLabels: {
        name: 'Votre nom',
        email: 'Votre email',
        message: 'Votre message',
        send: 'Envoyer',
        success: 'Merci ! Votre message est prêt à être envoyé.',
      },
    },
    en: {
      title: 'Junior Web Developer',
      about:
        'Passionate about web development and agile practices, with a focus on React and PHP, I aim to contribute to innovative, collaborative projects while continuously learning to create positive impact.',
      sections: {
        experience: {
          title: 'EXPERIENCE',
          subtitle: 'Product-minded experiences focused on impact and quality.',
        },
        highlights: {
          title: 'HIGHLIGHTS',
          subtitle: 'Measurable deliveries and tangible results.',
        },
        skills: {
          title: 'SKILLS',
          subtitle: 'Technical stack & ways of working.',
        },
        languages: {
          title: 'LANGUAGES',
          subtitle: 'Clear and collaborative communication.',
        },
        passions: {
          title: 'INTERESTS',
          subtitle: 'Balance & inspiration.',
        },
        education: {
          title: 'EDUCATION',
          subtitle: 'A solid and progressive academic path.',
        },
        projects: {
          title: 'PROJECTS',
          subtitle: 'A curated selection of premium deliverables.',
        },
        contact: {
          title: 'CONTACT',
          subtitle: "Let's discuss your next digital product.",
        },
      },
      cta: {
        download: 'Download Resume',
        contact: 'Get in touch',
        availability: 'Available for React / Fullstack missions.',
      },
      metricsTitle: 'Impact & results',
      contactLabels: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send message',
        success: 'Thanks! Your message is ready to be sent.',
      },
    },
  },
}

export default profile

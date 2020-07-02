import {
  FRONT_END,
  BACK_END,
  LANGUAGES,
  FRAMEWORKS,
  ARCHITECTURE,
  VCS,
  MANAGEMENT
} from './Categories'

const frontEnd = [
  {
    category: [
      FRONT_END,
      LANGUAGES
    ],
    text: 'HTML5'
  },
  {
    category: [
      FRONT_END
    ],
    text: 'CSS3'
  },
  {
    category: [
      FRONT_END
    ],
    text: 'Scss'
  },
  {
    category: [
      FRONT_END,
      FRAMEWORKS
    ],
    text: 'Bootstrap'
  },
  {
    category: [
      FRONT_END,
      LANGUAGES
    ],
    text: 'Javascript'
  },
  {
    category: [
      FRONT_END,
      FRAMEWORKS
    ],
    text: 'ReactJS'
  },
  {
    category: [
      FRONT_END
    ],
    text: 'Redux'
  },
  {
    category: [
      FRONT_END
    ],
    text: 'Hooks'
  },
  {
    category: [
      FRONT_END
    ],
    text: 'Styled-components'
  }
]

const backEnd = [
  {
    category: [
      BACK_END,
      LANGUAGES
    ],
    text: 'PHP'
  },
  {
    category: [
      BACK_END,
      LANGUAGES
    ],
    text: 'Ruby'
  },
  {
    category: [
      BACK_END,
      FRAMEWORKS
    ],
    text: 'Rails'
  },
  {
    category: [
      BACK_END,
      FRAMEWORKS
    ],
    text: 'Symfony'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'Rubocop'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'SQL'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'MySQL'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'Redis'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'Sidekiq'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'API REST'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'RSpec'
  },
  {
    category: [
      BACK_END,
    ],
    text: 'MiniTest'
  }
]

const architecture = [
  {
    category: [
      ARCHITECTURE,
    ],
    text: 'Docker'
  },
  {
    category: [
      ARCHITECTURE,
    ],
    text: 'Docker Compose'
  },
  {
    category: [
      ARCHITECTURE,
    ],
    text: 'AWS'
  },
  {
    category: [
      ARCHITECTURE,
    ],
    text: 'Heroku'
  }
]

const vcs = [
  {
    category: [
      VCS,
    ],
    text: 'Git'
  },
  {
    category: [
      VCS,
    ],
    text: 'GitFlow'
  },
  {
    category: [
      VCS,
    ],
    text: 'GitLab'
  },
  {
    category: [
      VCS,
    ],
    text: 'GitHub'
  },
  {
    category: [
      VCS,
    ],
    text: 'Bitbucket'
  }
]

const management = [
  {
    category: [
      MANAGEMENT,
    ],
    text: 'Jira'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'Redmine'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'Scrum'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'ISO/IEC 27000'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'ISO 9000'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'ITIL'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'Análisis de procesos'
  },
  {
    category: [
      MANAGEMENT,
    ],
    text: 'BPMN'
  }
]

export const SKILL_LIST = [
  ...frontEnd,
  ...backEnd,
  ...architecture,
  ...vcs,
  ...management,
]
/**
 * Centralized constants and values
 */

export const COLORS = {
  PRIMARY: '#0769e0',
  PRIMARY_HOVER: '#0558c0',
  TEXT_PRIMARY: '#6d7784',
  TEXT_SECONDARY: '#807784',
  TEXT_MUTED: '#6b6969',
  BACKGROUND_LIGHT: '#f5faff',
  BACKGROUND_PROFILE: '#ecf4ff',
} as const

export const FONTS = {
  MONTSERRAT: 'Montserrat, sans-serif',
  POPPINS: 'Poppins, sans-serif',
  INTER: 'Inter, sans-serif',
  PLATYPI: 'Platypi',
  MOOLI: 'Mooli, sans-serif',
  PRIDI: 'Pridi, serif',
} as const

export const SOCIAL_LINKS = [
  { name: 'Linkedin', color: 'bg-[#0077B5]', href: '#' },
  { name: 'Dribbble', color: 'bg-[#EA4C89]', href: '#' },
  { name: 'Behance', color: 'bg-[#1769FF]', href: '#' },
  { name: 'Instagram', color: 'bg-[#C13584]', href: '#' },
] as const

export const PROJECT_TYPES = [
  { name: 'App', color: 'bg-[#E6E6FA]' },
  { name: 'Website', color: 'bg-[#fff2e5]' },
  { name: 'Graphics', color: 'bg-[#FFE6E6]' },
  { name: 'Redesign', color: 'bg-[#E6FFE6]' },
] as const

export const SKILLS = [
  ['UI Design', 'UX Design', 'wireframing', 'User Research', 'Team Player'],
  [
    'Information Architecture',
    'Prototyping',
    'Visual Design',
    'Problem Solving',
  ],
  [
    'Interaction Design',
    'Design System',
    'Accessibility Design',
  ],
  [
    'Communication',
    'Collaboration',
    'Logo Design',
    'Empathy',
    'Critical Thinking',
  ],
  [
    'Time Management',
    'Attention to Detail',
    'Content Designer',
    'Adaptability',
  ],
  [
    'Strategic Thinking',
    'Usability Testing',
    'Market Awareness',
    'Punctual delivery',
  ],
] as const

export const MAX_WIDTH_CONTENT = '1400px'

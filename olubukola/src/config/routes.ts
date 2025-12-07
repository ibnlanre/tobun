/**
 * Centralized routes configuration
 */
export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  SWIFT_RATE_APP: '/swift_rate_app',
  TULIP_APP: '/tulip_app',
  ATM_CARD: '/atm_card',
  GRAPHIC: '/graphic',
} as const


/**
 * Navigation menu items
 */
export const NAV_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Profile', path: ROUTES.PROFILE },
  { label: 'Swift Rate App', path: ROUTES.SWIFT_RATE_APP },
  { label: 'Tulip App', path: ROUTES.TULIP_APP },
  { label: 'ATM Card', path: ROUTES.ATM_CARD },
  { label: 'Graphic', path: ROUTES.GRAPHIC },
] as const

/**
 * Project type categories
 */
export const PROJECT_TYPES = {
  MOBILE_APPS: 'mobile_apps',
  WEBSITES: 'websites',
} as const

export type ProjectType = typeof PROJECT_TYPES[keyof typeof PROJECT_TYPES]

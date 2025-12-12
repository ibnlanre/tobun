/**
 * Centralized routes configuration
 */
export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  SWIFT_RATE_APP: '/swift-rate-app',
  TULIP_APP: '/tulip-app',
  ATM_CARD: '/atm-card',
  GRAPHIC: '/illustration',
  LITTLE_LUMINARIES: '/little-luminaries',
  LAURIENLA_CAKE: '/laurienla-cake',
  HEIKENMA_SOLAR: '/heikenma-solar',
  LADYWID: '/ladywid',
} as const

/**
 * Project type categories
 */
export const PROJECT_TYPES = {
  MOBILE_APPS: 'mobile_apps',
  WEBSITES: 'websites',
} as const

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES]

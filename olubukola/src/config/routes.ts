/**
 * Centralized routes configuration
 */
export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  MOBILE_APPS: '/mobile-apps',
  WEBSITES: '/websites',
  SWIFT_RATE_APP: '/mobile-apps/swift-rate-app',
  TULIP_APP: '/mobile-apps/tulip-app',
  ATM_CARD: '/graphic-designs/atm-card',
  ILLUSTRATION: '/graphic-designs/illustration',
  LITTLE_LUMINARIES: '/websites/little-luminaries',
  LAURIENLA_CAKE: '/mobile-apps/laurienla-cake',
  HEIKENMA_SOLAR: '/websites/heikenma-solar',
  LADYWID: '/websites/ladywid',
} as const

/**
 * Project type categories
 */
export const PROJECT_TYPES = {
  MOBILE_APPS: 'mobile_apps',
  WEBSITES: 'websites',
} as const

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES]

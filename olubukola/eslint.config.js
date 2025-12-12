import { tanstackConfig } from '@tanstack/eslint-config'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default [
  ...tanstackConfig,
  {
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
  },
]

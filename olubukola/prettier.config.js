//  @ts-check

import xml from '@prettier/plugin-xml'

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  parser: 'typescript',
  plugins: [xml],
}

export default config

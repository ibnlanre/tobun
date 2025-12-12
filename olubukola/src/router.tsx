import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'
import { routeTree } from './routeTree.gen'

import type { PropsWithChildren } from 'react'

export const getRouter = () => {
  const { queryClient } = TanstackQuery.getContext()

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestorationBehavior: 'smooth',
    defaultHashScrollIntoView: { behavior: 'smooth' },
    scrollRestoration: true,
    Wrap: (props: PropsWithChildren) => {
      return (
        <TanstackQuery.Provider queryClient={queryClient}>
          {props.children}
        </TanstackQuery.Provider>
      )
    },
  })

  setupRouterSsrQueryIntegration({ router, queryClient })

  return router
}

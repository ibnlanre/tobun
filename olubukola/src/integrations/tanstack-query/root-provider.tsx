import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

export function getContext() {
  const queryClient = new QueryClient()
  return {
    queryClient,
  }
}

interface ProviderProps extends PropsWithChildren {
  queryClient: QueryClient
}

export function Provider({ children, queryClient }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

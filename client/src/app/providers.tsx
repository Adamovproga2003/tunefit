'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, useState } from 'react'

type Props = {
	children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) =>{
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Providers
'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  // const queryClient = useQueryClient()

  // const query = useQuery({ queryKey: ['auth'], queryFn: getTodos })
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')){
      // Redirect to login page
      // queryClient.setQueryData(['auth'], null)
      router.push('/login')
      return
    }
  }, [router])

  return (
    <main>
      Dashboard
    </main>
  );
}

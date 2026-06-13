import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { ManthanInterestClient } from './ManthanInterestClient'

export default async function ManthanInterestPage() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  const { data: interests } = await supabase
    .from('manthan_interest')
    .select('*')
    .order('created_at', { ascending: false })

  return <ManthanInterestClient initialInterests={interests || []} />
}
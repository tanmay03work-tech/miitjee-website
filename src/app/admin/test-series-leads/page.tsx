import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { TestSeriesLeadsClient } from './TestSeriesLeadsClient'

export default async function TestSeriesLeadsPage() {
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

  const { data: leads } = await supabase
    .from('test_series_leads')
    .select('*')
    .order('created_at', { ascending: false })

  return <TestSeriesLeadsClient initialLeads={leads || []} />
}
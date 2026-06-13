import { createClient } from "@/lib/supabase/server"
import { ResultsClient } from "./results-client"

export const dynamic = 'force-dynamic'

export default async function AdminResultsPage() {
  const supabase = await createClient()
  
  const { data: results, error } = await supabase
    .from('results')
    .select('*')
    .order('year', { ascending: false })
    .order('sort_order', { ascending: true })

  if (error) {
    console.error("Error fetching results:", error)
  }

  return (
    <div className="p-6">
      <ResultsClient initialData={results || []} />
    </div>
  )
}
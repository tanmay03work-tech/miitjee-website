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

  const { data: resultImages, error: error2 } = await supabase
    .from('result_images')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error || error2) {
    console.error("Error fetching results:", error || error2)
  }

  return (
    <div className="p-6">
      <ResultsClient 
        initialData={results || []} 
        initialResultImages={resultImages || []} 
      />
    </div>
  )
}
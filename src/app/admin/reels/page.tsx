import { createClient } from "@/lib/supabase/server"
import { ReelsClient } from "./reels-client"

export const dynamic = 'force-dynamic'

export default async function AdminReelsPage() {
  const supabase = await createClient()
  
  const { data: reels, error } = await supabase
    .from('featured_reels')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  if (error) {
    console.error("Error fetching reels:", error)
  }

  return (
    <div className="p-6">
      <ReelsClient initialData={reels || []} />
    </div>
  )
}

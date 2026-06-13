import { createClient } from "@/lib/supabase/server"
import { GalleryClient } from "./gallery-client"

export const dynamic = 'force-dynamic'

export default async function AdminGalleryPage() {
  const supabase = await createClient()
  
  const { data: gallery, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error("Error fetching gallery:", error)
  }

  return (
    <div className="p-6">
      <GalleryClient initialData={gallery || []} />
    </div>
  )
}
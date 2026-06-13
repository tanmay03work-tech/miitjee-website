import { createClient } from "@/lib/supabase/server"
import { FacultyClient } from "./faculty-client"

export const dynamic = 'force-dynamic'

export default async function AdminFacultyPage() {
  const supabase = await createClient()
  
  const { data: faculty, error } = await supabase
    .from('faculty')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error("Error fetching faculty:", error)
  }

  return (
    <div className="p-6">
      <FacultyClient initialData={faculty || []} />
    </div>
  )
}
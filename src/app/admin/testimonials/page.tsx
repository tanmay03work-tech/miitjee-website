import { createClient } from "@/lib/supabase/server"
import { TestimonialsClient } from "./testimonials-client"

export const dynamic = 'force-dynamic'

export default async function AdminTestimonialsPage() {
  const supabase = await createClient()
  
  const { data: testimonials, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error("Error fetching testimonials:", error)
  }

  return (
    <div className="p-6">
      <TestimonialsClient initialData={testimonials || []} />
    </div>
  )
}
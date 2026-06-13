import { createClient } from "@/lib/supabase/server"
import { SettingsClient } from "./settings-client"

export const dynamic = 'force-dynamic'

export default async function AdminSettingsPage() {
  const supabase = await createClient()
  
  const { data: settings, error } = await supabase
    .from('site_settings')
    .select('*')

  if (error) {
    console.error("Error fetching site settings:", error)
  }

  // Convert array to Record<string, string> for easier client access
  const settingsMap = (settings || []).reduce((acc: Record<string, string>, curr) => {
    if (curr.value) acc[curr.key] = curr.value
    return acc
  }, {})

  return (
    <div className="p-6">
      <SettingsClient settingsMap={settingsMap} />
    </div>
  )
}
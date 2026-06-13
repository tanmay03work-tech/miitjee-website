"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2, Save } from "lucide-react"
import { toast } from "sonner"
import { updateSiteSetting } from "../actions"

export function SettingsClient({ settingsMap }: { settingsMap: Record<string, string> }) {
  const [manthanDate, setManthanDate] = useState(() => {
    const dt = settingsMap['manthan_launch_date']
    if (dt) {
      // Return format suitable for datetime-local: YYYY-MM-DDTHH:mm
      return new Date(dt).toISOString().slice(0, 16)
    }
    return ""
  })
  const [announcementText, setAnnouncementText] = useState(settingsMap['announcement_bar'] || "")
  const [primaryPhone, setPrimaryPhone] = useState(settingsMap['contact_primary'] || "")
  const [secondaryPhone, setSecondaryPhone] = useState(settingsMap['contact_secondary'] || "")

  const [savingKey, setSavingKey] = useState<string | null>(null)

  const handleSave = async (key: string, value: string) => {
    setSavingKey(key)
    try {
      let finalValue = value
      if (key === 'manthan_launch_date' && value) {
        // Convert local datetime to ISO string
        finalValue = new Date(value).toISOString()
      }
      
      await updateSiteSetting(key, finalValue)
      toast.success("Settings saved successfully")
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSavingKey(null)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Site Settings</h2>
        <p className="text-muted-foreground">Manage global configuration for the MIITJEE website.</p>
      </div>

      <div className="space-y-6">
        {/* MANTHAN Launch Date */}
        <div className="rounded-md border bg-card p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium">MANTHAN Launch Date</h3>
            <p className="text-sm text-muted-foreground">
              Sets the target date for the MANTHAN countdown timer on the coming soon page.
            </p>
          </div>
          <div className="flex gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="manthan_date">Launch Date & Time</Label>
              <Input 
                type="datetime-local" 
                id="manthan_date" 
                value={manthanDate}
                onChange={(e) => setManthanDate(e.target.value)}
              />
            </div>
            <Button 
              onClick={() => handleSave('manthan_launch_date', manthanDate)}
              disabled={savingKey === 'manthan_launch_date'}
            >
              {savingKey === 'manthan_launch_date' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save
            </Button>
          </div>
        </div>

        {/* Announcement Bar */}
        <div className="rounded-md border bg-card p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Announcement Bar</h3>
            <p className="text-sm text-muted-foreground">
              Optional message to display at the very top of the website. Leave empty to disable.
            </p>
          </div>
          <div className="flex gap-4 items-end">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="announcement">Announcement Text</Label>
              <Input 
                id="announcement" 
                placeholder="e.g. Admission open for Session 2025-26. Apply Now!"
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
              />
            </div>
            <Button 
              onClick={() => handleSave('announcement_bar', announcementText)}
              disabled={savingKey === 'announcement_bar'}
            >
              {savingKey === 'announcement_bar' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save
            </Button>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="rounded-md border bg-card p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Contact Numbers</h3>
            <p className="text-sm text-muted-foreground">
              Primary and secondary phone numbers displayed in the header and footer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone1">Primary Phone</Label>
              <Input 
                id="phone1" 
                placeholder="e.g. +91 9876543210"
                value={primaryPhone}
                onChange={(e) => setPrimaryPhone(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone2">Secondary Phone</Label>
              <Input 
                id="phone2" 
                placeholder="e.g. 0657 2420000"
                value={secondaryPhone}
                onChange={(e) => setSecondaryPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={() => {
                handleSave('contact_primary', primaryPhone)
                handleSave('contact_secondary', secondaryPhone)
              }}
              disabled={savingKey === 'contact_primary' || savingKey === 'contact_secondary'}
            >
              {(savingKey === 'contact_primary' || savingKey === 'contact_secondary') ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save Numbers
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

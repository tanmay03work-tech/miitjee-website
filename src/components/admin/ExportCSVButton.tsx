'use client'

import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { createBrowserClient } from '@supabase/ssr'

interface ExportCSVButtonProps {
  tableName: string
  filename: string
}

export function ExportCSVButton({ tableName, filename }: ExportCSVButtonProps) {
  const [isExporting, setIsExporting] = useState(false)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleExport = async () => {
    try {
      setIsExporting(true)
      const { data, error } = await supabase.from(tableName).select('*').order('created_at', { ascending: false })
      
      if (error) throw error
      if (!data || data.length === 0) {
        alert('No data to export')
        return
      }

      // Convert to CSV
      const headers = Object.keys(data[0])
      const csvContent = [
        headers.join(','),
        ...data.map(row => 
          headers.map(fieldName => {
            const val = row[fieldName]
            if (val === null || val === undefined) return ''
            const strVal = String(val).replace(/"/g, '""')
            return `"${strVal}"`
          }).join(',')
        )
      ].join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.setAttribute('href', url)
      link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Export failed:', err)
      alert('Failed to export CSV')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue disabled:opacity-50 transition-colors"
    >
      {isExporting ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <Download className="w-4 h-4 mr-2" />
      )}
      Export CSV
    </button>
  )
}
'use client'

import { useState } from 'react'
import { DataTable } from '@/components/admin/DataTable'
import { ExportCSVButton } from '@/components/admin/ExportCSVButton'
import { Phone, Search } from 'lucide-react'
import { Database } from '@/types/database.types'

type TestSeriesLead = Database['public']['Tables']['test_series_leads']['Row']

export function TestSeriesLeadsClient({ initialLeads }: { initialLeads: TestSeriesLead[] }) {
  const [leads] = useState<TestSeriesLead[]>(initialLeads)
  const [search, setSearch] = useState('')

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase()) || 
                          l.phone.includes(search)
    return matchesSearch
  })

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-poppins font-bold text-navy">Test Series Leads</h1>
          <p className="text-gray-500">Total downloads: {leads.length}</p>
        </div>
        <ExportCSVButton tableName="test_series_leads" filename="miitjee-test-series-leads" />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 font-inter">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-transparent"
          />
        </div>
      </div>

      <DataTable 
        data={filteredLeads}
        keyExtractor={(l) => l.id}
        columns={[
          { header: 'Name', cell: (l) => <span className="font-medium text-gray-900">{l.name}</span> },
          { header: 'Phone', cell: (l) => (
            <div className="flex items-center gap-2">
              <span>{l.phone}</span>
              <a href={`tel:${l.phone}`} className="text-gray-400 hover:text-blue" title="Call">
                <Phone size={14} />
              </a>
            </div>
          )},
          { header: 'Email', accessorKey: 'email' },
          { header: 'Series Type', accessorKey: 'series_type' },
          { header: 'Date', cell: (l) => l.created_at ? new Date(l.created_at).toLocaleDateString('en-IN') : '-' }
        ]}
      />
    </div>
  )
}

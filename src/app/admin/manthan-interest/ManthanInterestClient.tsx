'use client'

import { useState } from 'react'
import { DataTable } from '@/components/admin/DataTable'
import { ExportCSVButton } from '@/components/admin/ExportCSVButton'
import { Phone, Search } from 'lucide-react'
import { Database } from '@/types/database.types'

type ManthanInterest = Database['public']['Tables']['manthan_interest']['Row']

export function ManthanInterestClient({ initialInterests }: { initialInterests: ManthanInterest[] }) {
  const [interests] = useState<ManthanInterest[]>(initialInterests)
  const [search, setSearch] = useState('')

  const filteredInterests = interests.filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) || 
    i.phone.includes(search)
  )

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-poppins font-bold text-navy">MANTHAN Interest</h1>
          <p className="text-gray-500">Interested students: {interests.length}</p>
        </div>
        <ExportCSVButton tableName="manthan_interest" filename="miitjee-manthan-interest" />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 font-inter">
        <div className="relative flex-1 max-w-md">
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
        data={filteredInterests}
        keyExtractor={(i) => i.id}
        columns={[
          { header: 'Name', cell: (i) => <span className="font-medium text-gray-900">{i.name}</span> },
          { header: 'Phone', cell: (i) => (
            <div className="flex items-center gap-2">
              <span>{i.phone}</span>
              <a href={`tel:${i.phone}`} className="text-gray-400 hover:text-blue" title="Call">
                <Phone size={14} />
              </a>
            </div>
          )},
          { header: 'Class', accessorKey: 'class_level' },
          { header: 'Date', cell: (i) => i.created_at ? new Date(i.created_at).toLocaleDateString('en-IN') : '-' }
        ]}
      />
    </div>
  )
}

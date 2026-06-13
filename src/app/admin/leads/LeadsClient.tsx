'use client'

import { useState } from 'react'
import { DataTable } from '@/components/admin/DataTable'
import { ExportCSVButton } from '@/components/admin/ExportCSVButton'
import { Phone, MessageCircle, Trash2, Search } from 'lucide-react'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/database.types'

type Lead = Database['public']['Tables']['leads']['Row']

export function LeadsClient({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [programFilter, setProgramFilter] = useState('All')

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleStatusChange = async (id: string, newStatus: string) => {
    // Optimistic update
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l))
    
    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', id)
      
    if (error) {
      alert('Failed to update status')
      // Revert on error (could fetch again)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return
    
    setLeads(leads.filter(l => l.id !== id))
    
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)
      
    if (error) {
      alert('Failed to delete lead')
    }
  }

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase()) || 
                          l.phone.includes(search)
    const matchesStatus = statusFilter === 'All' || l.status === statusFilter
    const matchesProgram = programFilter === 'All' || l.programme === programFilter
    return matchesSearch && matchesStatus && matchesProgram
  })

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-poppins font-bold text-navy">Admission Leads</h1>
          <p className="text-gray-500">Manage all student enquiries</p>
        </div>
        <ExportCSVButton tableName="leads" filename="miitjee-leads" />
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
        <select 
          value={programFilter} 
          onChange={(e) => setProgramFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue focus:border-transparent"
        >
          <option value="All">All Programmes</option>
          <option value="JEE Main + Advanced">JEE Main + Advanced</option>
          <option value="NEET / AIIMS">NEET / AIIMS</option>
          <option value="Foundation">Foundation</option>
        </select>
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue focus:border-transparent"
        >
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Admitted">Admitted</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      <DataTable 
        data={filteredLeads}
        keyExtractor={(l) => l.id}
        columns={[
          { header: 'Name', cell: (l) => <span className="font-medium text-gray-900">{l.name}</span> },
          { header: 'Phone', cell: (l) => l.phone },
          { header: 'Class', cell: (l) => l.class_level || '-' },
          { header: 'Programme', cell: (l) => l.programme },
          { header: 'Branch', cell: (l) => l.branch_pref || '-' },
          { header: 'Date', cell: (l) => new Date(l.created_at!).toLocaleDateString('en-IN') },
          { 
            header: 'Status', 
            cell: (l) => (
              <select 
                value={l.status || 'New'}
                onChange={(e) => handleStatusChange(l.id, e.target.value)}
                className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 cursor-pointer
                  ${l.status === 'New' ? 'bg-blue/10 text-blue' : ''}
                  ${l.status === 'Contacted' ? 'bg-yellow/20 text-yellow-800' : ''}
                  ${l.status === 'Admitted' ? 'bg-green-100 text-green-800' : ''}
                  ${l.status === 'Lost' ? 'bg-red-100 text-red-800' : ''}
                `}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Admitted">Admitted</option>
                <option value="Lost">Lost</option>
              </select>
            )
          },
          {
            header: 'Actions',
            cell: (l) => (
              <div className="flex items-center gap-3">
                <a href={`tel:${l.phone}`} className="text-gray-400 hover:text-blue" title="Call">
                  <Phone size={18} />
                </a>
                <a href={`https://wa.me/91${l.phone.replace(/\D/g, '').slice(-10)}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500" title="WhatsApp">
                  <MessageCircle size={18} />
                </a>
                <button onClick={() => handleDelete(l.id)} className="text-gray-400 hover:text-red-500" title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            )
          }
        ]}
      />
    </div>
  )
}

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { StatCard } from '@/components/admin/StatCard'
import { Users, FileText, Trophy, GraduationCap } from 'lucide-react'

export default async function AdminDashboard() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  // Fetch stats concurrently
  const [
    { count: leadsCount },
    { count: testSeriesCount },
    { count: manthanCount },
    { count: resultsCount }
  ] = await Promise.all([
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('test_series_leads').select('*', { count: 'exact', head: true }),
    supabase.from('manthan_interest').select('*', { count: 'exact', head: true }),
    supabase.from('results').select('*', { count: 'exact', head: true }).eq('is_published', true),
  ])

  // Fetch recent activity
  const [{ data: recentLeads }, { data: recentTestSeries }] = await Promise.all([
    supabase.from('leads').select('id, name, phone, created_at').order('created_at', { ascending: false }).limit(5),
    supabase.from('test_series_leads').select('id, name, phone, created_at').order('created_at', { ascending: false }).limit(5)
  ])

  // Combine and sort
  const combinedActivity = [
    ...(recentLeads || []).map(l => ({ ...l, type: 'Lead' })),
    ...(recentTestSeries || []).map(t => ({ ...t, type: 'Test Download' }))
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
   .slice(0, 10)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-poppins font-bold text-navy">Dashboard</h1>
        <p className="text-gray-500">Welcome to MIITJEE Admin Panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Admission Leads" value={leadsCount || 0} icon={Users} />
        <StatCard title="Test Series Downloads" value={testSeriesCount || 0} icon={FileText} />
        <StatCard title="MANTHAN Interest" value={manthanCount || 0} icon={Trophy} />
        <StatCard title="Published Results" value={resultsCount || 0} icon={GraduationCap} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-poppins font-semibold text-navy">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                <th className="px-6 py-3 font-inter">Type</th>
                <th className="px-6 py-3 font-inter">Name</th>
                <th className="px-6 py-3 font-inter">Phone</th>
                <th className="px-6 py-3 font-inter">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {combinedActivity.length > 0 ? combinedActivity.map((activity) => (
                <tr key={`${activity.type}-${activity.id}`} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${activity.type === 'Lead' ? 'bg-blue/10 text-blue' : 'bg-green-100 text-green-800'}
                    `}>
                      {activity.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{activity.name}</td>
                  <td className="px-6 py-4 text-gray-500">{activity.phone}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(activity.created_at).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No recent activity
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
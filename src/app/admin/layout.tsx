import { Sidebar } from '@/components/admin/Sidebar'

export const metadata = {
  title: 'Admin Dashboard | MIITJEE Classes',
  description: 'MIITJEE Classes admin panel',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-inter">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
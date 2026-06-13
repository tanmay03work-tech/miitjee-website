import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
}

export function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue"></div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-3xl font-poppins font-bold text-navy">{value}</h3>
        </div>
        <div className="p-3 bg-blue/5 rounded-lg text-blue group-hover:bg-blue group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </div>
    </div>
  )
}
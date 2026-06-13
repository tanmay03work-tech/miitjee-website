'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Trophy, 
  GraduationCap, 
  Image as ImageIcon, 
  MessageSquareQuote, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'Test Series Leads', href: '/admin/test-series-leads', icon: FileText },
  { name: 'MANTHAN Interest', href: '/admin/manthan-interest', icon: Trophy },
  { name: 'Results', href: '/admin/results', icon: GraduationCap },
  { name: 'Faculty', href: '/admin/faculty', icon: Users },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  // Hide sidebar on login page
  if (pathname === '/admin/login') {
    return null
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between bg-navy text-white p-4 h-16">
        <span className="font-poppins font-bold text-xl tracking-tight">MIITJEE Admin</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:relative md:flex
      `}>
        <div className="h-16 flex items-center px-6 bg-navy text-white md:bg-white md:text-navy border-b border-gray-200">
          <span className="font-poppins font-bold text-xl tracking-tight hidden md:block">MIITJEE Admin</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              const Icon = link.icon
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center px-6 py-3 text-sm font-inter
                      ${isActive 
                        ? 'text-blue bg-blue/5 border-l-4 border-blue font-semibold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue border-l-4 border-transparent'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
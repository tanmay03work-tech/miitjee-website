import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 font-inter">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="flex items-center">
              {item.href && !isLast ? (
                <Link 
                  href={item.href}
                  className="hover:text-[#1C1CA5] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-[#23205D] font-medium' : ''}>
                  {item.label}
                </span>
              )}
              
              {!isLast && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import { Lock } from 'lucide-react';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';

interface MockPaperCardProps {
  paper: typeof NEET_MOCK_PAPERS[0];
}

export function MockPaperCard({ paper }: MockPaperCardProps) {
  // Extract number from title, e.g. "Mock Paper 1" -> "1"
  const paperNumber = paper.title.split(' ').pop();

  return (
    <div className="bg-white border border-gray-200 rounded-[12px] p-6 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[var(--navy)]/20 transition-all duration-300 relative overflow-hidden group">
      <div className="flex items-start justify-between mb-6">
        <h3 className="font-display text-xl font-extrabold text-[var(--navy)]">
          NEET Mock Paper {paperNumber}
        </h3>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-gray-100 text-gray-500 rounded-md border border-gray-200">
          <Lock className="w-3 h-3" /> Locked
        </span>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 text-[13px] font-semibold bg-orange-50 text-orange-600 rounded-full border border-orange-200">
            Physics: 45 Qs
          </span>
          <span className="inline-flex items-center px-3 py-1 text-[13px] font-semibold bg-purple-50 text-purple-600 rounded-full border border-purple-200">
            Chemistry: 45 Qs
          </span>
          <span className="inline-flex items-center px-3 py-1 text-[13px] font-semibold bg-green-50 text-green-600 rounded-full border border-green-200">
            Biology: 90 Qs
          </span>
        </div>
      </div>
      
      <div className="mt-auto pt-6 border-t border-gray-100">
        <button className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-display font-bold text-sm py-3 px-4 rounded-lg transition-colors group-hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          Unlock With Details →
        </button>
      </div>
    </div>
  );
}
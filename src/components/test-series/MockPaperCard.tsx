import { Lock } from 'lucide-react';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';

interface MockPaperCardProps {
  paper: typeof NEET_MOCK_PAPERS[0];
}

export function MockPaperCard({ paper }: MockPaperCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border-t-4 border-[#1C1CA5] p-6 flex flex-col h-full hover:shadow-lg transition-shadow relative overflow-hidden">
      <div className="mb-4">
        <h3 className="text-xl font-bold font-poppins text-[#23205D] mb-1">
          {paper.title}
        </h3>
        <p className="text-sm font-medium text-slate-500 mb-3">
          Full Syllabus · NTA 2024 Pattern
        </p>
        <div className="bg-slate-100 rounded-md px-3 py-2 inline-block">
          <p className="text-sm text-slate-700 font-inter font-medium tracking-tight">
            {paper.description}
          </p>
        </div>
      </div>
      
      <div className="mt-auto pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center text-slate-500 font-medium">
            <Lock className="w-4 h-4 mr-1.5 text-[#FEFD12] drop-shadow-sm" />
            Locked
          </span>
          <span className="text-[#1C1CA5] font-medium text-xs bg-blue-50 px-2 py-1 rounded">
            Unlock with details
          </span>
        </div>
      </div>
    </div>
  );
}
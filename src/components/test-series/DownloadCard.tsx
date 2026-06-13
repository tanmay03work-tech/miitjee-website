import { Download } from 'lucide-react';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';

interface DownloadCardProps {
  paper: typeof NEET_MOCK_PAPERS[0];
}

export function DownloadCard({ paper }: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#1C1CA5]/20 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-poppins text-[#23205D] mb-2">
          {paper.title} — Full Syllabus
        </h3>
        <p className="text-sm font-medium text-slate-600 font-inter">
          {paper.description}
        </p>
      </div>
      
      <div className="mt-auto">
        <a
          href={paper.url}
          download={paper.filename}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FEFD12] hover:bg-yellow-400 text-[#23205D] font-bold font-poppins py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Paper
        </a>
      </div>
    </div>
  );
}
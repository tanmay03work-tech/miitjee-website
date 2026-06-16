import { Download } from 'lucide-react';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';

interface DownloadCardProps {
  paper: typeof NEET_MOCK_PAPERS[0];
}

export function DownloadCard({ paper }: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[var(--navy)]/20 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-poppins text-[var(--navy)] mb-2">
          {paper.title} — Full Syllabus
        </h3>
        <p className="text-sm font-medium text-slate-600 font-inter">
          {paper.description}
        </p>
      </div>
      
      <div className="mt-auto flex flex-col gap-3">
        <a
          href={paper.url}
          download={paper.filename}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[var(--gold)] hover:bg-yellow-400 text-[var(--navy)] font-bold font-poppins py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Paper
        </a>
        {paper.answerKeyUrl && (
          <a
            href={paper.answerKeyUrl}
            download={paper.answerKeyFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-100 hover:bg-slate-200 text-[var(--navy)] font-bold font-poppins py-3 px-4 rounded-lg flex items-center justify-center transition-colors border border-slate-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Answer Key
          </a>
        )}
      </div>
    </div>
  );
}
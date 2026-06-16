import { DownloadCard } from '@/components/test-series/DownloadCard';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Download NEET Mock Papers | MIITJEE',
  description: 'Download your free NEET mock test papers here.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter pb-20">
      {/* Success Banner */}
      <div className="bg-[var(--navy)] text-white py-12 px-4 sm:px-6 lg:px-8 text-center border-b-[6px] border-[var(--gold)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold font-poppins mb-4">
            🎉 Your Papers Are Ready!
          </h1>
          <p className="text-lg text-blue-100 font-medium">
            Thank you for registering. Download all NEET mock papers below. Good luck with your preparation!
          </p>
        </div>
      </div>

      {/* Downloads Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEET_MOCK_PAPERS.map((paper) => (
            <DownloadCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>

      {/* Upsell Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--navy)] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold font-poppins mb-4 relative z-10">
            Want to crack NEET 2025?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-medium relative z-10">
            Join MIITJEE&apos;s NEET Classroom Coaching.
            <br />
            Expert faculty · Small batches · Proven results
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/#admission"
              className="w-full sm:w-auto bg-[var(--gold)] hover:bg-yellow-400 text-[var(--navy)] font-bold font-poppins px-8 py-4 rounded-full transition-colors"
            >
              Book Free Counselling →
            </Link>
            <a
              href="https://wa.me/919999999999?text=I%20downloaded%20the%20NEET%20mock%20papers%20and%20want%20to%20know%20about%20NEET%20coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-bold font-poppins px-8 py-4 rounded-full border-2 border-white transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
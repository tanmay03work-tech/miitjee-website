import Link from 'next/link';

export const metadata = {
  title: 'Test Series | MIITJEE',
  description: 'Join the MIITJEE Test Series for NEET and JEE preparation.',
};

export default function TestSeriesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#23205D] font-poppins mb-4">
            MIITJEE Test Series
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Evaluate your preparation with our expertly crafted mock test series based on the latest NTA patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Active NEET Test Series */}
          <Link href="/test-series/neet" className="block group">
            <div className="bg-white rounded-2xl shadow-sm border-2 border-[#1C1CA5] p-8 h-full transition-all hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FEFD12] text-[#23205D] text-xs font-bold px-3 py-1 rounded-bl-lg">
                FREE PDF PAPERS
              </div>
              <h2 className="text-2xl font-bold text-[#1C1CA5] font-poppins mb-3 group-hover:text-blue-800 transition-colors">
                NEET Mock Test Series
              </h2>
              <p className="text-slate-600 mb-6 font-inter">
                Download 5 full-syllabus mock papers for NEET 2024 Re-exam. Prepared by expert MIITJEE faculty.
              </p>
              <div className="flex items-center text-[#1C1CA5] font-semibold">
                Access Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Disabled JEE Test Series */}
          <div className="bg-slate-100 rounded-2xl border-2 border-slate-200 p-8 h-full relative overflow-hidden opacity-80 cursor-not-allowed">
            <div className="absolute top-0 right-0 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              COMING SOON
            </div>
            <h2 className="text-2xl font-bold text-slate-500 font-poppins mb-3">
              JEE Test Series
            </h2>
            <p className="text-slate-500 mb-6 font-inter">
              Comprehensive test series for JEE Main & Advanced. Launching shortly for the upcoming academic session.
            </p>
            <div className="flex items-center text-slate-400 font-semibold">
              Notify Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
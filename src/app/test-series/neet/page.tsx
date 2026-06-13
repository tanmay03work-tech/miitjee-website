import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';
import { MockPaperCard } from '@/components/test-series/MockPaperCard';

export const metadata = {
  title: 'Free NEET Mock Test Papers | MIITJEE',
  description: 'Download 5 free NEET mock test papers prepared by expert MIITJEE faculty.',
};

export default function NeetLandingPage() {
  const features = [
    '180 Questions per paper',
    'NTA 2024 syllabus',
    'Answer key + solutions',
    'All 5 papers in one download',
    'Prepared by MIITJEE expert faculty'
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="bg-[#1C1CA5] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FEFD12] rounded-full blur-[100px] opacity-10 -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-blue-800 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-700">
            🩺 NEET ReNEET Preparation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 leading-tight">
            5 FREE NEET Mock <br className="hidden md:block" /> Test Papers
          </h1>
          <h2 className="text-xl md:text-2xl text-[#FEFD12] font-medium mb-10 max-w-3xl mx-auto">
            By MIITJEE Faculty · Absolutely Free · Instant Access
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-left sm:text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-[#FEFD12] mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="/test-series/neet/register"
              className="inline-flex items-center justify-center bg-[#FEFD12] hover:bg-yellow-400 text-[#23205D] text-lg font-bold font-poppins px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Download All 5 Papers Free →
            </Link>
            <p className="mt-4 text-blue-200 text-sm font-medium">
              Already downloaded by 2,400+ students
            </p>
          </div>
        </div>
      </section>

      {/* Mock Papers Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-[#23205D] mb-4">
              What&apos;s Inside
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              You will get immediate access to all 5 full-syllabus mock papers covering Physics, Chemistry, and Biology.
            </p>
          </div>

          {/* Desktop: 3 on top, 2 on bottom. Mobile: 1 col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {NEET_MOCK_PAPERS.slice(0, 3).map((paper) => (
              <MockPaperCard key={paper.id} paper={paper} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {NEET_MOCK_PAPERS.slice(3, 5).map((paper) => (
              <MockPaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#23205D] py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold font-poppins text-white mb-6">
            Ready to start your NEET preparation?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Fill your details and get all 5 papers instantly — completely free.
          </p>
          <Link
            href="/test-series/neet/register"
            className="inline-flex items-center justify-center bg-[#FEFD12] hover:bg-yellow-400 text-[#23205D] text-lg font-bold font-poppins px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Your Free Papers →
          </Link>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { NEET_MOCK_PAPERS } from '@/lib/constants/mock-papers';
import { MockPaperCard } from '@/components/test-series/MockPaperCard';

export const metadata = {
  title: 'Free NEET Mock Test Papers | MIITJEE',
  description: 'Download free NEET mock test papers prepared by expert MIITJEE faculty.',
};

export default function NeetLandingPage() {
  const featurePills = [
    '180 Questions',
    '720 Marks',
    'Answer Keys'
  ];

  return (
    <div className="min-h-screen font-body bg-[var(--navy)]">
      {/* ── HERO SECTION ── */}
      <section 
        className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 min-h-[65vh] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--navy) 60%, #1a0a0a 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          {/* Top Badge */}
          <div className="inline-flex items-center justify-center bg-red-600/20 text-red-500 font-bold text-[13px] tracking-wide px-4 py-1.5 rounded-full mb-8 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            🩺 FREE FOR ALL NEET ASPIRANTS
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-black leading-[1.1] mb-6 text-white">
            FREE NEET Mock <br className="hidden md:block" /> 
            <span className="text-[var(--gold)]">Test Papers</span>
          </h1>

          {/* Subtext */}
          <h2 className="text-lg md:text-xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
            By MIITJEE Faculty · Perfect Practice for Re-NEET (21st June) · Instant Access
          </h2>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-14">
            {featurePills.map((pill, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center border border-white/30 text-white font-semibold text-[14px] px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Social Proof & CTA */}
          <div className="flex flex-col items-center">
            {/* Social Proof */}
            <div className="mb-8 font-display flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-[var(--gold)] drop-shadow-[0_0_20px_rgba(255,214,0,0.3)] tracking-tight">
                2,400+
              </span>
              <span className="text-sm md:text-base font-bold text-white/70 uppercase tracking-[2px] mt-2">
                students downloaded
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="/test-series/neet/register"
              className="inline-flex items-center justify-center whitespace-nowrap bg-[var(--gold)] hover:bg-yellow-400 text-[var(--navy)] text-base md:text-xl font-display font-extrabold px-6 py-4 md:px-10 md:py-5 rounded-full shadow-[0_0_30px_rgba(255,214,0,0.4)] hover:shadow-[0_0_40px_rgba(255,214,0,0.6)] hover:-translate-y-1 transition-all w-full sm:w-auto"
            >
              Download All Papers Free&nbsp;&rarr;
            </Link>
            
            <p className="mt-5 text-white/50 text-[13px] font-medium tracking-wide">
              No login required · No spam · Instant PDF
            </p>
          </div>
        </div>
      </section>

      {/* ── MOCK PAPERS GRID SECTION ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--navy)] mb-4">
              What&apos;s Inside
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You will get immediate access to all full-syllabus mock papers covering Physics, Chemistry, and Biology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {NEET_MOCK_PAPERS.map((paper) => (
              <MockPaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#060E1C] py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-[var(--navy-light)]">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to start your NEET preparation?
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Fill your details and get all papers instantly — completely free.
          </p>
          <Link
            href="/test-series/neet/register"
            className="inline-flex items-center justify-center whitespace-nowrap bg-[var(--gold)] hover:bg-yellow-400 text-[var(--navy)] text-base md:text-lg font-display font-extrabold px-6 py-4 md:px-10 md:py-5 rounded-full shadow-[0_0_25px_rgba(255,214,0,0.3)] hover:-translate-y-1 transition-all"
          >
            Get Your Free Papers&nbsp;&rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createClient } from '@/lib/supabase/server';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, Beaker, ArrowRight, CheckCircle2, Phone, Award, Trophy, Star, Activity, Download } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEET Medical Coaching | MIITJEE',
  description: 'Top-tier NEET preparation at MIITJEE. Learn from expert faculty, download free mock papers, and join our successful medical alumni.',
};

export default async function NEETPage() {
  const supabase = await createClient();

  // Fetch NEET results
  const { data: resultsList } = await supabase
    .from('results')
    .select('*')
    .eq('programme', 'neet')
    .eq('is_published', true)
    .order('year', { ascending: false })
    .limit(6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[var(--navy)] text-white pt-32 pb-20 relative overflow-hidden min-h-[75vh] flex items-start lg:items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        
        {/* Subtle medical/red accent background shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none text-[var(--red)]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" opacity="0.3" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column - 55% */}
          <div className="w-full lg:w-[55%]">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Programs', href: '/programs' },
                { label: 'NEET' }
              ]} 
            />
            <div className="mt-8">
              <span className="inline-block bg-[var(--red)] text-white px-4 py-1.5 rounded-full font-display font-bold text-sm tracking-wider uppercase mb-6 shadow-lg shadow-red-500/20">
                Medical Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                NEET / AIIMS <br />
                <span className="text-[var(--red)]">Medical Programme</span>
              </h1>
              <p className="text-lg md:text-xl font-body max-w-2xl text-gray-300 mb-8 leading-relaxed relative z-20">
                Pursue your dream of becoming a doctor with our NCERT-focused curriculum and intensive test series methodology.
              </p>
              
              {/* Achievement Strip */}
              <div className="flex flex-wrap gap-3 mb-10 relative z-20">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--red)]/30 px-4 py-2.5 rounded-full backdrop-blur-sm">
                  <Activity className="w-4 h-4 text-[var(--red)] shrink-0" />
                  <span className="text-sm font-body font-semibold">300+ NEET Selections</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--red)]/30 px-4 py-2.5 rounded-full backdrop-blur-sm">
                  <Award className="w-4 h-4 text-[var(--red)] shrink-0" />
                  <span className="text-sm font-body font-semibold">1st Rank City Topper</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--red)]/30 px-4 py-2.5 rounded-full backdrop-blur-sm">
                  <Star className="w-4 h-4 text-[var(--red)] shrink-0" />
                  <span className="text-sm font-body font-semibold">Free Mock Papers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/apply" 
                  className="inline-flex justify-center items-center py-4 px-8 bg-[var(--red)] text-white font-display font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#admission" 
                  className="btn-secondary text-white border-white hover:bg-white/10"
                >
                  Book Free Counselling
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - 45% (Course Stack) */}
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--red)]/10 blur-3xl rounded-full pointer-events-none"></div>
              
              {/* Giant medical icon subtle background */}
              <Stethoscope className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-[var(--red)] opacity-10 pointer-events-none" />
              
              {/* Course 1 - GENESIS */}
              <div className="relative z-30 bg-[var(--navy-mid)] border-l-4 border-[var(--red)] p-6 rounded-2xl shadow-2xl transform translate-y-0 transition-transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">GENESIS</h3>
                  <span className="bg-[var(--red)]/10 text-[var(--red)] text-xs font-bold px-2 py-1 rounded">2-Year</span>
                </div>
                <p className="font-body text-sm text-gray-300">2-Year Class 11 + 12 Board + NEET</p>
              </div>

              {/* Course 2 - SYNCHRONIZER */}
              <div className="relative z-20 bg-[var(--navy-mid)] border-l-4 border-[var(--red)] p-6 rounded-2xl shadow-2xl transform -translate-y-4 scale-[0.95] opacity-90 transition-transform hover:-translate-y-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">SYNCHRONIZER</h3>
                  <span className="bg-[var(--red)]/10 text-[var(--red)] text-xs font-bold px-2 py-1 rounded">1-Year</span>
                </div>
                <p className="font-body text-sm text-gray-300">1-Year 12th Board + NEET</p>
              </div>

              {/* Course 3 - BOOSTER */}
              <div className="relative z-10 bg-[var(--navy-mid)] border-l-4 border-[var(--red)] p-6 rounded-2xl shadow-2xl transform -translate-y-8 scale-[0.90] opacity-80 transition-transform hover:-translate-y-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">BOOSTER</h3>
                  <span className="bg-[var(--red)]/10 text-[var(--red)] text-xs font-bold px-2 py-1 rounded">Dropper</span>
                </div>
                <p className="font-body text-sm text-gray-300">Dropper / ReNEET 1-Year Intensive</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Free Mock Papers Announcement Bar */}
      <Link href="/test-series/neet" className="block w-full bg-[var(--gold)] hover:bg-yellow-400 transition-colors py-4 px-4 text-center">
        <span className="font-display font-black text-[var(--navy)] text-lg md:text-xl">
          🩺 5 FREE NEET Mock Papers · Download Now · No Login Required
        </span>
      </Link>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Legacy Card replacement for placeholder */}
            <div className="order-2 md:order-1">
              <div 
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-8 border border-white/10"
                style={{ background: 'linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-light) 100%)' }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--red)]/5 rounded-bl-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--red)]/5 rounded-tr-full pointer-events-none"></div>
                
                <Trophy className="w-16 h-16 text-[var(--red)] mb-6" />
                <h3 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                  1st Rank City Topper
                </h3>
                <p className="font-body text-[var(--red)] text-lg tracking-widest uppercase font-bold">
                  NEET 2025 · MIITJEE
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-black text-[var(--navy)] mb-6">
                Why Choose MIITJEE for NEET?
              </h2>
              <p className="text-gray-600 font-body mb-8 text-lg leading-relaxed">
                Our NEET programme is highly specialized and purely aligned with the NCERT curriculum. We emphasize conceptual clarity in Biology and numerical prowess in Physics and Chemistry.
              </p>
              <ul className="space-y-5">
                {[
                  'Strict adherence to the latest NMC syllabus and NCERT textbooks',
                  'Extensive doubt clearing sessions and personalized attention',
                  'Regular full-syllabus mock tests to build exam stamina',
                  'Focus on speed and accuracy for the 720-marks challenge'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-[var(--red)]" />
                    </div>
                    <span className="font-body text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Syllabus Coverage */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-[var(--navy)] mb-4">
              Syllabus Highlights
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto text-lg">
              Our curriculum provides balanced coverage across all three major subjects required for NEET.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all card-hover">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[var(--red)] mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Biology (Botany & Zoology)</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Line-by-line NCERT coverage. Focus on human physiology, genetics, plant physiology, and diagram-based questions.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all card-hover">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[var(--red)] mb-6">
                <Beaker size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Chemistry</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Balanced approach to Physical, Organic, and Inorganic chemistry. Mastery over reaction mechanisms and chemical equations.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all card-hover">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[var(--red)] mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Physics</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Tailored for medical aspirants. Focus on formula application, mechanics, electromagnetism, and optics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Types - Redesigned */}
      <section className="py-24 bg-[var(--navy)] text-white relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
              Batch Programmes
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
              Choose the right trajectory for your medical journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* GENESIS */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--red)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[var(--red)]/10 text-[var(--red)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  2 YEAR PROGRAMME
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">GENESIS</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  Two-year integrated classroom for Class 11 + 12 Board + NEET
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> NCERT Foundations
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Unit-wise Tests
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Personal Mentoring
                </div>
              </div>

              <Link href="/apply?course=genesis" className="w-full text-center py-3 rounded-lg border border-[var(--red)] text-[var(--red)] font-bold hover:bg-[var(--red)] hover:text-white transition-colors">
                Enquire About GENESIS
              </Link>
            </div>

            {/* SYNCHRONIZER */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--red)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl relative transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--red)] text-white text-xs font-black px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
              <div className="mb-6 mt-2">
                <span className="inline-block px-3 py-1 bg-[var(--red)]/10 text-[var(--red)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  1 YEAR PROGRAMME
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">SYNCHRONIZER</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  One-year extensive program for 12th Board + NEET
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Exhaustive Coverage
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Full Syllabus Mocks
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Board Exam Support
                </div>
              </div>

              <Link href="/apply?course=synchronizer" className="w-full text-center py-3 rounded-lg bg-[var(--red)] text-white font-bold hover:bg-red-600 transition-colors">
                Enquire About SYNCHRONIZER
              </Link>
            </div>

            {/* BOOSTER */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--red)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[var(--red)]/10 text-[var(--red)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  DROPPER / ReNEET
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">BOOSTER</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  Dropper / ReNEET 1-Year Intensive Program
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Speed & Accuracy Focus
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> High Frequency Testing
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--red)] mr-2" /> Doubt Solving Arrays
                </div>
              </div>

              <Link href="/apply?course=booster" className="w-full text-center py-3 rounded-lg border border-[var(--red)] text-[var(--red)] font-bold hover:bg-[var(--red)] hover:text-white transition-colors">
                Enquire About BOOSTER
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Faculty CTA & Results combined logic */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Faculty CTA Card */}
            <div 
              className="rounded-3xl p-10 shadow-2xl flex flex-col justify-center text-white border border-white/10"
              style={{ background: 'linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-light) 100%)' }}
            >
              <h3 className="font-display font-black text-3xl md:text-4xl mb-4">
                Learn from the Best
              </h3>
              <p className="font-body text-gray-300 mb-8 text-lg">
                Meet our expert NEET faculty with years of proven success. Let us guide you to the white coat.
              </p>
              <a 
                href="tel:+918906000160" 
                className="inline-flex items-center justify-center py-4 px-8 bg-white text-[var(--red)] font-display font-bold rounded-full hover:bg-gray-100 transition-colors w-fit shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" /> Call us at +91 89060 00160
              </a>
            </div>

            {/* Results Spotlight Card */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 flex flex-col justify-center items-center text-center">
              <h3 className="font-display font-black text-3xl text-[var(--navy)] mb-8">
                Hall of Fame Highlight
              </h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm relative">
                <div className="absolute -top-4 -right-4 bg-[var(--red)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white">
                  <Trophy className="w-6 h-6" />
                </div>
                
                {resultsList && resultsList.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden relative mb-4 border-4 border-[var(--red)]">
                      {resultsList[0].photo_url ? (
                        <Image src={resultsList[0].photo_url} alt={resultsList[0].student_name} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Img</div>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-[var(--navy)] text-xl mb-1">{resultsList[0].student_name}</h4>
                    <p className="text-[var(--red)] font-black text-lg bg-[var(--red)]/10 px-4 py-1 rounded-full mb-2">
                      {resultsList[0].rank_score}
                    </p>
                    <p className="text-gray-500 font-body text-sm uppercase tracking-wide">
                      NEET {resultsList[0].year}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="admission" className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-mid)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Ready to start your Medical Journey?
          </h2>
          <p className="text-gray-300 font-body mb-10 text-xl">
            Secure your seat at MIITJEE and take the first step towards a successful career in medicine.
          </p>
          <Link 
            href="/apply" 
            className="inline-flex justify-center items-center py-5 px-12 bg-[var(--red)] text-white font-display font-bold rounded-full hover:bg-red-600 transition-colors text-xl shadow-2xl shadow-red-500/20"
          >
            Apply for Admission <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
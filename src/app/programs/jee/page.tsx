import { createClient } from '@/lib/supabase/server';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Target, Brain, ArrowRight, CheckCircle2, Phone, Award, Trophy, Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JEE Main & Advanced Coaching | MIITJEE',
  description: 'Comprehensive JEE preparation at MIITJEE. Learn from expert faculty, get regular mock tests, and join our successful alumni network.',
};

export default async function JEEPage() {
  const supabase = await createClient();

  // Fetch JEE results
  const { data: resultsList } = await supabase
    .from('results')
    .select('*')
    .eq('programme', 'jee')
    .eq('is_published', true)
    .order('year', { ascending: false })
    .limit(6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[var(--navy)] text-white pt-32 pb-20 relative overflow-hidden min-h-[75vh] flex items-start lg:items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        
        {/* Subtle geometric background shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current" preserveAspectRatio="none">
            <polygon points="100,0 0,100 100,100" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column - 55% */}
          <div className="w-full lg:w-[55%]">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Programs', href: '/programs' },
                { label: 'JEE' }
              ]} 
            />
            <div className="mt-8">
              <span className="inline-block font-display font-bold text-[var(--gold)] mb-6 tracking-wider text-sm uppercase">
                Engineering Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                JEE Main + Advanced <br />
                <span className="text-[var(--gold)]">Programme</span>
              </h1>
              <p className="text-lg md:text-xl font-body max-w-2xl text-gray-300 mb-8 leading-relaxed">
                Prepare with India's finest IITian faculty. Our ELEVATOR, NAVIGATOR and PROPELLER courses are engineered to take you from Class 11 to IIT.
              </p>
              
              {/* Achievement Strip */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Trophy className="w-4 h-4 text-[var(--gold)]" />
                  <span className="text-sm font-body font-semibold">500+ JEE Selections</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-[var(--gold)]" />
                  <span className="text-sm font-body font-semibold">26 Years</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-[var(--gold)]" />
                  <span className="text-sm font-body font-semibold">2nd Rank City Topper 2026</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/apply" 
                  className="btn-primary"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--gold)]/10 blur-3xl rounded-full pointer-events-none"></div>
              
              {/* Course 1 - ELEVATOR */}
              <div className="relative z-30 bg-[var(--navy-mid)] border-l-4 border-[var(--gold)] p-6 rounded-2xl shadow-2xl transform translate-y-0 transition-transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">ELEVATOR</h3>
                  <span className="bg-white/10 text-[var(--gold)] text-xs font-bold px-2 py-1 rounded">2-Year</span>
                </div>
                <p className="font-body text-sm text-gray-300">2-Year Integrated, Class 11 + 12</p>
              </div>

              {/* Course 2 - NAVIGATOR */}
              <div className="relative z-20 bg-[var(--navy-mid)] border-l-4 border-[var(--gold)] p-6 rounded-2xl shadow-2xl transform -translate-y-4 scale-[0.95] opacity-90 transition-transform hover:-translate-y-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">NAVIGATOR</h3>
                  <span className="bg-white/10 text-[var(--gold)] text-xs font-bold px-2 py-1 rounded">1-Year</span>
                </div>
                <p className="font-body text-sm text-gray-300">1-Year, JEE Main + Advanced</p>
              </div>

              {/* Course 3 - PROPELLER */}
              <div className="relative z-10 bg-[var(--navy-mid)] border-l-4 border-[var(--gold)] p-6 rounded-2xl shadow-2xl transform -translate-y-8 scale-[0.90] opacity-80 transition-transform hover:-translate-y-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">PROPELLER</h3>
                  <span className="bg-white/10 text-[var(--gold)] text-xs font-bold px-2 py-1 rounded">Dropper</span>
                </div>
                <p className="font-body text-sm text-gray-300">12th Board + JEE</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-[var(--navy)] mb-6">
                Why Choose MIITJEE for JEE?
              </h2>
              <p className="text-gray-600 font-body mb-8 text-lg leading-relaxed">
                Our JEE programme is meticulously designed to build a strong foundation in Physics, Chemistry, and Mathematics. We focus on conceptual clarity and problem-solving speed, essential for cracking the toughest engineering entrance exams.
              </p>
              <ul className="space-y-5">
                {[
                  'Daily practice papers (DPP) aligned with current JEE patterns',
                  'Doubt resolution counters available post-classes',
                  'Regular All India Test Series (AITS) with performance analytics',
                  'Personal mentoring for academic and psychological support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-[var(--gold-dim)]" />
                    </div>
                    <span className="font-body text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legacy Card replacement for placeholder */}
            <div 
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-8 border border-white/10"
              style={{ background: 'linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-light) 100%)' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full pointer-events-none"></div>
              
              <Award className="w-16 h-16 text-[var(--gold)] mb-6" />
              <h3 className="font-display font-black text-4xl md:text-5xl text-[var(--gold)] mb-4 leading-tight">
                26 Years of IITians
              </h3>
              <p className="font-body text-white/80 text-lg tracking-widest uppercase">
                MIITJEE · Est. 2001 · Jamshedpur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Coverage */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-[var(--navy)] mb-4">
              Comprehensive Coverage
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto text-lg">
              Our curriculum is structured to cover both JEE Main and Advanced syllabus seamlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all card-hover">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--navy)] mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Physics</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Focus on mechanics, electromagnetism, and modern physics with emphasis on numerical problem solving and real-world applications.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all card-hover">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--navy)] mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Chemistry</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                In-depth coverage of Physical, Organic, and Inorganic chemistry. Special focus on NCERT and reaction mechanisms.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all card-hover">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--navy)] mb-6">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Mathematics</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Rigorous training in calculus, algebra, and coordinate geometry. Development of logical thinking and analytical skills.
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
              Choose the right trajectory for your engineering journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* ELEVATOR */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--gold)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  2 YEAR PROGRAMME
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">ELEVATOR</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  Two-year integrated classroom for Class 11 + 12 Board + JEE Main & Advanced
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> DPP
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Mock Tests
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Personal Mentoring
                </div>
              </div>

              <Link href="/apply?course=elevator" className="w-full text-center py-3 rounded-lg border border-[var(--gold)] text-[var(--gold)] font-bold hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors">
                Enquire About ELEVATOR
              </Link>
            </div>

            {/* NAVIGATOR */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--gold)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl relative transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--navy)] text-xs font-black px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
              <div className="mb-6 mt-2">
                <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  1 YEAR PROGRAMME
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">NAVIGATOR</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  One-year extensive program for JEE Main + Advanced
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Exhaustive Coverage
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> AITS Included
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Rank Boosting Sessions
                </div>
              </div>

              <Link href="/apply?course=navigator" className="w-full text-center py-3 rounded-lg bg-[var(--gold)] text-[var(--navy)] font-bold hover:bg-yellow-400 transition-colors">
                Enquire About NAVIGATOR
              </Link>
            </div>

            {/* PROPELLER */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[var(--gold)] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  DROPPER / 12TH
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">PROPELLER</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  12th Board + JEE Main & Advanced intensive
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Crash Course Integration
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> High Frequency Testing
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mr-2" /> Doubt Solving Arrays
                </div>
              </div>

              <Link href="/apply?course=propeller" className="w-full text-center py-3 rounded-lg border border-[var(--gold)] text-[var(--gold)] font-bold hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors">
                Enquire About PROPELLER
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
                Meet our expert JEE faculty from top IITs and NITs. Let us help you engineer your future.
              </p>
              <a 
                href="tel:+918906000160" 
                className="inline-flex items-center justify-center py-4 px-8 bg-[var(--gold)] text-[var(--navy)] font-display font-bold rounded-full hover:bg-yellow-400 transition-colors w-fit"
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
                <div className="absolute -top-4 -right-4 bg-[var(--gold)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-[var(--navy)]" />
                </div>
                
                {resultsList && resultsList.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden relative mb-4 border-4 border-[var(--gold)]">
                      {resultsList[0].photo_url ? (
                        <Image src={resultsList[0].photo_url} alt={resultsList[0].student_name} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Img</div>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-[var(--navy)] text-xl mb-1">{resultsList[0].student_name}</h4>
                    <p className="text-[var(--navy)] font-black text-lg bg-[var(--gold)]/20 px-4 py-1 rounded-full mb-2">
                      {resultsList[0].rank_score}
                    </p>
                    <p className="text-gray-500 font-body text-sm uppercase tracking-wide">
                      JEE Advanced {resultsList[0].year}
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
            Ready to start your JEE Preparation?
          </h2>
          <p className="text-gray-300 font-body mb-10 text-xl">
            Join the legacy of excellence and secure your seat in India's top engineering colleges.
          </p>
          <Link 
            href="/apply" 
            className="btn-primary text-xl px-12 py-5 shadow-2xl"
          >
            Apply for Admission <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createClient } from '@/lib/supabase/server';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Trophy, Target, ArrowRight, CheckCircle2, Phone, Star, Award, Code, BookOpen } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundation Courses (Class 7-10) | MIITJEE',
  description: 'Early preparation for NTSE, Olympiads, and a strong foundation for future JEE/NEET aspirants. Join MIITJEE Foundation classes today.',
};

export default async function FoundationPage() {
  const supabase = await createClient();

  // Fetch Foundation results (NTSE, Olympiads)
  const { data: resultsList } = await supabase
    .from('results')
    .select('*')
    .eq('programme', 'foundation')
    .eq('is_published', true)
    .order('year', { ascending: false })
    .limit(6);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[var(--navy)] text-white pt-32 pb-20 relative overflow-hidden min-h-[75vh] flex items-start lg:items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        
        {/* Subtle accent background shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none text-[#22C55E]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current" preserveAspectRatio="none">
            <circle cx="80" cy="50" r="40" opacity="0.3" />
            <circle cx="20" cy="20" r="20" opacity="0.2" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column - 55% */}
          <div className="w-full lg:w-[55%]">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Programs', href: '/programs' },
                { label: 'Foundation' }
              ]} 
            />
            <div className="mt-8">
              <span className="inline-block bg-[#22C55E] text-[var(--navy)] px-4 py-1.5 rounded-full font-display font-bold text-sm tracking-wider uppercase mb-6 shadow-lg shadow-[#22C55E]/20">
                Early Leadership
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                Pre-Nurture & <br />
                <span className="text-[#22C55E]">Career Foundation</span>
              </h1>
              <p className="text-lg md:text-xl font-body max-w-2xl text-gray-300 mb-8 leading-relaxed">
                Build a robust academic base early. Excel in school exams and prepare for NTSE, Olympiads, CA/CS, and future competitive exams like JEE & NEET.
              </p>
              
              {/* Achievement Strip */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/5 border border-[#22C55E]/30 px-4 py-2 rounded-full">
                  <Trophy className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-sm font-body font-semibold">NTSE Scholars</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-[#22C55E]/30 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-sm font-body font-semibold">Olympiad Medalists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-[#22C55E]/30 px-4 py-2 rounded-full">
                  <Code className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-sm font-body font-semibold">Digital Skills</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/apply" 
                  className="inline-flex justify-center items-center py-4 px-8 bg-[#22C55E] text-[var(--navy)] font-display font-bold rounded-full hover:bg-[#16a34a] transition-colors shadow-lg shadow-[#22C55E]/20"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#22C55E]/10 blur-3xl rounded-full pointer-events-none"></div>
              
              {/* Course 1 - EXCELLER */}
              <div className="relative z-30 bg-[var(--navy-mid)] border-l-4 border-[#22C55E] p-6 rounded-2xl shadow-2xl transform translate-y-0 transition-transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">EXCELLER</h3>
                  <span className="bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold px-2 py-1 rounded">Class 7th & 8th</span>
                </div>
                <p className="font-body text-sm text-gray-300">1 or 2-Year Fundamental Classroom Program</p>
              </div>

              {/* Course 2 - PRODIGY */}
              <div className="relative z-20 bg-[var(--navy-mid)] border-l-4 border-[#22C55E] p-6 rounded-2xl shadow-2xl transform -translate-y-4 scale-[0.95] opacity-90 transition-transform hover:-translate-y-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">PRODIGY</h3>
                  <span className="bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold px-2 py-1 rounded">Class 9th & 10th</span>
                </div>
                <p className="font-body text-sm text-gray-300">1-Year Foundation Classroom Program</p>
              </div>

              {/* Course 3 - COMPUTER & COMMERCE */}
              <div className="relative z-10 bg-[var(--navy-mid)] border-l-4 border-[#22C55E] p-6 rounded-2xl shadow-2xl transform -translate-y-8 scale-[0.90] opacity-80 transition-transform hover:-translate-y-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white">TECH & COMMERCE</h3>
                  <span className="bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold px-2 py-1 rounded">Class 9th - 12th</span>
                </div>
                <p className="font-body text-sm text-gray-300">Data Science, AI, Coding, CA/CS Foundation</p>
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
                Why start early with MIITJEE?
              </h2>
              <p className="text-gray-600 font-body mb-8 text-lg leading-relaxed">
                The formative years from Class 7 to 10 are crucial for developing cognitive skills and analytical thinking. Our foundation programme bridges the gap between school curriculum and competitive exam standards.
              </p>
              <ul className="space-y-5">
                {[
                  'Comprehensive coverage of school syllabus (CBSE/ICSE/State)',
                  'Special focus on Mental Ability and Logical Reasoning',
                  'Preparation for NTSE, Olympiads, and early exposure to JEE/NEET patterns',
                  'New Digital Skills: Python, Data Science, AI, and App Development'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#22C55E]/5 rounded-tr-full pointer-events-none"></div>
              
              <GraduationCap className="w-16 h-16 text-[#22C55E] mb-6" />
              <h3 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                Empowering <br/><span className="text-[#22C55E]">Young Minds</span>
              </h3>
              <p className="font-body text-white/80 text-lg tracking-widest uppercase mt-2">
                Nurturing Future Leaders
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
              What We Cover
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto text-lg">
              A holistic approach to learning that ensures success across multiple domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all card-hover">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#22C55E] mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Mathematics & Science</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Deep conceptual understanding of Physics, Chemistry, Biology, and Mathematics beyond school textbooks.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all card-hover">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#22C55E] mb-6">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Olympiads & NTSE</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Specialized training sessions targeting national and international level Olympiads and development of logical reasoning.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all card-hover">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#22C55E] mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--navy)] mb-4">Digital Skills</h3>
              <p className="text-gray-600 font-body leading-relaxed">
                Career-oriented computer courses covering Data Science, AI, Python, C++, and App Development.
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
              Our Programmes
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto">
              Choose the right trajectory for a strong foundation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* EXCELLER */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[#22C55E] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  CLASS 7TH & 8TH
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">EXCELLER</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  1 or 2-Year Fundamental Classroom Program for Board Exams & Olympiads
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> 380 Hours of Teaching
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> Periodic Monitoring
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> Higher Level Problem Solving
                </div>
              </div>

              <Link href="/apply?course=exceller" className="w-full text-center py-3 rounded-lg border border-[#22C55E] text-[#22C55E] font-bold hover:bg-[#22C55E] hover:text-[var(--navy)] transition-colors">
                Enquire About EXCELLER
              </Link>
            </div>

            {/* PRODIGY */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[#22C55E] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl relative transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22C55E] text-[var(--navy)] text-xs font-black px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
              <div className="mb-6 mt-2">
                <span className="inline-block px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  CLASS 9TH & 10TH
                </span>
                <h3 className="font-display font-black text-[36px] text-white leading-none mb-4">PRODIGY</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  1-Year Foundation Classroom Program for 10th Board, NTSE & Olympiads
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> JEE/NEET Base Building
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> 10th Board Preparation
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> Weekly Mock Tests
                </div>
              </div>

              <Link href="/apply?course=prodigy" className="w-full text-center py-3 rounded-lg bg-[#22C55E] text-[var(--navy)] font-bold hover:bg-[#16a34a] transition-colors">
                Enquire About PRODIGY
              </Link>
            </div>

            {/* COMPUTER & COMMERCE */}
            <div className="bg-[var(--navy-mid)] border-t-4 border-[#22C55E] rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  DIGITAL & COMMERCE
                </span>
                <h3 className="font-display font-black text-[30px] text-white leading-none mb-4">TECH / CA-CS</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed min-h-[60px]">
                  Computer Coding Classes (9th-12th) & Commerce Foundation for CA/CS/CMA (11th-12th)
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> Data Science & AI
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> App & Web Development
                </div>
                <div className="flex items-center text-sm font-body text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-2" /> Accountancy & Economics
                </div>
              </div>

              <Link href="/apply?course=tech_commerce" className="w-full text-center py-3 rounded-lg border border-[#22C55E] text-[#22C55E] font-bold hover:bg-[#22C55E] hover:text-[var(--navy)] transition-colors">
                Enquire Now
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
                Our expert faculty is dedicated to nurturing young minds and building a bulletproof academic foundation.
              </p>
              <a 
                href="tel:+918906000160" 
                className="inline-flex items-center justify-center py-4 px-8 bg-[#22C55E] text-[var(--navy)] font-display font-bold rounded-full hover:bg-[#16a34a] transition-colors w-fit shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" /> Call us at +91 89060 00160
              </a>
            </div>

            {/* Results Spotlight Card */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 flex flex-col justify-center items-center text-center">
              <h3 className="font-display font-black text-3xl text-[var(--navy)] mb-8">
                Foundation Spotlight
              </h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm relative">
                <div className="absolute -top-4 -right-4 bg-[#22C55E] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                {resultsList && resultsList.length > 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden relative mb-4 border-4 border-[#22C55E]">
                      {resultsList[0].photo_url ? (
                        <Image src={resultsList[0].photo_url} alt={resultsList[0].student_name} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Img</div>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-[var(--navy)] text-xl mb-1">{resultsList[0].student_name}</h4>
                    <p className="text-[#22C55E] font-black text-lg bg-[#22C55E]/10 px-4 py-1 rounded-full mb-2">
                      {resultsList[0].rank_score}
                    </p>
                    <p className="text-gray-500 font-body text-sm uppercase tracking-wide">
                      {resultsList[0].exam} {resultsList[0].year}
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
            Give your child the MIITJEE Advantage
          </h2>
          <p className="text-gray-300 font-body mb-10 text-xl">
            Admissions are open for Class 7 to 12 Foundation. Enroll now and set the right trajectory for success.
          </p>
          <Link 
            href="/apply" 
            className="inline-flex justify-center items-center py-5 px-12 bg-[#22C55E] text-[var(--navy)] font-display font-bold rounded-full hover:bg-[#16a34a] transition-colors text-xl shadow-2xl shadow-[#22C55E]/20"
          >
            Apply for Admission <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
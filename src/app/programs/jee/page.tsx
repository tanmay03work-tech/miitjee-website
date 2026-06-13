import { createClient } from '@/lib/supabase/server';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Target, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JEE Main & Advanced Coaching | MIITJEE',
  description: 'Comprehensive JEE preparation at MIITJEE. Learn from expert faculty, get regular mock tests, and join our successful alumni network.',
};

export default async function JEEPage() {
  const supabase = await createClient();

  // Fetch faculty teaching JEE subjects
  const { data: facultyList } = await supabase
    .from('faculty')
    .select('*')
    .or('subject.ilike.%jee%,subject.ilike.%physics%,subject.ilike.%math%,subject.ilike.%chem%')
    .eq('is_published', true)
    .limit(3);

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
      <section className="bg-[#23205D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs', href: '/programs' },
              { label: 'JEE' }
            ]} 
          />
          <div className="mt-8">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FEFD12] text-[#23205D] text-sm font-bold font-inter mb-6">
              Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              JEE Main + Advanced <br />
              <span className="text-[#FEFD12]">Programme</span>
            </h1>
            <p className="text-lg md:text-xl font-inter max-w-2xl text-gray-300 mb-10">
              Transform your engineering dreams into reality with our structured curriculum, expert guidance, and rigorous testing methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/apply" 
                className="inline-flex justify-center items-center py-4 px-8 bg-[#FEFD12] text-[#23205D] font-bold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#admission" 
                className="inline-flex justify-center items-center py-4 px-8 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Book Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-[#23205D] mb-6">
                Why Choose MIITJEE for JEE?
              </h2>
              <p className="text-gray-600 font-inter mb-6 text-lg">
                Our JEE programme is meticulously designed to build a strong foundation in Physics, Chemistry, and Mathematics. We focus on conceptual clarity and problem-solving speed, essential for cracking the toughest engineering entrance exams.
              </p>
              <ul className="space-y-4">
                {[
                  'Daily practice papers (DPP) aligned with current JEE patterns',
                  'Doubt resolution counters available post-classes',
                  'Regular All India Test Series (AITS) with performance analytics',
                  'Personal mentoring for academic and psychological support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 flex-shrink-0" />
                    <span className="font-inter text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-inter">JEE Classroom Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23205D] mb-4">
              Comprehensive Coverage
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto">
              Our curriculum is structured to cover both JEE Main and Advanced syllabus seamlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Physics</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Focus on mechanics, electromagnetism, and modern physics with emphasis on numerical problem solving and real-world applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Chemistry</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                In-depth coverage of Physical, Organic, and Inorganic chemistry. Special focus on NCERT and reaction mechanisms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Mathematics</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Rigorous training in calculus, algebra, and coordinate geometry. Development of logical thinking and analytical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Types */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-poppins font-bold text-[#23205D] mb-12 text-center">
            Batch Programmes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Regular Batch', desc: '1-2 year comprehensive programs for Class 11 & 12 students. Classes 4-5 days a week.', duration: '1/2 Years' },
              { title: 'Weekend Batch', desc: 'Intensive weekend classes for students balancing school prep. Focus on core concepts.', duration: '1/2 Years' },
              { title: 'Crash Course', desc: 'Fast-track revision and test-series before the final exam. Best for droppers.', duration: '3-6 Months' }
            ].map((batch, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[#1C1CA5] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#FEFD12] text-[#23205D] text-xs font-bold px-3 py-1 rounded-bl-lg font-inter">
                  {batch.duration}
                </div>
                <h3 className="text-xl font-poppins font-bold text-[#1C1CA5] mb-3">{batch.title}</h3>
                <p className="text-gray-600 font-inter text-sm">{batch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-[#23205D] mb-4">
                Learn from the Best
              </h2>
              <p className="text-gray-600 font-inter">Our expert JEE faculty from top IITs and NITs.</p>
            </div>
          </div>
          
          {facultyList && facultyList.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {facultyList.map((faculty) => (
                <div key={faculty.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="h-64 bg-gray-200 relative">
                    {faculty.photo_url ? (
                      <Image src={faculty.photo_url} alt={faculty.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-inter">No Image</div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-1">{faculty.name}</h3>
                    <p className="text-[#1C1CA5] font-inter text-sm font-semibold mb-2">{faculty.subject}</p>
                    <p className="text-gray-500 font-inter text-sm">{faculty.credential}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 font-inter bg-white rounded-2xl">
              Faculty details will be updated soon.
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-poppins font-bold text-[#23205D] mb-12 text-center">
            Our Recent JEE Achievers
          </h2>
          
          {resultsList && resultsList.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {resultsList.map((result) => (
                <div key={result.id} className="text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 overflow-hidden relative mb-4 border-4 border-transparent group-hover:border-[#FEFD12] transition-colors">
                    {result.photo_url ? (
                      <Image src={result.photo_url} alt={result.student_name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Img</div>
                    )}
                  </div>
                  <h4 className="font-poppins font-bold text-[#23205D] text-sm truncate">{result.student_name}</h4>
                  <p className="text-[#1C1CA5] font-bold font-inter text-xs">{result.rank_score}</p>
                  <p className="text-gray-500 text-xs font-inter mt-1">{result.year}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 font-inter bg-gray-50 rounded-2xl">
              Results will be updated soon.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="admission" className="bg-[#1C1CA5] py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to start your JEE Preparation?
          </h2>
          <p className="text-blue-100 font-inter mb-10 text-lg">
            Join the legacy of excellence and secure your seat in India's top engineering colleges.
          </p>
          <Link 
            href="/apply" 
            className="inline-flex justify-center items-center py-4 px-10 bg-[#FEFD12] text-[#23205D] font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg shadow-xl"
          >
            Apply for Admission <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createClient } from '@/lib/supabase/server';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, Beaker, FileText, ArrowRight, CheckCircle2, Download, Target } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEET Medical Coaching | MIITJEE',
  description: 'Top-tier NEET preparation at MIITJEE. Learn from expert faculty, download free mock papers, and join our successful medical alumni.',
};

export default async function NEETPage() {
  const supabase = await createClient();

  // Fetch faculty teaching NEET subjects
  const { data: facultyList } = await supabase
    .from('faculty')
    .select('*')
    .or('subject.ilike.%neet%,subject.ilike.%biology%,subject.ilike.%botany%,subject.ilike.%zoology%,subject.ilike.%physics%,subject.ilike.%chem%')
    .eq('is_published', true)
    .limit(3);

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
      <section className="bg-[#23205D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs', href: '/programs' },
              { label: 'NEET' }
            ]} 
          />
          <div className="mt-8">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FEFD12] text-[#23205D] text-sm font-bold font-inter mb-6">
              Medical Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              NEET Medical <br />
              <span className="text-[#FEFD12]">Programme</span>
            </h1>
            <p className="text-lg md:text-xl font-inter max-w-2xl text-gray-300 mb-10">
              Pursue your dream of becoming a doctor with our NCERT-focused curriculum and intensive test-series methodology.
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

      {/* Free Mock Papers Callout */}
      <section className="py-8 bg-[#FEFD12]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/50 p-6 rounded-2xl border border-yellow-300">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#23205D] mr-4 shadow-sm">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-[#23205D] text-lg">📄 Free NEET Mock Papers Available</h3>
                <p className="font-inter text-[#23205D]/80 text-sm">Download our latest mock tests to evaluate your preparation.</p>
              </div>
            </div>
            <Link 
              href="/test-series/neet" 
              className="inline-flex items-center py-3 px-6 bg-[#23205D] text-white font-bold rounded-lg hover:bg-[#1C1CA5] transition-colors whitespace-nowrap"
            >
              Download Now <Download className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-inter">NEET Classroom Image Placeholder</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-poppins font-bold text-[#23205D] mb-6">
                Why Choose MIITJEE for NEET?
              </h2>
              <p className="text-gray-600 font-inter mb-6 text-lg">
                Our NEET programme is highly specialized and purely aligned with the NCERT curriculum. We emphasize conceptual clarity in Biology and numerical prowess in Physics and Chemistry.
              </p>
              <ul className="space-y-4">
                {[
                  'Strict adherence to the latest NMC syllabus and NCERT textbooks',
                  'Extensive doubt clearing sessions and personalized attention',
                  'Regular full-syllabus mock tests to build exam stamina',
                  'Focus on speed and accuracy for the 720-marks challenge'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 flex-shrink-0" />
                    <span className="font-inter text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23205D] mb-4">
              Syllabus Highlights
            </h2>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto">
              Our curriculum provides balanced coverage across all three major subjects required for NEET.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Biology (Botany & Zoology)</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Line-by-line NCERT coverage. Focus on human physiology, genetics, plant physiology, and diagram-based questions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <Beaker size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Chemistry</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Balanced approach to Physical, Organic, and Inorganic chemistry. Mastery over reaction mechanisms and chemical equations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1C1CA5] mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#23205D] mb-4">Physics</h3>
              <p className="text-gray-600 font-inter text-sm leading-relaxed">
                Tailored for medical aspirants. Focus on formula application, mechanics, electromagnetism, and optics.
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
              { title: 'Regular Batch', desc: 'Comprehensive 1-2 year programs for Class 11 & 12 students. Regular school integration.', duration: '1/2 Years' },
              { title: 'Dropper Batch', desc: 'Intensive 1-year program tailored for repeaters aiming to significantly boost their score.', duration: '1 Year' },
              { title: 'Crash Course', desc: 'Fast-track revision and test-series before the final NEET exam to refine time management.', duration: '3-6 Months' }
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
              <p className="text-gray-600 font-inter">Our expert NEET faculty with years of proven success.</p>
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
            Our Recent NEET Achievers
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
            Ready to start your Medical Journey?
          </h2>
          <p className="text-blue-100 font-inter mb-10 text-lg">
            Secure your seat at MIITJEE and take the first step towards a successful career in medicine.
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
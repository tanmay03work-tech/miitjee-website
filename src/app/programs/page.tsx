'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { BookOpen, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'jee',
    title: 'JEE Main + Advanced',
    description: 'Comprehensive preparation for engineering entrance exams with focus on problem-solving and conceptual clarity.',
    icon: BookOpen,
    href: '/programs/jee',
    features: [
      'Extensive Coverage of Physics, Chemistry & Maths',
      'Regular Mock Tests & Analysis',
      'Personalized Doubt Clearing Sessions',
    ],
  },
  {
    id: 'neet',
    title: 'NEET Medical',
    description: 'Specialized coaching for medical aspirants with intensive focus on Biology, Physics, and Chemistry.',
    icon: Stethoscope,
    href: '/programs/neet',
    features: [
      'NCERT-focused Curriculum',
      'Weekly Practice Tests (AITS)',
      'Expert Faculty Support',
    ],
  },
  {
    id: 'foundation',
    title: 'Foundation (Class 6-10)',
    description: 'Early preparation for NTSE, Olympiads, and building a strong base for future JEE/NEET endeavors.',
    icon: GraduationCap,
    href: '/programs/foundation',
    features: [
      'Strong Conceptual Base',
      'Preparation for School & Competitive Exams',
      'Mental Ability & Logical Reasoning Focus',
    ],
  },
];

export default function ProgramsOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1C1CA5] text-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs' }
            ]} 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our Academic <span className="text-[#FEFD12]">Programmes</span>
            </h1>
            <p className="text-lg md:text-xl font-inter max-w-2xl text-blue-100">
              Discover our structured and comprehensive courses designed to help you achieve top ranks in competitive examinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8 flex-grow">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#1C1CA5]">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-2xl font-poppins font-bold text-[#23205D] mb-4">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 font-inter mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1CA5] mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm font-inter text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                    <Link 
                      href={program.href}
                      className="flex items-center justify-center w-full py-3 px-4 bg-white border border-[#1C1CA5] text-[#1C1CA5] font-semibold rounded-lg hover:bg-[#1C1CA5] hover:text-white transition-colors duration-300 group"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
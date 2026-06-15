'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { BookOpen, Stethoscope, GraduationCap, ArrowRight, BookMarked, Layers } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const programs = [
  {
    id: 'elevator',
    title: 'Elevator',
    subtitle: 'JEE Main + Advanced',
    description: '2 year integrated classroom program for 11th + 12th Board cum JEE Main + JEE Advanced.',
    icon: Layers,
    href: '/programs/jee',
    color: 'text-brand-blue-deep',
    bg: 'bg-brand-blue-deep/10'
  },
  {
    id: 'navigator',
    title: 'Navigator',
    subtitle: 'JEE Main + Advanced',
    description: '1 year extensive classroom program for JEE Main + JEE Advanced.',
    icon: BookOpen,
    href: '/programs/jee',
    color: 'text-brand-blue-deep',
    bg: 'bg-brand-blue-deep/10'
  },
  {
    id: 'propeller',
    title: 'Propeller',
    subtitle: 'JEE Main + Advanced',
    description: '1 year intensive classroom program for 12th Board cum JEE Main + JEE Advanced.',
    icon: BookMarked,
    href: '/programs/jee',
    color: 'text-brand-blue-deep',
    bg: 'bg-brand-blue-deep/10'
  },
  {
    id: 'pmt-genesis',
    title: 'PMT Genesis',
    subtitle: 'NEET',
    description: '2 year integrated classroom program for 11th + 12th Board cum NEET.',
    icon: Stethoscope,
    href: '/programs/neet',
    color: 'text-rose-600',
    bg: 'bg-rose-100'
  },
  {
    id: 'pmt-synchronizer',
    title: 'PMT Synchronizer',
    subtitle: 'NEET',
    description: '1 year intensive classroom program for 12th Board cum NEET.',
    icon: Stethoscope,
    href: '/programs/neet',
    color: 'text-rose-600',
    bg: 'bg-rose-100'
  },
  {
    id: 'pmt-booster',
    title: 'PMT Booster',
    subtitle: 'NEET',
    description: '1 year extensive classroom program for NEET.',
    icon: Stethoscope,
    href: '/programs/neet',
    color: 'text-rose-600',
    bg: 'bg-rose-100'
  },
  {
    id: 'prodigy',
    title: 'PRODIGY',
    subtitle: 'Foundation (9th & 10th)',
    description: 'Foundation classroom program for 9th and 10th Board Exams (CBSE, ICSE, JAC).',
    icon: GraduationCap,
    href: '/programs/foundation',
    color: 'text-brand-yellow-bright',
    bg: 'bg-brand-yellow-bright/20'
  },
  {
    id: 'exceller',
    title: 'Exceller',
    subtitle: 'Foundation (7th & 8th)',
    description: 'Fundamental classroom program for class 7th and 8th Board Exams (CBSE, ICSE, JAC).',
    icon: GraduationCap,
    href: '/programs/foundation',
    color: 'text-brand-yellow-bright',
    bg: 'bg-brand-yellow-bright/20'
  }
];

export default function ProgramsOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <PageHero
        title="Our Academic"
        highlight="Programmes"
        description="Discover our structured and comprehensive courses designed to help you achieve top ranks in competitive examinations."
      >
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Programs' }
          ]} 
        />
      </PageHero>

      {/* Programs Grid */}
      <section className="pt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col group relative"
                >
                  <div className="p-8 flex-grow">
                    <div className={`w-14 h-14 ${program.bg} rounded-2xl flex items-center justify-center mb-6 ${program.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <div className="mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${program.color}`}>
                        {program.subtitle}
                      </span>
                    </div>
                    <h2 className="text-2xl font-poppins font-bold text-brand-blue-dark mb-4">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                    <Link 
                      href={program.href}
                      className="flex items-center justify-center w-full py-3 px-4 bg-white border border-brand-blue-deep text-brand-blue-deep font-bold rounded-xl hover:bg-brand-blue-deep hover:text-white transition-colors duration-300 group/btn"
                    >
                      View Details 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
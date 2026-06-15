"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TestSeriesCTA() {
  const benefits = [
    "Latest NTA exam pattern",
    "Detailed video solutions",
    "All India Rank prediction",
    "NCERT-aligned questions",
  ];

  return (
    <section className="py-20 bg-[#EEF0FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#1C1CA5] rounded-full text-sm font-bold font-sans mb-6">
              <span>🩺</span> FREE for ReNEET Aspirants
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] leading-tight mb-6">
              5 NEET Mock Test Papers by MIITJEE Faculty — <span className="text-[#1C1CA5]">Absolutely Free</span>
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-sans text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <Link 
              href="/test-series/neet" 
              className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 bg-[#FEFD12] hover:bg-[#E5E410] text-[#23205D] font-heading font-bold rounded-full transition-all group text-lg shadow-md shadow-[#FEFD12]/15 hover:shadow-lg hover:shadow-[#FEFD12]/25 hover:scale-[1.02]"
            >
              Download Free Papers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Paper 3 */}
              <motion.div 
                initial={{ rotate: 0, x: 0, y: 0 }}
                whileInView={{ rotate: 12, x: 40, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 bg-white rounded-xl shadow-xl border border-gray-100 p-6 flex flex-col justify-between origin-bottom-right"
              >
                <div>
                  <div className="text-sm font-bold text-gray-400 mb-1">MIITJEE Test Series</div>
                  <div className="text-xl font-heading font-bold text-gray-300">Mock Paper 3</div>
                </div>
                <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-100"></div>
              </motion.div>

              {/* Paper 2 */}
              <motion.div 
                initial={{ rotate: 0, x: 0, y: 0 }}
                whileInView={{ rotate: 6, x: 20, y: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-white rounded-xl shadow-xl border border-gray-200 p-6 flex flex-col justify-between origin-bottom-right"
              >
                <div>
                  <div className="text-sm font-bold text-gray-400 mb-1">MIITJEE Test Series</div>
                  <div className="text-xl font-heading font-bold text-gray-400">Mock Paper 2</div>
                </div>
                <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200"></div>
              </motion.div>

              {/* Paper 1 (Top) */}
              <motion.div 
                className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-8 flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[#1C1CA5] font-bold text-sm mb-1 uppercase tracking-wider">MIITJEE Test Series</div>
                    <div className="text-2xl font-heading font-bold text-[#23205D]">Mock Paper 1</div>
                  </div>
                  <div className="bg-[#FEFD12]/20 text-[#23205D] px-3 py-1 rounded text-xs font-bold">
                    NEET
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-sans text-gray-500">
                  <span>200 Questions</span>
                  <span>720 Marks</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
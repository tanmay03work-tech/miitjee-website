"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export default function ManthanTeaser() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#23205D] to-[#1C1CA5] text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FEFD12]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold font-sans mb-8 text-[#FEFD12]"
        >
          <Trophy className="w-4 h-4" /> MIITJEE MANTHAN — Coming Soon
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
        >
          Jharkhand&apos;s Biggest <br />
          <span className="text-[#FEFD12]">Scholarship Exam</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-lg md:text-xl font-sans text-blue-100 mb-10"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEFD12]" /> Win up to 100% Scholarship
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEFD12]" /> Class 7–12
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEFD12]" /> Free Registration
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            href="/scholarship" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#23205D] font-heading font-bold rounded-full transition-colors group text-lg shadow-xl"
          >
            Register Interest
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
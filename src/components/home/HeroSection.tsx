"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1C1CA5] overflow-hidden px-6 py-20">
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6"
        >
          <span className="whitespace-nowrap">Eastern India&apos;s Most Trusted</span> <br className="hidden md:block" />
          <span className="text-[#FEFD12]">JEE · NEET · Foundation</span> Institute
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-blue-100 font-sans mb-10 max-w-2xl mx-auto"
        >
          Expert IITian faculty, proven results, and personalised mentoring. 
          <br className="hidden sm:block" />
          <span className="font-semibold text-white mt-2 inline-block">Free NEET Mock Test Papers available now →</span>
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <Link 
            href="#admission" 
            className="w-full sm:w-auto px-8 py-4 bg-[#FEFD12] hover:bg-[#E5E410] text-[#23205D] font-heading font-bold rounded-full transition-colors flex items-center justify-center gap-2 group"
          >
            Book Free Counselling
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link 
            href="/test-series/neet" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
          >
            Free NEET Mock Papers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Tertiary CTA - Disabled */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/20 border border-white/10 text-white/60 font-sans text-sm cursor-not-allowed"
        >
          <span>MANTHAN</span>
          <span className="px-2 py-0.5 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Coming Soon
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
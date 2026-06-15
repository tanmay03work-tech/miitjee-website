"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stats = [
    { value: "15+", label: "Years" },
    { value: "10,000+", label: "Students" },
    { value: "500+", label: "IIT Selections" },
    { value: "300+", label: "NEET Selections" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-[#0a0a3e] via-[#1C1CA5] to-[#23205D] overflow-hidden px-6 py-20">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#FEFD12]/6 blur-[80px] pointer-events-none"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#1C1CA5]/20 blur-[100px] pointer-events-none"
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-[200px] h-[200px] rounded-full bg-[#FEFD12]/4 blur-[60px] pointer-events-none"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 pointer-events-none" />

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
          className="text-lg md:text-xl text-blue-100/90 font-sans mb-10 max-w-2xl mx-auto"
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
            className="shimmer-btn w-full sm:w-auto px-8 py-4 bg-[#FEFD12] hover:bg-[#E5E410] text-[#23205D] font-heading font-bold rounded-full transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FEFD12]/20"
          >
            Book Free Counselling
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link 
            href="/test-series/neet" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-heading font-semibold rounded-full transition-all flex items-center justify-center gap-2"
          >
            Free NEET Mock Papers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Tertiary CTA - Disabled */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/50 font-sans text-sm cursor-not-allowed backdrop-blur-sm"
        >
          <span>MANTHAN</span>
          <span className="px-2 py-0.5 bg-white/15 text-white/70 text-xs font-bold rounded-full uppercase tracking-wider">
            Coming Soon
          </span>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={itemVariants}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
            >
              <div className="text-xl md:text-2xl font-bold font-heading text-[#FEFD12]">
                {stat.value}
              </div>
              <div className="text-xs text-blue-100/60 font-sans mt-0.5 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
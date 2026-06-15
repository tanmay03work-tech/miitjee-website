"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FORMULAE = [
  "TEAM OF NATIONAL FAMED EXPERIENCED FACULTIES FROM IIT & NIT ONLY",
  "EXHAUSTIVE STUDY PACKAGE",
  "SMALL BATCH SIZE (35/40 STUDENTS) FOR PERSONALISED CARE OF EACH & EVERY STUDENT",
  "ONLINE COMPUTER BASED TESTS",
  "LIBRARY AND LAB FACILITIES",
  "BALANCE PREPARATION BETWEEN BOARD & IIT OR MEDICAL PREPARATION",
  "AFFORDABLE FEE STRUCTURE AND SCHOLARSHIP SCHEMES SPECIALLY DESIGNED TO PROVIDE QUALITY EDUCATION TO STUDENTS FROM ALL BACKGROUNDS",
  "COMPREHENSIVE CLASSROOM PROGRAMS",
  "DAILY ATTENDANCE & TEST REPORT THROUGH SMS",
  "AC FURNISHED CLASSROOMS TO PROVIDE CONGENIAL ATMOSPHERE",
  "REGULAR SIMULATED TESTS ON ACTUAL FORMAT OF JEE-MAIN+ ADVANCED & NEET",
  "DAILY DOUBT ELIMINATION SESSIONS BY OUR HOD'S",
  "CCTV SURVIELLANCE FOR STUDENT'S SAFETY AND TO PRECISELY MONITOR TEACHING PROCEEDINGS AND DISCIPLINE IN CLASSROOMS",
  "REGULAR PARENTS-TEACHER MEETING",
  "BACK UP CLASSES FOR ABSENTEES",
  "SELF STUDY CLASSROOMS UNDER EXPERTISE SUPERVISION",
  "TRANSPORTATION FACILITY",
  "SEPERATE HOSTEL FOR GIRLS AND BOYS",
  "HYGIENIC MESS FACILITY",
  "RANKERS TEST SERIES FOR POWERFUL ASSESSMENT",
  "REGULAR MOTIVATIONAL AND PERSONALITY ENHANCEMENT SESSIONS",
  "WHATSAPP GROUP FOR 24*7 IMPORTANT QUESTIONNAIRE & PROBLEM SOLVING",
  "SYSTEMATIC SCHEDULING OF CLASSES & WEEKLY TESTS WITH DETAILED ANALYSIS"
];

const INFOGRAPHIC_POINTS = [
  "Online Computer Based Test",
  "Only IITian Faculties",
  "Hostel / Transportation facility",
  "6 Hours lecture per day",
  "Best Study Material",
  "Class Rooms for Self Study",
  "Daily Doubt Elimination Sessions",
  "Library Facility",
  "Small Batch (only 40 students / batch)"
];

export default function WinningFormulae() {
  return (
    <section className="bg-[var(--navy)] py-24 relative overflow-hidden">
      {/* Decorative Glows for Glassmorphism */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 
            className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MIITJEE Winning Formulae
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-24">
          
          {/* Top - Infographic representation (MOVED UP) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center justify-center min-h-[600px] w-full max-w-5xl mx-auto"
          >
            {/* Center Node */}
            <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] shadow-[0_0_40px_rgba(255,214,0,0.4)] flex items-center justify-center border-4 border-white mb-12 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              <span className="text-[var(--navy)] font-black text-center leading-tight text-xl tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                WHY<br/>MIITJEE
              </span>
            </div>

            {/* Mobile List View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:hidden">
              {INFOGRAPHIC_POINTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] shrink-0" />
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Desktop Radial Layout */}
            <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
              {INFOGRAPHIC_POINTS.map((item, idx) => {
                const angle = (idx / INFOGRAPHIC_POINTS.length) * Math.PI * 2 - Math.PI / 2;
                const rx = 280; 
                const ry = 220; 
                const x = `calc(50% + ${Math.cos(angle) * rx}px)`;
                const y = `calc(50% + ${Math.sin(angle) * ry}px)`;
                
                return (
                  <div 
                    key={idx}
                    className="absolute w-44 text-center transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                    style={{ left: x, top: y }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--navy-mid)] shadow-lg border-2 border-[var(--gold)] flex items-center justify-center z-10 text-[var(--gold)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white bg-[var(--navy-mid)]/90 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-xl">{item}</span>
                  </div>
                );
              })}
              
              {/* Connecting SVG Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ zIndex: 0 }}>
                {INFOGRAPHIC_POINTS.map((_, idx) => {
                  const angle = (idx / INFOGRAPHIC_POINTS.length) * Math.PI * 2 - Math.PI / 2;
                  const rx = 280;
                  const ry = 220;
                  const cx = 50; 
                  const cy = 50; 
                  return (
                    <line 
                      key={idx}
                      x1={`${cx}%`} 
                      y1={`${cy}%`} 
                      x2={`calc(50% + ${Math.cos(angle) * rx}px)`} 
                      y2={`calc(50% + ${Math.sin(angle) * ry}px)`} 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>

          </motion.div>

          {/* Bottom - The 23 Points (MOVED DOWN) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FORMULAE.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] font-bold text-sm shrink-0 border border-[var(--gold)]/30">
                  {index + 1}
                </div>
                <p className="text-[13px] font-medium text-gray-200 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

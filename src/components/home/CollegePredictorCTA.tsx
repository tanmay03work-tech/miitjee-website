"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, GraduationCap, ShieldAlert } from "lucide-react";

export default function CollegePredictorCTA() {
  const features = [
    "Precise predictor based on actual JEE & NEET cutoffs",
    "Separate algorithms for State Quota and All India Quota (AIQ)",
    "Exclusive partnership with India's top counselling portals",
    "Detailed analytics on category ranks, state seats, and branches",
  ];

  const collegeList = [
    { name: "RIMS, Ranchi", match: "99% Match", type: "Safe", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
    { name: "MAMC, New Delhi", match: "95% Match", type: "Very High", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
    { name: "AIIMS, Patna", match: "88% Match", type: "Target", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  ];

  return (
    <section className="py-24 bg-[#EEF0FF] relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255, 214, 0, 0.15) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[130px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30, 58, 95, 0.2) 0%, transparent 70%)", transform: "translate(30%, 30%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 text-[#1C1CA5] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 animate-pulse" />
              India's Most Advanced Predictor
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] leading-tight mb-6">
              MIITJEE College Predictor <br/>
              <span className="text-[#1C1CA5]">for NEET & JEE 2026</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We have developed our own, highly accurate college prediction system based on actual student data, cutoffs, and counseling trends. This state-of-the-art software is available <strong className="text-[#23205D]">exclusively with the top coaching institutes in India</strong>.
            </p>
            
            <ul className="space-y-4 mb-10 w-full">
              {features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-700 font-sans text-base md:text-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://miitjee.counselling.tips/neet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFD600] hover:bg-[#E5C100] text-[#0A1628] font-heading font-black rounded-full transition-all group text-lg shadow-lg shadow-yellow-400/15 hover:shadow-xl hover:shadow-yellow-400/25 hover:scale-[1.02]"
              >
                Predict Your College Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual: Mock Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative flex items-center justify-center"
          >
            {/* Main Mockup Card */}
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
              {/* Card top bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono tracking-wider">MIITJEE PREDICTOR v2.6</div>
              </div>

              {/* Title inside card */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#23205D] font-bold font-heading">NEET & JEE Seat Estimator</h4>
                  <p className="text-xs text-gray-500">All India & State Counseling Database</p>
                </div>
              </div>

              {/* Form Input Mockups */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">NEET 2026 Score</label>
                  <div className="w-full bg-[#EEF0FF] border border-blue-100 rounded-lg px-4 py-3 text-[#23205D] font-bold font-sans flex justify-between items-center">
                    <span>685</span>
                    <span className="text-[#1C1CA5] text-xs">Percentile: ~99.3%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 font-medium font-sans text-sm">
                      OBC-NCL
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Home State</label>
                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-800 font-medium font-sans text-sm">
                      Jharkhand
                    </div>
                  </div>
                </div>
              </div>

              {/* Predicted Output */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Predicted Top Matches</span>
                  <span className="text-xs text-[#1C1CA5] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1CA5] animate-ping"></span> Live Calculation
                  </span>
                </div>

                {/* College Cards */}
                <div className="space-y-3">
                  {collegeList.map((college, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                      className={`flex items-center justify-between p-3 rounded-lg border ${college.border} bg-[#F8FAFC]`}
                    >
                      <div>
                        <div className="text-gray-900 font-bold font-sans text-sm">{college.name}</div>
                        <div className="text-[10px] text-gray-500">MBBS Programme · State Quota</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold text-xs ${college.color}`}>{college.match}</div>
                        <div className={`inline-block text-[9px] font-semibold px-2 py-0.5 rounded ${college.bg} ${college.color} mt-1`}>
                          {college.type}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Verified with 2024 & 2025 Cutoff Sheets</span>
              </div>
            </div>

            {/* Accent Glowing Aura under mockup */}
            <div className="absolute inset-0 bg-[#1C1CA5]/5 filter blur-3xl rounded-full -z-10 scale-75"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

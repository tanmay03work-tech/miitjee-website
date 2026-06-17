"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const HALL_OF_FAME = [
  {
    name: "Vishnu",
    achievement: "Top Scorer",
    exam: "JEE Advanced",
    image: "/hall-of-fame/vishnu.png",
    bgClass: "bg-[var(--gold)]"
  },
  {
    name: "Fauzia",
    achievement: "City Topper",
    exam: "NEET",
    image: "/hall-of-fame/fauzia-sultam.png",
    bgClass: "bg-[var(--gold)]"
  },
  {
    name: "Ansh",
    achievement: "Top Ranker",
    exam: "JEE Main",
    image: "/hall-of-fame/ansh-jain.jpeg",
    bgClass: "bg-[var(--gold)]"
  },
];

export function HallOfFameStrip() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[var(--navy)] font-display font-bold mb-6"
            >
              <Trophy className="w-5 h-5 text-[var(--gold)]" />
              <span className="tracking-wide uppercase text-xs md:text-sm">MIITJEE Hall of Fame</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black text-[var(--navy)] mb-4 leading-tight"
            >
              Our Pride <span className="text-[var(--gold)]">&</span> Glory
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 font-body text-lg max-w-md"
            >
              Celebrating the outstanding achievements of our top performers who have set new benchmarks of success.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {HALL_OF_FAME.map((student, idx) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300 ${student.bgClass}`}>
                  <Image 
                    src={student.image} 
                    alt={student.name} 
                    fill 
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 border-2 border-[var(--gold)] rounded-full z-10" />
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--navy)]">
                  {student.name}
                </h3>
                <span className="text-xs font-bold text-white bg-[var(--navy)] px-2 py-0.5 rounded-full mt-1 mb-1">
                  {student.exam}
                </span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {student.achievement}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex-shrink-0 mt-6 lg:mt-0 flex-1 flex justify-center lg:justify-end">
            <Link 
              href="/results" 
              className="inline-flex items-center justify-center py-4 px-8 bg-[var(--gold)] text-[var(--navy)] font-display font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
            >
              View Results <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Atom, Lightbulb } from "lucide-react";

export default function ProgramsOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const programs = [
    {
      title: "JEE Main + Advanced",
      description: "Rigorous preparation for top engineering colleges. Includes comprehensive study material, regular testing, and personalised doubt clearing.",
      icon: Atom,
      href: "/programmes/jee",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "NEET / AIIMS",
      description: "Expert guidance by specialized faculty to help you score 650+ in NEET. Biology-focused curriculum with equal emphasis on Physics and Chemistry.",
      icon: BookOpen,
      href: "/programmes/neet",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Foundation (Cl. 6–10)",
      description: "Building strong fundamentals early. Prepares students for NTSE, Olympiads, and lays the groundwork for future JEE/NEET success.",
      icon: Lightbulb,
      href: "/programmes/foundation",
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4"
          >
            Our Programmes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-sans"
          >
            Comprehensive classroom programmes designed to bring out the best in every student.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#1C1CA5] transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-xl ${prog.bg} flex items-center justify-center mb-6`}>
                <prog.icon className={`w-7 h-7 ${prog.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-[#23205D] mb-4 group-hover:text-[#1C1CA5] transition-colors">
                {prog.title}
              </h3>
              
              <p className="text-gray-600 font-sans mb-8 flex-1 leading-relaxed">
                {prog.description}
              </p>
              
              <Link 
                href={prog.href}
                className="inline-flex items-center gap-2 text-[#1C1CA5] font-bold font-heading group-hover:gap-3 transition-all"
              >
                Explore Programme <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
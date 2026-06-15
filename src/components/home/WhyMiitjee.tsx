"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users, MessageCircleQuestion, BookOpen, MapPin } from "lucide-react";

export default function WhyMiitjee() {
  const features = [
    {
      title: "Expert Faculty",
      description: "Learn directly from IITians and experienced educators who know what it takes to crack the exams.",
      icon: GraduationCap,
    },
    {
      title: "Proven Results",
      description: "A legacy of producing top ranks in JEE and NEET year after year from Jharkhand.",
      icon: Trophy,
    },
    {
      title: "Small Batches",
      description: "Personalised attention to every student ensures no one is left behind.",
      icon: Users,
    },
    {
      title: "Doubt Sessions",
      description: "Regular 1-on-1 doubt clearing sessions to strengthen core concepts.",
      icon: MessageCircleQuestion,
    },
    {
      title: "Study Material",
      description: "Comprehensive, scientifically designed study modules aligned with latest patterns.",
      icon: BookOpen,
    },
    {
      title: "Multiple Branches",
      description: "Conveniently located centres across Jamshedpur, Bokaro, and Dhanbad.",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative py-24 bg-[#23205D] text-white overflow-hidden">
      {/* Background depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1C1CA5]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FEFD12]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Why Students Choose MIITJEE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100/80 font-sans text-lg max-w-2xl mx-auto"
          >
            We don&apos;t just teach; we mentor. Our ecosystem is built entirely around student success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FEFD12]/30 hover:shadow-lg hover:shadow-[#FEFD12]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#FEFD12]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feat.icon className="w-6 h-6 text-[#FEFD12]" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">
                {feat.title}
              </h3>
              <p className="text-blue-100/70 font-sans leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
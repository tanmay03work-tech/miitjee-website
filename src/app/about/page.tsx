import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target } from "lucide-react";
import StatsCounter from "@/components/about/StatsCounter";
import PageHero from "@/components/ui/PageHero";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
  description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
  openGraph: {
    title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
    description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
    type: "website",
    url: "https://miitjee.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIITJEE Classes",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About"
        highlight="MIITJEE Classes"
        description="Empowering students to achieve their dreams since 2008. We are more than an institute; we are a family dedicated to excellence."
      />

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow-bright/20 text-brand-blue-deep font-bold text-sm mb-6">
                <span className="text-xl">🏆</span> 26 Years of Excellence
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark font-poppins mb-6 leading-tight">
                Winner of Jharkhand's No.1 <br/> Educational Institute Award
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="font-medium text-xl text-brand-blue-dark/80">
                  MIITJEE today epitomizes a trail blazing story of inspiration and success of thousands of students over a span of 26 years, in Eastern india...
                </p>
                <p>
                  Scaling new heights of achievements, creating new landmarks, reaching new milestones and setting new benchmarks for others has now become a recurrent process with the Institute and its students...
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-brand-blue-deep/60 to-transparent z-10 flex flex-col justify-end p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2 font-poppins">Thank You For Your</h3>
                <h4 className="text-4xl font-black text-brand-yellow-bright mb-6 drop-shadow-lg">26 Years of Trust</h4>
                
                <div className="mt-auto pt-8 border-t border-white/20">
                  <p className="text-white font-bold text-xl">Late Shailesh Verma</p>
                  <p className="text-brand-yellow-bright font-medium">Founder-Director</p>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
                alt="Late Shailesh Verma - Founder Director"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center card-hover"
            >
              <div className="w-16 h-16 bg-miitjee-yellow/20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <Target className="w-8 h-8 text-miitjee-navy" />
              </div>
              <h3 className="text-2xl font-bold text-miitjee-navy font-poppins mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide unparalleled educational support, equipping students with the knowledge, analytical skills, and confidence required to excel in competitive exams and their future endeavors.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center card-hover"
            >
              <div className="w-16 h-16 bg-miitjee-yellow/20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                <BookOpen className="w-8 h-8 text-miitjee-navy" />
              </div>
              <h3 className="text-2xl font-bold text-miitjee-navy font-poppins mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the foremost institution for science education in Eastern India, recognized for producing ethical, capable, and visionary professionals who contribute meaningfully to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-miitjee-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the legacy of excellence and take the first step towards a brilliant career in engineering or medicine.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="shimmer-btn inline-flex items-center gap-2 px-8 py-4 bg-miitjee-yellow hover:bg-yellow-400 text-miitjee-navy font-heading font-bold rounded-full transition-all group text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02]">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
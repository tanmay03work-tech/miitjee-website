"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Database } from "@/types/database.types";

type TestimonialRow = Database["public"]["Tables"]["testimonials"]["Row"];

interface TestimonialsSectionProps {
  testimonials: TestimonialRow[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  // Clone testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4"
        >
          Student Stories
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 font-sans"
        >
          Hear from the students who achieved their dreams with MIITJEE.
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden group">
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] sm:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'text-[#FEFD12] fill-[#FEFD12]' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="flex-1 text-gray-700 italic font-sans mb-8 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  {testimonial.photo_url ? (
                    <Image 
                      src={testimonial.photo_url} 
                      alt={testimonial.student_name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1C1CA5]/10 flex items-center justify-center text-[#1C1CA5] font-bold font-heading">
                      {testimonial.student_name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-bold font-heading text-[#23205D]">
                    {testimonial.student_name}
                  </div>
                  <div className="text-sm text-gray-500 font-sans">
                    {testimonial.programme} {testimonial.year && `(${testimonial.year})`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
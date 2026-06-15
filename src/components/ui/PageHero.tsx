"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a3e] via-[#1C1CA5] to-[#23205D] text-white pt-28 pb-20 overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-[-60px] right-[-40px] w-72 h-72 bg-[#FEFD12]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-60px] w-80 h-80 bg-[#1C1CA5]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional breadcrumb / children slot */}
        {children && <div className="mb-6">{children}</div>}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-5 leading-tight"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-[#FEFD12]">{highlight}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom gradient fade for smooth transition into content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}

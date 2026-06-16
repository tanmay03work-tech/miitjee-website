'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ResultImage {
  id: string
  photo_url: string
  title: string | null
}

interface FeaturedResultsProps {
  results: ResultImage[]
}

export function FeaturedResultsSection({ results }: FeaturedResultsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  if (!results || results.length === 0) return null

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350 + 24 // Card width approx + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="pt-16 pb-20 bg-white overflow-hidden font-poppins relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-[#23205D] mb-4 flex items-center justify-center gap-3 tracking-tight"
          >
            Featured 
            <span className="text-[#1C1CA5]">
              Results 2026
            </span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-[#FFD600] mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 font-sans mb-6"
          >
            Celebrating the exceptional achievements of our students.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/results"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFD600] text-[#23205D] font-bold rounded-full hover:bg-[#E6C200] hover:-translate-y-1 transition-all shadow-md mt-2"
            >
              View All Results
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-8"
        >
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-20 bg-white p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#23205D] hover:text-[#1C1CA5] hover:scale-110 transition-all border border-gray-100 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {results.map((result) => (
              <div 
                key={result.id} 
                className="snap-center flex-none w-[300px] md:w-[350px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-1 w-full bg-[#FFD600]"></div>
                
                <div className="relative w-full aspect-[4/5] bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.photo_url}
                    alt={result.title || "Featured Result"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-20 bg-white p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#23205D] hover:text-[#1C1CA5] hover:scale-110 transition-all border border-gray-100 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  )
}

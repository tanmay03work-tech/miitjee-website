'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Reel {
  id: string
  url: string
}

interface FeaturedReelsProps {
  reels: Reel[]
}

export function FeaturedReelsSection({ reels }: FeaturedReelsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  if (!reels || reels.length === 0) return null

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
    <section className="pt-4 pb-20 bg-[#F9FAFB] overflow-hidden font-poppins relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4 flex items-center justify-center gap-3"
          >
            Featured 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
              Reels
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
            className="text-lg text-gray-600 font-sans"
          >
            Watch our latest updates, tips, and campus life straight from our Instagram.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
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
            {reels.map((reel) => {
              let embedUrl = reel.url
              try {
                const urlObj = new URL(reel.url)
                urlObj.search = '' // Remove query parameters
                
                let pathname = urlObj.pathname
                if (!pathname.endsWith('/')) pathname += '/'
                if (!pathname.endsWith('embed/')) pathname += 'embed/'
                
                urlObj.pathname = pathname
                embedUrl = urlObj.toString()
              } catch (e) {
                console.error("Invalid URL:", reel.url)
              }

              return (
                <div 
                  key={reel.id} 
                  className="snap-center flex-none w-[300px] md:w-[350px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Decorative Instagram Gradient Top Border */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
                  
                  <div className="relative w-full h-[650px] bg-gray-50 flex items-center justify-center">
                    <iframe
                      src={embedUrl}
                      className="w-full h-full border-0"
                      scrolling="no"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                </div>
              )
            })}
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
      
      {/* Custom styles to hide scrollbar for webkit and firefox */}
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

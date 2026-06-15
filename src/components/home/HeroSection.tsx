"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative flex flex-col justify-center bg-[var(--navy)] overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "var(--hero-pad)",
        backgroundImage: `repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 40px,
          rgba(255,255,255,0.018) 40px,
          rgba(255,255,255,0.018) 41px
        )`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div 
            className="mb-6 inline-block"
            style={{
              background: 'rgba(255,214,0,0.12)',
              border: '1px solid rgba(255,214,0,0.3)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px'
            }}
          >
            EST. 2001 · JAMSHEDPUR · EASTERN INDIA
          </div>

          {/* Main headline */}
          <h1 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              lineHeight: 1.05,
              color: 'var(--white)'
            }}
          >
            Creating IITians<br />
            & Doctors<br />
            <span style={{color: 'var(--gold)'}}>Since 2001</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '18px',
              color: 'var(--text-muted)'
            }}
          >
            26 Years Legacy · Eastern India&apos;s Most Trusted JEE & NEET Institute
          </p>

          {/* Achievement Chips */}
          <div className="flex flex-wrap gap-[10px] mb-10">
            {[
              "🏆 JEE 2026 · 2nd Rank City Topper",
              "🩺 NEET 2025 · 1st Rank City Topper",
              "⭐ 26 Years Legacy"
            ].map((chip, i) => (
              <span 
                key={i}
                style={{
                  background: 'rgba(255,214,0,0.1)',
                  border: '1.5px solid var(--gold)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '13px',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 20px',
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/apply" 
              className="btn-primary w-full sm:w-auto"
              style={{
                boxShadow: '0 4px 24px rgba(255,214,0,0.3)',
                fontSize: '16px',
              }}
            >
              Book Free Counselling
            </Link>
            <Link 
              href="/results" 
              className="btn-secondary w-full sm:w-auto"
              style={{
                fontSize: '16px',
              }}
            >
              See All Results <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (Results Visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Card 3 (back) */}
          <div 
            style={{
              background: 'var(--navy-mid)',
              border: '1px solid var(--navy-light)',
              borderTop: '4px solid var(--gold)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              position: 'absolute',
              transform: 'rotate(5deg) translateX(40px)',
              zIndex: 1,
              width: '280px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
            className="hidden sm:block"
          >
            <div style={{color:'var(--gold)', fontSize:'11px', fontWeight:700, letterSpacing:'2px', fontFamily: 'var(--font-display)'}}>
              JEE MAIN 2026
            </div>
            <div style={{color:'var(--white)', fontSize:'28px', fontWeight:900, fontFamily:'var(--font-display)', marginTop:'8px', marginBottom:'4px'}}>
              67 Students
            </div>
            <div style={{color:'var(--text-muted)', fontSize:'14px', fontFamily:'var(--font-body)'}}>
              &gt;95 Percentile
            </div>
            <div style={{
              background:'var(--gold)', color:'var(--navy)', fontSize:'12px', fontWeight:800,
              padding:'4px 12px', borderRadius:'var(--radius-pill)', display:'inline-block', marginTop:'12px', fontFamily:'var(--font-display)'
            }}>MIITJEE STUDENT</div>
          </div>

          {/* Card 2 (middle) */}
          <div 
            style={{
              background: 'var(--navy-mid)',
              border: '1px solid var(--navy-light)',
              borderTop: '4px solid var(--gold)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              position: 'absolute',
              transform: 'rotate(-5deg) translateX(-40px)',
              zIndex: 2,
              width: '280px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
            className="hidden sm:block"
          >
            <div style={{color:'var(--gold)', fontSize:'11px', fontWeight:700, letterSpacing:'2px', fontFamily: 'var(--font-display)'}}>
              NEET 2025
            </div>
            <div style={{color:'var(--white)', fontSize:'28px', fontWeight:900, fontFamily:'var(--font-display)', marginTop:'8px', marginBottom:'4px'}}>
              1st Rank
            </div>
            <div style={{color:'var(--text-muted)', fontSize:'14px', fontFamily:'var(--font-body)'}}>
              City Topper · Jamshedpur
            </div>
            <div style={{
              background:'var(--gold)', color:'var(--navy)', fontSize:'12px', fontWeight:800,
              padding:'4px 12px', borderRadius:'var(--radius-pill)', display:'inline-block', marginTop:'12px', fontFamily:'var(--font-display)'
            }}>MIITJEE STUDENT</div>
          </div>

          {/* Card 1 (front) */}
          <div 
            style={{
              background: 'var(--navy-mid)',
              border: '1px solid var(--navy-light)',
              borderTop: '4px solid var(--gold)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              position: 'relative',
              zIndex: 3,
              width: '100%',
              maxWidth: '320px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{color:'var(--gold)', fontSize:'11px', fontWeight:700, letterSpacing:'2px', fontFamily: 'var(--font-display)'}}>
              JEE MAIN 2026
            </div>
            <div style={{color:'var(--white)', fontSize:'32px', fontWeight:900, fontFamily:'var(--font-display)', marginTop:'8px', marginBottom:'4px'}}>
              2nd Rank
            </div>
            <div style={{color:'var(--text-muted)', fontSize:'14px', fontFamily:'var(--font-body)'}}>
              City Topper · Jamshedpur
            </div>
            <div style={{
              background:'var(--gold)', color:'var(--navy)', fontSize:'12px', fontWeight:800,
              padding:'4px 12px', borderRadius:'var(--radius-pill)', display:'inline-block', marginTop:'12px', fontFamily:'var(--font-display)'
            }}>MIITJEE STUDENT</div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STRIP (Scrolling Marquee) */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          background: 'var(--gold)',
          overflow: 'hidden',
          padding: '12px 0',
        }}
      >
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <span 
              key={i}
              style={{
                color: 'var(--navy)', 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '14px', 
                marginRight: '60px'
              }}
            >
              JEE Main 2026 · 2nd Rank City Topper
              &nbsp;★&nbsp;
              NEET 2025 · 1st Rank City Topper
              &nbsp;★&nbsp;
              67 Students &gt;95 Percentile JEE 2026
              &nbsp;★&nbsp;
              77% NEET 2025 Success Rate
              &nbsp;★&nbsp;
              10,000+ Students · 26 Years · Jamshedpur
              &nbsp;★&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
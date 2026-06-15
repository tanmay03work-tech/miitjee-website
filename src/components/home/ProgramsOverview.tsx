"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Settings, Activity, BookOpen } from "lucide-react";

export default function ProgramsOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      style={{
        background: 'var(--navy)',
        padding: 'var(--section-pad)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            style={{
              color: 'var(--gold)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px'
            }}
          >
            OUR PROGRAMMES
          </div>
          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--white)',
            }}
          >
            Courses Built to Get You There
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {/* Card 1 — JEE */}
          <motion.div variants={cardVariants} className="group relative flex flex-col h-full">
            <Link href="/programmes/jee" className="flex flex-col h-full w-full" style={{textDecoration: 'none'}}>
              <div 
                className="flex flex-col h-full transition-all duration-300"
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid var(--navy-light)',
                  borderRadius: '16px',
                  padding: '32px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(255,214,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--navy-light)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <Settings style={{ color: 'var(--gold)', width: '32px', height: '32px' }} />
                  <span 
                    style={{
                      background: 'var(--navy)',
                      color: 'var(--gold)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    ENGINEERING
                  </span>
                </div>
                
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '24px',
                    color: 'var(--white)',
                    marginBottom: '12px'
                  }}
                >
                  JEE Main + Advanced
                </h3>
                
                <div 
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '24px'
                  }}
                >
                  ELEVATOR · NAVIGATOR · PROPELLER
                </div>
                
                <p 
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '15px',
                    marginBottom: '32px',
                    flexGrow: 1
                  }}
                >
                  Rigorous 2-year to crash-course preparation from IITian faculty.
                </p>
                
                <div 
                  className="group-hover:translate-x-2 transition-transform duration-300 flex items-center mt-auto"
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '15px',
                  }}
                >
                  Explore Programme <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 — NEET (Prominent) */}
          <motion.div variants={cardVariants} className="group relative flex flex-col h-full transform md:-translate-y-4">
            <Link href="/programmes/neet" className="flex flex-col h-full w-full" style={{textDecoration: 'none'}}>
              <div 
                className="flex flex-col h-full transition-all duration-300 relative"
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid var(--gold)', 
                  borderRadius: '16px',
                  padding: '36px 32px', 
                  boxShadow: '0 8px 32px rgba(255,214,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(255,214,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,214,0,0.05)';
                }}
              >
                <div 
                  className="absolute -top-3 -right-3"
                  style={{
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: '0 4px 12px rgba(255,214,0,0.3)',
                    zIndex: 10
                  }}
                >
                  POPULAR
                </div>

                <div className="flex justify-between items-start mb-6 mt-2">
                  <Activity style={{ color: 'var(--white)', width: '32px', height: '32px' }} />
                  <span 
                    style={{
                      background: 'var(--red)',
                      color: 'var(--white)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    MEDICAL
                  </span>
                </div>
                
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '26px', 
                    color: 'var(--white)',
                    marginBottom: '12px'
                  }}
                >
                  NEET / AIIMS
                </h3>
                
                <div 
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '24px'
                  }}
                >
                  GENESIS · SYNCHRONIZER · BOOSTER
                </div>
                
                <p 
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '15px',
                    marginBottom: '32px',
                    flexGrow: 1
                  }}
                >
                  Expert guidance by specialized faculty to help you score 650+ in NEET. Biology-focused curriculum.
                </p>
                
                <div 
                  className="group-hover:translate-x-2 transition-transform duration-300 flex items-center mt-auto"
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '15px',
                  }}
                >
                  Explore Programme <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3 — Foundation */}
          <motion.div variants={cardVariants} className="group relative flex flex-col h-full">
            <Link href="/programmes/foundation" className="flex flex-col h-full w-full" style={{textDecoration: 'none'}}>
              <div 
                className="flex flex-col h-full transition-all duration-300"
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid var(--navy-light)',
                  borderRadius: '16px',
                  padding: '32px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(255,214,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--navy-light)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <BookOpen style={{ color: 'var(--gold)', width: '32px', height: '32px' }} />
                  <span 
                    style={{
                      background: 'var(--success)',
                      color: 'var(--white)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    FOUNDATION
                  </span>
                </div>
                
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '24px',
                    color: 'var(--white)',
                    marginBottom: '12px'
                  }}
                >
                  Foundation (Cl. 6–10)
                </h3>
                
                <div 
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    marginBottom: '24px'
                  }}
                >
                  EXCELLER · PRODIGY · PRODIGY PLUS
                </div>
                
                <p 
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '15px',
                    marginBottom: '32px',
                    flexGrow: 1
                  }}
                >
                  Building strong fundamentals early. Prepares students for NTSE, Olympiads, and lays the groundwork for future success.
                </p>
                
                <div 
                  className="group-hover:translate-x-2 transition-transform duration-300 flex items-center mt-auto"
                  style={{
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '15px',
                  }}
                >
                  Explore Programme <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
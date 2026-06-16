"use client";

import { motion } from "framer-motion";

export default function WhyMiitjee() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const proofPoints = [
    { title: "JEE Main 2026", desc: "— 2nd Rank City Topper from our classroom" },
    { title: "NEET 2025", desc: "— 1st Rank City Topper from our classroom" },
    { title: "67 students", desc: "scored above 95 percentile in JEE 2026" },
    { title: "26 years", desc: "of unbroken results since 3rd March 2001" },
    { title: "Batch size capped at 30", desc: "— every student is seen" },
    { title: "IITian faculty", desc: "· NCERT-first · proven study material" }
  ];

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: 'radial-gradient(rgba(17, 34, 64, 0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Decorative Glows */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 214, 0, 0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 95, 0.1) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-center h-full min-h-[250px]"
        >
          {/* Giant decorative background number */}
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '140px',
              background: 'linear-gradient(180deg, rgba(17,34,64,0.08) 0%, rgba(17,34,64,0.01) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              left: '-10px'
            }}
          >
            26
          </div>
          
          <div className="relative z-10 pl-2 md:pl-8">
            <div 
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 42px)',
                color: 'var(--navy)',
                lineHeight: 1.1,
                marginBottom: '4px'
              }}
            >
              Years of
            </div>
            <div 
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(42px, 5vw, 56px)',
                color: 'var(--gold-dim)',
                lineHeight: 1.1,
                marginBottom: '16px'
              }}
            >
              Excellence
            </div>
            <div 
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '14px',
                color: 'var(--navy-light)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Est. 3rd March 2001 · Jamshedpur, Jharkhand
            </div>
          </div>
        </motion.div>

        {/* RIGHT side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-5"
        >
          {proofPoints.map((point, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex items-start gap-3">
              <div 
                className="flex-shrink-0 mt-0.5"
                style={{
                  color: 'var(--gold)',
                  fontSize: '18px',
                  lineHeight: 1
                }}
              >
                ✦
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'var(--navy)',
                  }}
                >
                  {point.title}
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '15px',
                    color: '#475569'
                  }}
                >
                  {point.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
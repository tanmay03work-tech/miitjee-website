import Image from "next/image";
import * as motion from "framer-motion/client";

export const metadata = {
  title: "Our Faculty | MIITJEE Classes",
  description: "Meet our highly qualified and experienced faculty members who guide students to success.",
};

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO */}
      <section 
        className="relative flex items-center"
        style={{
          background: 'var(--navy)',
          minHeight: '80vh',
          paddingTop: 'calc(var(--nav-height) + 4rem)',
          paddingBottom: '4rem'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem'
                }}
              >
                Our <span style={{ color: 'var(--gold)' }}>Faculty</span>
              </h1>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Learn from the best minds in the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FACULTY PROFILE */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="py-32 px-6 rounded-[24px] border border-slate-200 shadow-sm bg-white"
          >
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: 'var(--navy)',
                marginBottom: '1rem'
              }}
            >
              Revealing <span style={{ color: 'var(--gold)' }}>Soon</span>
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: 'var(--text-secondary)'
              }}
            >
              We are updating our faculty profiles. Stay tuned to meet our exceptional educators!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
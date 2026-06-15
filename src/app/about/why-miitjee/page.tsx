import Image from "next/image";
import * as motion from "framer-motion/client";
import WinningFormulae from "@/components/about/WinningFormulae";

export const metadata = {
  title: "Why MIITJEE | MIITJEE Classes",
  description: "Discover why MIITJEE Classes is the best choice for JEE and NEET preparation. We see 4 likely destinations for you.",
};

const IITS = [
  {
    name: "IIT KHARAGPUR",
    image: "/images/iits/kharagpur.jpg", 
  },
  {
    name: "IIT BOMBAY",
    image: "/images/iits/bombay.jpg",
  },
  {
    name: "IIT DELHI",
    image: "/images/iits/delhi.jpg",
  },
  {
    name: "IIT KANPUR",
    image: "/images/iits/kanpur.jpg",
  }
];

export default function WhyMiitjeePage() {
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
                Why <span style={{ color: 'var(--gold)' }}>MIITJEE</span>
              </h1>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Discover why MIITJEE Classes is the best choice for JEE and NEET preparation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left side text */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--navy)',
                    lineHeight: 1.2
                  }}
                >
                  <span style={{ color: 'var(--gold)' }}>You see</span><br/>
                  Top 4 IITs of India.
                </h2>
                
                <div 
                  style={{
                    height: '2px',
                    width: '100%',
                    background: 'linear-gradient(90deg, var(--gold) 0%, transparent 100%)',
                    opacity: 0.5,
                    margin: '2rem 0'
                  }} 
                />
                
                <h2 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--navy)',
                    lineHeight: 1.2,
                    textAlign: 'right'
                  }}
                >
                  <span style={{ color: 'var(--gold)' }}>We see 4 likely</span><br/>
                  destinations for you.
                </h2>
              </motion.div>
            </div>
            
            {/* Right side Images */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {IITS.map((iit, idx) => (
                  <motion.div
                    key={iit.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="relative h-32 md:h-40 w-full rounded-xl overflow-hidden shadow-lg group"
                    style={{
                      border: '3px solid var(--navy-light)',
                      background: 'var(--navy-mid)'
                    }}
                  >
                    <Image
                      src={iit.image}
                      alt={iit.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div 
                      className="absolute inset-0 flex items-end justify-center pb-4"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)'
                      }}
                    >
                      <h3 
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 'clamp(14px, 2vw, 18px)',
                          color: '#fff',
                          letterSpacing: '1px',
                          textAlign: 'center',
                          padding: '0 8px'
                        }}
                      >
                        {iit.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WINNING FORMULAE SECTION */}
      <WinningFormulae />
    </div>
  );
}

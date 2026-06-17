import Image from "next/image";
import * as motion from "framer-motion/client";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Director's Message | MIITJEE Classes",
  description: "Message from the Directors of MIITJEE Classes. A Force to Reckon with.",
};

const DIRECTORS = [
  {
    name: "Mr. Prabhat Ranjan",
    role: "Director | HOD Chemistry - IIT Kharagpur",
    credential: "",
    image: "/images/founders/prabhat-ranjan-new.jpg",
  },
  {
    name: "Mr. Krishna Banerjee",
    role: "Founder-Director",
    credential: "",
    image: "/images/founders/Krishna Bannerjee.jpg",
  },
  {
    name: "Mr. Sachin Verma",
    role: "Managing Director",
    credential: "",
    image: "/images/founders/sachin verma.jpg",
  }
];

export default function DirectorMessagePage() {
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
                MIITJEE: A Force to <span style={{ color: 'var(--gold)' }}>Reckon with</span>
              </h1>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Pioneer in providing the 'professionally organised coaching system' in<br/>
                Jamshedpur for JEE-Advanced & NEET | AIIMS training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIRECTORS CARDS */}
      <section style={{ background: '#ffffff', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {DIRECTORS.map((director, idx) => (
              <motion.div 
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-[24px] overflow-hidden shadow-lg aspect-[4/5] w-full bg-[#f8fafc]"
              >
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-black/10 to-transparent opacity-80" />

                {/* Floating Info Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/40 transition-all duration-300 group-hover:-translate-y-1">
                  <h3 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '18px',
                      color: 'var(--navy)',
                      marginBottom: '4px',
                      lineHeight: 1.2
                    }}
                  >
                    {director.name}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '12px',
                      color: '#b45309', // Darker amber for visibility on white
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: director.credential ? '8px' : '0'
                    }}
                  >
                    {director.role}
                  </p>
                  {director.credential && (
                    <span 
                      className="inline-block bg-slate-100 text-[11px] font-semibold text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {director.credential}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* STORY CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 relative overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            {/* Decorative Quotes Background */}
            <div className="absolute top-8 left-8 text-slate-200 opacity-80 select-none pointer-events-none" style={{ fontSize: '180px', lineHeight: 1, fontFamily: 'serif', zIndex: 0 }}>
              "
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <p 
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '1.2em' }}>M</span>IITJEE was established on 3rd March 2001, by the vision & endeavor of Mr. Krishna Banerjee and Late Mr. Shailesh Verma, with the mission to impart a qualitative and result oriented 'professionally organised coaching' for IIT-JEE & Medical Entrance Examinations.
              </p>
              
              <div className="flex flex-col gap-6 md:pl-8 md:border-l-2 border-slate-100">
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8
                  }}
                >
                  Since then, the Institute has carved a niche of unbelievable success. Today MIITJEE is known not only for its quality of teaching & study materials but also for its corporatised systems and structure. Owing to its phenomenal success rate, the Institute is ranked as one of the best in Eastern India.
                </p>
                
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8
                  }}
                >
                  Needless to say, all this could be possible due to the most innovative, strategic and scientific teaching & learning methodology and its implementation at the institute. The institute is guided by an administration who promote academic excellence, achievements and high ideals by providing an environment, which encourages students to develop a zest for learning.
                </p>
              </div>

              <div 
                className="mt-12 p-8 md:p-10 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--gold)] to-yellow-500" />
                <h4 
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: 'var(--navy)',
                    marginBottom: '1rem'
                  }}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6" style={{ color: 'var(--gold)' }} />
                  </div>
                  State-of-the-Art Infrastructure
                </h4>
                <p 
                  className="pl-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7
                  }}
                >
                  MIITJEE's ambience at the study centre, equipped with state-of-the-art infrastructure are situated in the heart of the city at Miitjee House, 40, Snp Area, Sakchi, Jamshedpur (Jharkhand). The Institution is fully air-conditioned to provide congenial atmosphere and excellent conditions to the students. Well stocked library facility is also available.
                </p>
              </div>

              <div 
                className="mt-8 p-10 text-center shadow-lg relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--gold) 0%, #facc15 100%)',
                  borderRadius: '16px'
                }}
              >
                {/* Decorative element for gold box */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500 opacity-10 rounded-full blur-2xl pointer-events-none" />
                
                <p 
                  className="relative z-10"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    textTransform: 'uppercase',
                    lineHeight: 1.6,
                    letterSpacing: '0.5px'
                  }}
                >
                  Brain storming and power packed teaching sessions by national famed faculties, supplemented with regular simulated tests on the actual format of JEE-MAIN + ADVANCED & NEET | AIIMS alongwith 24 X 7 doubt elimination facilities, forms the essence of our phenomenal results over the years.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

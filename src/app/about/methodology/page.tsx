import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Users, 
  MonitorPlay, 
  Target,
  ClipboardCheck,
  Calendar,
  HelpCircle
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = {
  title: "Methodology & Concept | MIITJEE Classes",
  description: "Learn about the teaching methodology, support system, and assessment concept behind MIITJEE Classes.",
};

const FEATURES = [
  {
    icon: <BookOpen className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "Comprehensive Teaching",
    description: "The classroom programs offered at MIITJEE are the most exhaustive and comprehensive course ever conceived for JEE-MAIN + ADVANCED & NEET. The courses are scientifically researched & designed, approaches to focus all your efforts and consequently assist you to succeed in your sincere endeavor and pursuit of success.",
  },
  {
    icon: <FileText className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "Exhaustive Study Materials",
    description: "Strategically formulated, scientifically designed & thoroughly revised comprehensive study materials comprising exhaustive theory and wide range of most expected questions, prepared by national famed faculty members is provided to the student.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "Daily Attendance & Test Report",
    description: "Daily attendance report of the students are sent to the parents through SMS / WHATSAPP MESSAGING. Progress report and marks analysis of all the weekly / periodic Tests and RANKERS TEST SERIES are sent through SMS/ PDF. Many other vital information regarding exams and other academic activities and happenings are also sent.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "CCTV Monitoring",
    description: "Each classrooms of our study center is equipped with CCTV arrangements to precisely monitor the teaching proceedings and in house discipline inside the classrooms.",
  },
  {
    icon: <Users className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "Parent Teachers Meeting",
    description: "Regular Parent-Teacher meetings are held to discuss student progress, address concerns, and ensure a collaborative approach to the student's success.",
  },
  {
    icon: <Target className="w-8 h-8" style={{ color: 'var(--gold)' }} />,
    title: "Motivational Sessions",
    description: "Motivational sessions by our qualifiers (IITian's and Doctors) to inspire and guide current students on their preparation journey.",
  }
];

const ASSESSMENTS = [
  {
    icon: <MonitorPlay className="w-8 h-8" style={{ color: 'var(--navy-deep)' }} />,
    title: "Online Computer Based Test Series",
    description: "For JEE Main / Advanced, simulating the exact exam environment.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" style={{ color: 'var(--navy-deep)' }} />,
    title: "Offline Test Series",
    description: "Dedicated offline test series tailored for NEET (Medical Entrance).",
  },
  {
    icon: <Calendar className="w-8 h-8" style={{ color: 'var(--navy-deep)' }} />,
    title: "Weekly Test",
    description: "For all batches at MIITJEE across IIT, NEET, and Foundation programs.",
  },
  {
    icon: <HelpCircle className="w-8 h-8" style={{ color: 'var(--navy-deep)' }} />,
    title: "Doubt Elimination Session",
    description: "Regular sessions conducted by our HODs and expert faculty.",
  }
];

export default function MethodologyPage() {
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
                  fontSize: 'clamp(36px, 8vw, 72px)',
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem'
                }}
              >
                Methodology & <span style={{ color: 'var(--gold)' }}>Concept</span>
              </h1>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                State of the Art & Hi-Tech Support System designed for your ultimate success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORT SYSTEM */}
      <section style={{ background: '#ffffff', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: 'var(--navy)',
                marginBottom: '1rem'
              }}
            >
              State of the Art <span style={{ color: 'var(--gold)' }}>Support System</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'var(--off-white)',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid var(--gold)',
                  padding: '2.5rem',
                  borderRadius: '8px'
                }}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '24px',
                    color: 'var(--navy)',
                    marginBottom: '1rem'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT SYSTEM */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
            style={{
              background: 'var(--navy-deep)',
              border: '1px solid var(--navy-light)',
              borderRadius: '8px'
            }}
          >
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: '#fff',
                    marginBottom: '1rem'
                  }}
                >
                  Powerful <span style={{ color: 'var(--gold)' }}>Assessment System</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ASSESSMENTS.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[var(--navy)] p-6 sm:p-8 rounded-lg border border-[var(--navy-light)]"
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-xl"
                      style={{ background: 'var(--gold)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '20px',
                          color: '#fff',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import * as motion from "framer-motion/client";
import { CheckCircle2, Building2, TrendingUp, Target } from "lucide-react";

export const metadata = {
  title: "Franchise Opportunities | MIITJEE Classes",
  description: "Explore franchise opportunities with MIITJEE Classes and join our network of successful educational centres.",
};

const STRENGTHS = [
  "Interactive Teaching Approach",
  "Well Qualified Faculty",
  "Good Track Record of Results in Competitive exams like NEET, AIIMS & JEE",
  "Doubt Clearance",
  "Tests and Assessments",
  "Motivational Sessions",
  "Parent Teacher Meetings",
  "Disciplined and Focused Learning Environment",
  "Pan India Network",
  "Competitive Atmosphere with Personalized Attention",
  "Comprehensive Study Material",
  "Digital Learning Programs",
  "Daily Attendance Monitoring",
  "Scholarships and Awards",
  "Comprehensive Testing Systems",
  "Modern Infrastructure",
  "Monitoring and Reviewing (Monthly Performance Report)"
];

const BRAND_VALUES = [
  "Association with a powerful and strong brand that gives you immediate recognition",
  "Broad segment of students (VII, VIII, IX, X, XI, XII studying and XII passed students)",
  "A meticulously designed system to enable centres to run effectively",
  "One of the largest Talent Hunt and Scholarship Exams, MANTHAN",
  "A network of like-minded individuals and successful persons to learn and get inspired from",
  "Quality coaching experience aiming to fulfil demand supply gap",
  "Regular centre visits by experienced faculty members and administrative staff",
  "Detailed operation manuals and intensive training to impart the required skill set and test preparatory business understanding",
  "An honest, dedicated and transparent approach, which forms the soul of our relationship with any business partner",
  "Systematic recruitment and training programs for faculty members, which facilitate scalable growth while maintaining quality across our MIITJEE centres",
  "Academic and Pedagogy support through vast accumulation of products and services through classroom, online and distance coaching centres as per the needs of the student",
  "From time to time we undertake various corporate advertising and marketing campaigns to increase our brand awareness",
  "Technology and legal support"
];

export default function FranchiseOpportunitiesPage() {
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
                Franchise <span style={{ color: 'var(--gold)' }}>Opportunities</span>
              </h1>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Partner with Eastern India's premier educational institute and build a<br/>
                successful business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FRANCHISE INFO */}
      <section style={{ background: '#ffffff', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Info Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: 'var(--navy)',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem'
                }}
              >
                Franchise <span style={{ color: 'var(--gold)' }}>Information</span>
              </h2>
              <div 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8
                }}
              >
                <p className="mb-4">
                  With the Education Industry witnessing massive growth and reach, monetary and social benefits is what a balanced investor can expect year after year. Education Industry is one of the most eminent emerging sectors in the service Industry. A sector which is not only growing with the increasing population but also due to Indians' fixation with education, good educational infrastructure and ambitious parents which have made it a recession-proof coaching industry in the country.
                </p>
                <p className="mb-4">
                  Entrepreneurs from organized sectors are tapping into this huge industry. MIITJEE CLASSES PVT LTD is one of the largest players in Bihar and Jharkhand of this industry. Our company offers comprehensive test preparatory services to students for preparation of Medical and Engineering Entrance Exams, School/Board Exams and other Competitive and Scholarship Exams such as NTSE, KVPY, and Olympiads.
                </p>
                <p>
                  With 20 years of operational experience in the test preparatory industry, a number of selections in Medical & Engineering Entrance Exams, with 5 MIITJEE centres (including franchisee), and a student count of more than 10000, we have become one of the recognized names in the education field in BIHAR and Jharkhand.
                </p>
              </div>
            </motion.div>
            
            {/* Right: Join Network Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--off-white)',
                borderTop: '4px solid var(--gold)',
                padding: '3rem',
                borderRadius: '8px'
              }}
            >
              <h3 
                className="flex items-center gap-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '28px',
                  color: 'var(--navy)',
                  marginBottom: '1.5rem'
                }}
              >
                <Building2 className="w-8 h-8" style={{ color: 'var(--gold)' }} />
                Join Our Network
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  lineHeight: 1.6
                }}
              >
                Individuals or Companies who aspire to make a difference by transforming the lives of students are invited to join the MIITJEE brand. If you have:
              </p>
              <ul className="space-y-4 mb-10">
                {['A will to succeed', 'Relevant skills and attitude to grow', 'Ideas that can change the face of the industry', 'Experience and knowledge of the Test Preparatory Industry'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div 
                style={{
                  background: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--gold-dim)', marginBottom: '0.5rem' }}>
                  Connect with us at:
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Registered Office: MIITJEE HOUSE SAKCHI, JAMSHEDPUR Jharkhand
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', color: 'var(--navy)' }}>
                  📞 8906000160
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section style={{ background: 'var(--navy)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
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
              Brand Value of <span style={{ color: 'var(--gold)' }}>MIITJEE</span>
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: 'var(--text-muted)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              MIITJEE being a recognised brand in the test preparatory services helps and supports you to make a move in the evolving test preparatory industry and assists in aiming at your goals. With MIITJEE comes its brand value along with the well tested business model and additional advantages like:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid var(--navy-light)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '2rem',
                  borderRadius: '8px'
                }}
              >
                <TrendingUp className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--gold)', marginTop: '4px' }} />
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#fff',
                    lineHeight: 1.6
                  }}
                >
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--navy)',
              marginBottom: '3rem'
            }}
          >
            Our <span style={{ color: 'var(--gold)' }}>Strengths</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white"
                style={{
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}
              >
                <Target className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--gold-dim)' }} />
                <span 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--navy)'
                  }}
                >
                  {strength}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

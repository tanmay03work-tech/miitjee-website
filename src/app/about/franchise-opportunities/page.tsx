import PageHero from "@/components/ui/PageHero";
import * as motion from "framer-motion/client";
import { CheckCircle2, Building2, TrendingUp, Users, Target, BookOpen } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHero
        title="Franchise"
        highlight="Opportunities"
        description="Partner with Eastern India's premier educational institute and build a successful business."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20 space-y-24">
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark font-poppins mb-8">
              Franchise Information
            </h2>
            <p>
              With the Education Industry witnessing massive growth and reach, monetary and social benefits is what a balanced investor can expect year after year. Education Industry is one of the most eminent emerging sectors in the service Industry. A sector which is not only growing with the increasing population but also due to Indians' fixation with education, good educational infrastructure and ambitious parents which have made it a recession-proof coaching industry in the country.
            </p>
            <p>
              Entrepreneurs from organized sectors are tapping into this huge industry. MIITJEE CLASSES PVT LTD is one of the largest players in Bihar and Jharkhand of this industry. Our company offers comprehensive test preparatory services to students for preparation of Medical and Engineering Entrance Exams, School/Board Exams and other Competitive and Scholarship Exams such as NTSE, KVPY, and Olympiads.
            </p>
            <p>
              With 20 years of operational experience in the test preparatory industry, a number of selections in Medical & Engineering Entrance Exams, with 5 MIITJEE centres (including franchisee), and a student count of more than 10000, we have become one of the recognized names in the education field in BIHAR and Jharkhand.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-brand-yellow-bright"
          >
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-6 flex items-center gap-3">
              <Building2 className="text-brand-yellow-bright w-8 h-8" />
              Join Our Network
            </h3>
            <p className="text-gray-600 mb-8">
              Individuals or Companies who aspire to make a difference by transforming the lives of students are invited to join the MIITJEE brand. If you have:
            </p>
            <ul className="space-y-4 mb-10">
              {['A will to succeed', 'Relevant skills and attitude to grow', 'Ideas that can change the face of the industry', 'Experience and knowledge of the Test Preparatory Industry'].map(item => (
                <li key={item} className="flex items-center gap-3 text-brand-blue-dark font-medium">
                  <CheckCircle2 className="text-brand-yellow-bright w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-bold text-brand-blue-dark mb-2">Connect with us at:</p>
              <p className="text-gray-600">Registered Office: MIITJEE HOUSE SAKCHI, JAMSHEDPUR Jharkhand</p>
              <p className="text-brand-blue-dark font-bold text-xl mt-2 flex items-center gap-2">
                📞 8906000160
              </p>
            </div>
          </motion.div>
        </section>

        {/* Brand Value Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark font-poppins inline-block border-b-4 border-brand-yellow-bright pb-4">
              Brand Value of MIITJEE
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
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
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all flex items-start gap-4"
              >
                <div className="bg-brand-yellow-bright/20 p-2 rounded-xl flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-brand-blue-deep" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Strengths Section */}
        <section className="bg-brand-blue-dark rounded-3xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-deep rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Our <span className="text-brand-yellow-bright">Strengths</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {STRENGTHS.map((strength, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <Target className="w-5 h-5 text-brand-yellow-bright flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

import PageHero from "@/components/ui/PageHero";
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
    icon: <BookOpen className="w-8 h-8 text-brand-yellow-bright" />,
    title: "Comprehensive Teaching",
    description: "The classroom programs offered at MIITJEE are the most exhaustive and comprehensive course ever conceived for JEE-MAIN + ADVANCED & NEET. The courses are scientifically researched & designed, approaches to focus all your efforts and consequently assist you to succeed in your sincere endeavor and pursuit of success.",
  },
  {
    icon: <FileText className="w-8 h-8 text-brand-yellow-bright" />,
    title: "Exhaustive Study Materials",
    description: "Strategically formulated, scientifically designed & thoroughly revised comprehensive study materials comprising exhaustive theory and wide range of most expected questions, prepared by national famed faculty members is provided to the student.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-brand-yellow-bright" />,
    title: "Daily Attendance & Test Report",
    description: "Daily attendance report of the students are sent to the parents through SMS / WHATSAPP MESSAGING. Progress report and marks analysis of all the weekly / periodic Tests and RANKERS TEST SERIES are sent through SMS/ PDF. Many other vital information regarding exams and other academic activities and happenings are also sent.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-brand-yellow-bright" />,
    title: "CCTV Monitoring",
    description: "Each classrooms of our study center is equipped with CCTV arrangements to precisely monitor the teaching proceedings and in house discipline inside the classrooms.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-yellow-bright" />,
    title: "Parent Teachers Meeting",
    description: "Regular Parent-Teacher meetings are held to discuss student progress, address concerns, and ensure a collaborative approach to the student's success.",
  },
  {
    icon: <Target className="w-8 h-8 text-brand-yellow-bright" />,
    title: "Motivational Sessions",
    description: "Motivational sessions by our qualifiers (IITian's and Doctors) to inspire and guide current students on their preparation journey.",
  }
];

const ASSESSMENTS = [
  {
    icon: <MonitorPlay className="w-10 h-10 text-white" />,
    title: "Online Computer Based Test Series",
    description: "For JEE Main / Advanced, simulating the exact exam environment.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-white" />,
    title: "Offline Test Series",
    description: "Dedicated offline test series tailored for NEET (Medical Entrance).",
  },
  {
    icon: <Calendar className="w-10 h-10 text-white" />,
    title: "Weekly Test",
    description: "For all batches at MIITJEE across IIT, NEET, and Foundation programs.",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-white" />,
    title: "Doubt Elimination Session",
    description: "Regular sessions conducted by our HODs and expert faculty.",
  }
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 flex flex-col">
      <PageHero
        title="Methodology &"
        highlight="Concept"
        description="State of the Art & Hi-Tech Support System designed for your ultimate success."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20">
        
        {/* Support System Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark font-poppins inline-block border-b-4 border-brand-yellow-bright pb-4">
            State of the Art Support System
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
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-blue-deep rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Assessment System Section */}
        <div className="bg-brand-blue-dark rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-deep rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins inline-block border-b-4 border-brand-yellow-bright pb-4">
                Powerful Assessment System
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ASSESSMENTS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 bg-brand-yellow-bright p-3 rounded-xl">
                    <div className="text-brand-blue-dark">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-yellow-bright mb-2">{item.title}</h3>
                    <p className="text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

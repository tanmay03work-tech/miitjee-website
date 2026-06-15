import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { User, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Director's Message | MIITJEE Classes",
  description: "Message from the Directors of MIITJEE Classes. A Force to Reckon with.",
};

const DIRECTORS = [
  {
    name: "Mr. Prabhat Ranjan",
    role: "Director",
    credential: "HOD Chemistry - IIT Kharagpur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Mr. Krishna",
    role: "Founder (Director)",
    credential: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Mr. Sachin Verma",
    role: "Managing Director",
    credential: "",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
  }
];

export default function DirectorMessagePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 flex flex-col">
      <PageHero
        title="MIITJEE: A Force to"
        highlight="Reckon with"
        description="Pioneer in providing the 'professionally organised coaching system' in Jamshedpur for JEE-Advanced & NEET | AIIMS training."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20">
        
        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {DIRECTORS.map((director, idx) => (
            <motion.div 
              key={director.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center flex flex-col items-center card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-32 bg-brand-blue-deep/5" />
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg relative z-10">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-dark font-poppins mb-1">{director.name}</h3>
              <p className="text-brand-yellow-bright font-bold mb-2">{director.role}</p>
              {director.credential && (
                <p className="text-gray-600 text-sm font-medium bg-gray-100 px-4 py-1.5 rounded-full">{director.credential}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow-bright/10 rounded-bl-full -z-0" />
          
          <div className="relative z-10 prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl font-medium text-brand-blue-dark leading-relaxed">
              MIITJEE was established on 3rd March 2001, by the vision & endeavor of Mr. Krishna and Late Mr. Shailesh Verma, with the mission to impart a qualitative and result oriented 'professionally organised coaching' for IIT-JEE & Medical Entrance Examinations.
            </p>
            
            <p>
              Since then, the Institute has carved a niche of unbelievable success. Today MIITJEE is known not only for its quality of teaching & study materials but also for its corporatised systems and structure. Owing to its phenomenal success rate, the Institute is ranked as one of the best in Eastern India.
            </p>
            
            <p>
              Needless to say, all this could be possible due to the most innovative, strategic and scientific teaching & learning methodology and its implementation at the institute. The institute is guided by an administration who promote academic excellence, achievements and high ideals by providing an environment, which encourages students to develop a zest for learning.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
              <h4 className="text-xl font-bold text-brand-blue-dark mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-brand-yellow-bright" />
                State-of-the-Art Infrastructure
              </h4>
              <p>
                MIITJEE's ambience at the study centre, equipped with state-of-the-art infrastructure are situated in the heart of the city at Miitjee House, 40, Snp Area, Sakchi, Jamshedpur (Jharkhand). The Institution is fully air-conditioned to provide congenial atmosphere and excellent conditions to the students. Well stocked library facility is also available.
              </p>
            </div>

            <div className="bg-brand-blue-dark text-white p-10 rounded-2xl text-center shadow-xl">
              <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-wide font-poppins uppercase">
                Brain storming and power packed teaching sessions by national famed faculties, supplemented with regular simulated tests on the actual format of JEE-MAIN + ADVANCED & NEET | AIIMS alongwith 24 X 7 doubt elimination facilities, forms the essence of our phenomenal results over the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

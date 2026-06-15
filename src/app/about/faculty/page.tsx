import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import * as motion from "framer-motion/client";

export const metadata = {
  title: "Our Faculty | MIITJEE Classes",
  description: "Meet our highly qualified and experienced faculty members who guide students to success.",
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageHero
        title="Our"
        highlight="Faculty"
        description="Learn from the best minds in the industry."
      />

      <div className="container mx-auto px-4 max-w-6xl py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow-bright/10 rounded-bl-full -z-0" />
          
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative z-10 rounded-full overflow-hidden border-4 border-brand-yellow-bright shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Prabhat Ranjan"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 flex-grow text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark font-poppins mb-2">
              Prabhat Ranjan
            </h2>
            <p className="text-brand-yellow-bright font-bold text-lg mb-6">HOD Chemistry</p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                He hails from IIT Kharagpur from where he has completed his B.Tech. He has taught in Super 30 under the guidance of DGP of Bihar, Shri Abhayanand Sir. He was lucky enough to teach Ayush Sharma who qualified for MIT in 2014. He has had an offer from Capital Dynamics in Singapore.
              </p>
              <p>
                He is a quintessential force behind MIITJEE. Nothing less than an experienced master of Chemistry. He is known and respected among students as well as faculty fraternities for his prowess in the subject. He regularly inspires the students to overcome their mental blocks towards Chemistry and simplifies the subject to an extent that it often becomes the student's favorite subject.
              </p>
              <p>
                He is known among the students for his grit and unique style of teaching. He is a motivator and man behind many success stories. He always keeps his lectures very lively and after attending even a single session any student may feel the difference of his teaching uniqueness. He is an aspiring leader with the heart of a teacher and mind of a trailblazer. His own rise from ordinary to extraordinary has made him one of the best motivators and counselors aspiring for success in competitive exams and in life thereafter.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
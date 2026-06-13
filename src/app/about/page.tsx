import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target } from "lucide-react";
import StatsCounter from "@/components/about/StatsCounter";

export const metadata: Metadata = {
  title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
  description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
  openGraph: {
    title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
    description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
    type: "website",
    url: "https://miitjee.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIITJEE Classes",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-miitjee-navy text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            About MIITJEE Classes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Empowering students to achieve their dreams since 2008. We are more than an institute; we are a family dedicated to excellence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-miitjee-navy font-poppins mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded with a vision to provide quality education to the bright minds of Jharkhand and Bihar, MIITJEE Classes started its journey over 15 years ago. From a humble beginning with a small batch of students, we have grown into the region's most trusted name for JEE and NEET preparation.
                </p>
                <p>
                  Our founders, themselves alumni of premier engineering institutes, identified a gap in the availability of structured, competitive coaching in the region. They decided to bridge this gap by bringing world-class pedagogical methods right to the students' doorstep.
                </p>
                <p>
                  Today, thousands of MIITJEE alumni are successfully pursuing their careers in top IITs, NITs, and medical colleges across India. Our commitment remains unwavering: to nurture talent and transform aspirations into reality.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="MIITJEE Students studying in a classroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-miitjee-yellow/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-miitjee-navy" />
              </div>
              <h3 className="text-2xl font-bold text-miitjee-navy font-poppins mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide unparalleled educational support, equipping students with the knowledge, analytical skills, and confidence required to excel in competitive exams and their future endeavors.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-miitjee-yellow/20 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-miitjee-navy" />
              </div>
              <h3 className="text-2xl font-bold text-miitjee-navy font-poppins mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the foremost institution for science education in Eastern India, recognized for producing ethical, capable, and visionary professionals who contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-miitjee-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the legacy of excellence and take the first step towards a brilliant career in engineering or medicine.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-miitjee-yellow text-miitjee-navy hover:bg-yellow-400 font-semibold px-8 py-6 text-lg rounded-full">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
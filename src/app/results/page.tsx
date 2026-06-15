import Link from "next/link";
import { ArrowRight, Trophy, Stethoscope } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Results & Selections | MIITJEE Classes",
  description: "Explore the outstanding results of MIITJEE students in JEE Main, JEE Advanced, and NEET examinations.",
};

export default function ResultsHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHero
        title="Our Legacy of"
        highlight="Success"
        description="Year after year, MIITJEE students achieve top ranks in India's toughest engineering and medical entrance exams."
      />

      <div className="container mx-auto px-4 max-w-5xl mt-16 pb-16">

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Total Selections", value: "2500+" },
            { label: "JEE Advanced", value: "500+" },
            { label: "NEET Selections", value: "300+" },
            { label: "Top 100 AIRs", value: "50+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
              <div className="text-3xl font-bold text-[#1C1CA5] mb-2 font-poppins">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* JEE Card */}
          <Link href="/results/jee" className="group block card-hover">
            <div className="bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#1C1CA5] transition-all duration-300 shadow-md relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-16 h-16 bg-[#1C1CA5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-[#1C1CA5]" />
              </div>
              
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">JEE Results</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover our top performers who cracked JEE Main and Advanced, securing seats in IITs and NITs.
              </p>
              
              <div className="flex items-center text-[#1C1CA5] font-semibold">
                View JEE Hall of Fame
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          {/* NEET Card */}
          <Link href="/results/neet" className="group block card-hover">
            <div className="bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#1C1CA5] transition-all duration-300 shadow-md relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-16 h-16 bg-[#1C1CA5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-[#1C1CA5]" />
              </div>
              
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">NEET Results</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Meet our future doctors who achieved outstanding scores in the NEET examination.
              </p>
              
              <div className="flex items-center text-[#1C1CA5] font-semibold">
                View NEET Hall of Fame
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
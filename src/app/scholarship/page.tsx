import { Metadata } from "next";
import CountdownTimer from "@/components/scholarship/CountdownTimer";
import InterestForm from "@/components/scholarship/InterestForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "MANTHAN 2025 — Win 100% Scholarship | MIITJEE Classes",
  description:
    "MIITJEE MANTHAN 2025 scholarship exam is coming soon. Register your interest to get notified when India's best coaching scholarship exam goes live.",
};

const tiers = [
  { range: "90–100%", scholarship: "100%", highlight: true },
  { range: "80–90%", scholarship: "90%", highlight: false },
  { range: "70–80%", scholarship: "80%", highlight: false },
  { range: "60–70%", scholarship: "70%", highlight: false },
  { range: "50–60%", scholarship: "60%", highlight: false },
  { range: "40–50%", scholarship: "50%", highlight: false },
  { range: "30–40%", scholarship: "40%", highlight: false },
  { range: "20–30%", scholarship: "30%", highlight: false },
  { range: "10–20%", scholarship: "20%", highlight: false },
  { range: "0–10%", scholarship: "10%", highlight: false },
];

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Area */}
      <section className="relative bg-gradient-to-br from-[#0a0a3e] via-[#1C1CA5] to-[#23205D] text-white pt-28 pb-20 overflow-hidden px-4">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        {/* Decorative blurred orbs */}
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-[#FEFD12]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-[#1C1CA5]/30 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white/10 text-[#FEFD12] font-semibold tracking-wide text-sm px-4 py-2 rounded-full mb-6 font-inter border border-white/20">
            🏆 MIITJEE MANTHAN SCHOLARSHIP SCHEME
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 leading-tight">
            Win Up to <span className="text-[#FEFD12]">100% Scholarship</span>{" "}
            <br className="hidden md:block" />
            on Coaching Fees
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-inter max-w-2xl mx-auto mb-12">
            Our flagship scholarship exam is coming soon.
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
        <div className="space-y-16">
          {/* What is MANTHAN */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold font-poppins text-[#23205D] mb-6">
              About MANTHAN
            </h2>
            <div className="space-y-6 font-inter text-gray-700 text-lg leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1C1CA5] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> About
                </h3>
                <p>It is a holistic platform for the students who are competing among thousands of aspirants across the nation in the field of IIT JEE and Medical.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1C1CA5] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Mission
                </h3>
                <p>Our mission is to offer financial aid to the bright students with scholarship and help them to take their first step towards making their dream come true and become an engineer or doctor.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1C1CA5] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Offers
                </h3>
                <p>It is one of the most respected and rigorous exam that identifies the most deserving candidates and awards them with scholarship up to 100 percent for our academic classroom coaching program.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1C1CA5] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Eligibility
                </h3>
                <p>Students of class 7th, 8th, 9th, 10th, 11th and 12th are eligible for this exam.</p>
              </div>
            </div>
          </section>

          {/* Scholarship Tiers */}
          <section>
            <h2 className="text-3xl font-bold font-poppins text-[#23205D] mb-8">
              Provision of Scholarship
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border card-hover ${
                    tier.highlight
                      ? "bg-[#FEFD12] border-[#e6e510] text-[#23205D] shadow-md transform -translate-y-1"
                      : "bg-white border-gray-200 text-[#23205D] shadow-sm"
                  } flex flex-col justify-center text-center`}
                >
                  <p className="text-xs font-medium font-inter mb-1 opacity-80 uppercase tracking-wider">
                    Score
                  </p>
                  <h3 className="text-xl font-bold font-poppins mb-1">
                    {tier.range}
                  </h3>
                  <div
                    className={`mt-auto text-lg font-bold font-inter ${
                      tier.highlight ? "text-[#23205D]" : "text-[#1C1CA5]"
                    }`}
                  >
                    {tier.scholarship}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center font-inter text-gray-600 mt-6 bg-blue-50 py-3 rounded-lg text-sm font-medium">
              Note: No student goes home empty-handed. Minimum 10% assured scholarship just for participating!
            </p>
          </section>
        </div>

        {/* Form Section */}
        <div className="lg:mt-[-80px] relative z-10">
          <InterestForm />
        </div>
      </div>
    </main>
  );
}
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
  { range: "75–89%", scholarship: "60%", highlight: false },
  { range: "60–74%", scholarship: "40%", highlight: false },
  { range: "50–59%", scholarship: "20%", highlight: false },
  { range: "Below 50%", scholarship: "10%", highlight: false },
];

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Area */}
      <section className="bg-[#23205D] text-white pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white/10 text-[#FEFD12] font-semibold tracking-wide text-sm px-4 py-2 rounded-full mb-6 font-inter border border-white/20">
            🏆 MIITJEE MANTHAN 2025
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
              What is MANTHAN?
            </h2>
            <ul className="space-y-4 font-inter text-gray-700 text-lg">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 shrink-0 mt-0.5" />
                <span>Free scholarship exam for Class 7–12 students</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 shrink-0 mt-0.5" />
                <span>Score well → win up to 100% fee waiver</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 shrink-0 mt-0.5" />
                <span>Instant result & comprehensive performance analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#1C1CA5] mr-3 shrink-0 mt-0.5" />
                <span>Free to take for early registrants</span>
              </li>
            </ul>
          </section>

          {/* Scholarship Tiers */}
          <section>
            <h2 className="text-3xl font-bold font-poppins text-[#23205D] mb-8">
              MANTHAN Scholarship Tiers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${
                    tier.highlight
                      ? "bg-[#FEFD12] border-[#e6e510] text-[#23205D] shadow-md transform -translate-y-1"
                      : "bg-white border-gray-200 text-[#23205D] shadow-sm hover:shadow-md transition-shadow"
                  } flex flex-col justify-center`}
                >
                  <p className="text-sm font-medium font-inter mb-1 opacity-80">
                    If you score
                  </p>
                  <h3 className="text-2xl font-bold font-poppins mb-3">
                    {tier.range}
                  </h3>
                  <div
                    className={`mt-auto text-lg font-bold font-inter ${
                      tier.highlight ? "text-[#23205D]" : "text-[#1C1CA5]"
                    }`}
                  >
                    {tier.scholarship} Scholarship
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center font-inter text-gray-600 mt-6 bg-blue-50 py-3 rounded-lg text-sm font-medium">
              Note: No student goes home empty-handed. Minimum 10% assured
              scholarship just for participating!
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
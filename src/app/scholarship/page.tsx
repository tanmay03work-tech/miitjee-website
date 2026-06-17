import { Metadata } from "next";
import CountdownTimer from "@/components/scholarship/CountdownTimer";
import InterestForm from "@/components/scholarship/InterestForm";
import { CheckCircle2, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "MANTHAN 2026 — Win 100% Scholarship | MIITJEE Classes",
  description:
    "MIITJEE MANTHAN 2026 scholarship exam is coming soon. Register your interest to get notified when India's best coaching scholarship exam goes live.",
};

const tiers = [
  { range: "90–100%", scholarship: "100%", percent: 100 },
  { range: "80–90%", scholarship: "90%", percent: 90 },
  { range: "70–80%", scholarship: "80%", percent: 80 },
  { range: "60–70%", scholarship: "70%", percent: 70 },
  { range: "50–60%", scholarship: "60%", percent: 60 },
  { range: "40–50%", scholarship: "50%", percent: 50 },
  { range: "30–40%", scholarship: "40%", percent: 40 },
  { range: "20–30%", scholarship: "30%", percent: 30 },
  { range: "10–20%", scholarship: "20%", percent: 20 },
  { range: "0–10%", scholarship: "10%", percent: 10 },
];

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Area */}
      <section 
        className="relative text-white pt-32 pb-24 overflow-hidden px-4 min-h-[80vh] flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(255,214,0,0.08) 0%, transparent 65%), var(--navy)"
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div 
            className="inline-block bg-[var(--gold)]/10 text-[var(--gold)] font-bold tracking-wide text-sm px-6 py-3 rounded-full mb-8 font-inter border border-[var(--gold)]/20 uppercase"
            style={{ boxShadow: "0 0 40px rgba(255,214,0,0.3)" }}
          >
            🏆 MIITJEE MANTHAN SCHOLARSHIP SCHEME
          </div>
          
          <h1 className="flex flex-col items-center justify-center mb-8">
            <span className="font-inter font-medium text-white text-2xl mb-0">Win Up to</span>
            <span 
              className="font-black text-[var(--gold)] leading-none"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(80px, 12vw, 160px)" }}
            >
              100%
            </span>
            <span 
              className="font-extrabold text-white"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Scholarship
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-inter max-w-3xl mx-auto mb-10 leading-relaxed">
            Jharkhand's biggest scholarship exam for students of Class 7–12.
            <br className="hidden md:block" />
            No student goes home empty — minimum 10% scholarship guaranteed just for appearing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <a 
              href="#register"
              className="bg-[var(--gold)] text-[var(--navy)] font-extrabold font-display px-8 py-4 rounded-full text-lg transition-transform hover:scale-105"
              style={{ boxShadow: "0 0 30px rgba(255,214,0,0.4)" }}
            >
              Register Now — It's Free
            </a>
            <a 
              href="#about"
              className="border-2 border-white/30 text-white font-bold font-display px-8 py-4 rounded-full text-lg transition-colors hover:bg-white/10 flex items-center gap-2"
            >
              Learn More <ArrowDown className="w-5 h-5" />
            </a>
          </div>

          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-sm font-inter text-gray-300">
            Classes 7–12 · Free Registration · Up to 100% Off Coaching Fees
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-start">
        <div className="space-y-16">
          {/* What is MANTHAN */}
          <section id="about" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-24">
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
        </div>

        {/* Form Section */}
        <div id="register" className="lg:mt-[-80px] relative z-10 scroll-mt-24">
          <InterestForm />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 w-full">
        {/* Scholarship Tiers */}
        <section>
          <h2 className="text-3xl font-bold font-poppins text-[#23205D] mb-8 text-center md:text-left">
            Provision of Scholarship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl flex flex-col sm:flex-row items-center gap-4 shadow-sm"
                style={{ backgroundColor: "var(--navy-mid)", border: "1px solid var(--navy-light)" }}
              >
                <div className="w-full sm:w-28 flex-shrink-0 text-center sm:text-left">
                  <span className="font-display font-bold text-white text-lg">{tier.range}</span>
                </div>
                
                <div className="flex-1 h-4 bg-[#0A1628]/50 rounded-full overflow-hidden border border-white/5 mx-2">
                  <div 
                    className="h-full bg-[var(--gold)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tier.percent}%` }}
                  />
                </div>
                
                <div className="w-full sm:w-28 flex-shrink-0 text-center sm:text-right">
                  <span className="font-display font-black text-[var(--gold)] text-2xl whitespace-nowrap">{tier.scholarship} OFF</span>
                </div>
              </div>
            ))}
            
            <div 
              className="md:col-span-2 mt-4 p-6 rounded-xl text-center shadow-lg"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <span className="font-display font-extrabold text-[var(--navy)] text-xl block">
                Everyone who appears → Minimum 10% guaranteed
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
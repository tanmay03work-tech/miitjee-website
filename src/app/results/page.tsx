import Link from "next/link";
import { ArrowRight, Trophy, Star } from "lucide-react";

export const metadata = {
  title: "Results & Selections | MIITJEE Classes",
  description: "Explore the outstanding results of MIITJEE students in JEE Main, JEE Advanced, and NEET examinations.",
};

export default function ResultsHubPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* RESULTS HERO — Trophy Room Aesthetic */}
      <section className="relative w-full min-h-[70vh] bg-[var(--navy)] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-30"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 flex flex-col items-center">
          {/* Top Gold Bar */}
          <div className="bg-[var(--gold)] text-[var(--navy)] font-display font-extrabold px-6 py-2 rounded-full mb-8 inline-flex items-center gap-2 shadow-lg tracking-wider text-sm md:text-base">
            🏆 MIITJEE RESULTS · SINCE 2001
          </div>
          
          {/* H1 */}
          <h1 className="text-white font-display font-black text-5xl md:text-[64px] leading-tight mb-6 tracking-tight">
            Our Legacy of Success
          </h1>
          
          {/* Subtext */}
          <p className="text-[var(--text-muted)] text-xl md:text-2xl font-body max-w-3xl mb-16">
            26 Years of Results. From Jamshedpur to IITs, AIIMSes, and NITs.
          </p>
          
          {/* STATS ROW */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-[var(--gold)] font-display font-black text-5xl md:text-6xl mb-2">2500+</span>
              <span className="text-white font-body font-medium text-sm md:text-base uppercase tracking-wider">Total Selections</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[var(--gold)] font-display font-black text-5xl md:text-6xl mb-2">500+</span>
              <span className="text-white font-body font-medium text-sm md:text-base uppercase tracking-wider">JEE Advanced</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[var(--gold)] font-display font-black text-5xl md:text-6xl mb-2">300+</span>
              <span className="text-white font-body font-medium text-sm md:text-base uppercase tracking-wider">NEET Selections</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[var(--gold)] font-display font-black text-5xl md:text-6xl mb-2">26</span>
              <span className="text-white font-body font-medium text-sm md:text-base uppercase tracking-wider">Years of Results</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#jee-hall-of-fame" className="btn-primary hover:scale-105 transition-transform duration-300">
              JEE Hall of Fame <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#neet-hall-of-fame" className="btn-primary hover:scale-105 transition-transform duration-300">
              NEET Hall of Fame <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED RESULTS — Topper Cards Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[var(--navy)] font-display font-black text-4xl md:text-5xl inline-block relative">
              Class of 2026 — Our Best Year Yet
              <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[var(--gold)] rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: JEE 2026 */}
            <div className="bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] rounded-[24px] p-8 md:p-12 border-t-4 border-[var(--gold)] shadow-xl flex flex-col justify-between card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <Trophy className="w-48 h-48 text-[var(--gold)]" />
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-6">
                  JEE MAIN 2026
                </span>
                <div className="font-display font-black text-5xl md:text-6xl text-white mb-2">
                  2nd Rank
                </div>
                <div className="text-xl text-[var(--text-muted)] font-medium mb-1">
                  City Topper · Jamshedpur
                </div>
                <div className="text-[var(--text-muted)] opacity-80">
                  MIITJEE Student
                </div>
              </div>
              <div className="flex gap-1 mt-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[var(--gold)] fill-[var(--gold)]" />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Card 2: NEET 2025 */}
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-lg border-t-4 border-t-[var(--red)] card-hover relative overflow-hidden">
                 <span className="inline-block bg-[var(--red)] text-white font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4 relative z-10">
                  NEET 2025
                </span>
                <div className="font-display font-black text-4xl md:text-5xl text-[var(--navy)] mb-2 relative z-10">
                  1st Rank
                </div>
                <div className="text-lg text-gray-600 font-medium relative z-10">
                  City Topper · Jamshedpur
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
                {/* Card 3: JEE collective */}
                <div className="bg-[var(--navy)] rounded-[24px] p-8 shadow-lg flex flex-col justify-center items-center text-center card-hover border border-[var(--navy-light)] relative z-10">
                  <div className="font-display font-black text-4xl md:text-5xl text-[var(--gold)] mb-3">
                    67 Students
                  </div>
                  <div className="text-white font-medium text-lg leading-tight mb-2">
                    Scored Above 95 Percentile
                  </div>
                  <div className="text-[var(--text-muted)] text-sm uppercase tracking-wider font-semibold">
                    JEE Main 2026
                  </div>
                </div>

                {/* Card 4: Success rate */}
                <div className="bg-[var(--navy)] rounded-[24px] p-8 shadow-lg flex flex-col justify-center items-center text-center card-hover border border-[var(--navy-light)] relative z-10">
                  <div className="font-display font-black text-5xl md:text-6xl text-[var(--gold)] mb-3">
                    77%
                  </div>
                  <div className="text-white font-medium text-lg leading-tight mb-2">
                    NEET 2025 Success Rate
                  </div>
                  <div className="text-[var(--text-muted)] text-sm">
                    77 out of 100 NEET students cleared
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORICAL TOPPERS */}
      <section className="py-24 bg-[var(--navy)] relative" id="jee-hall-of-fame">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-white font-display font-black text-4xl md:text-5xl mb-4">
              All-Time Hall of Fame
            </h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Our consistent legacy of producing state and city toppers across decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Topper 1 */}
            <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"></div>
              <span className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
                JEE
              </span>
              <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-display font-black text-2xl mb-4 shadow-lg ring-4 ring-[var(--navy)]">
                VK
              </div>
              <h3 className="text-white font-display font-extrabold text-xl mb-1">Vishnu Kumar</h3>
              <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">AIR 202 IIT Kharagpur</p>
              <p className="text-[var(--text-muted)] text-xs font-medium">1st Rank Jharkhand</p>
            </div>

            {/* Topper 2 */}
            <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden" id="neet-hall-of-fame">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--red)]"></div>
              <span className="inline-block bg-[var(--red)] text-white font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
                NEET
              </span>
              <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-display font-black text-2xl mb-4 shadow-lg ring-4 ring-[var(--navy)]">
                AJ
              </div>
              <h3 className="text-white font-display font-extrabold text-xl mb-1">Ansh Jain</h3>
              <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">670/720</p>
              <p className="text-[var(--text-muted)] text-xs font-medium">AIIMS Raipur</p>
            </div>

            {/* Topper 3 */}
            <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#22C55E]"></div>
              <span className="inline-block bg-[#22C55E] text-white font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
                Medical
              </span>
              <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-display font-black text-2xl mb-4 shadow-lg ring-4 ring-[var(--navy)]">
                FS
              </div>
              <h3 className="text-white font-display font-extrabold text-xl mb-1">Fauzia Sultan</h3>
              <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">607/720</p>
              <p className="text-[var(--text-muted)] text-xs font-medium">NEET Selection</p>
            </div>

            {/* Topper 4 */}
            <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"></div>
              <span className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
                JEE
              </span>
              <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-display font-black text-2xl mb-4 shadow-lg ring-4 ring-[var(--navy)]">
                PK
              </div>
              <h3 className="text-white font-display font-extrabold text-xl mb-1">Pabitra Kumar</h3>
              <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">IIT Guwahati</p>
              <p className="text-[var(--text-muted)] text-xs font-medium">JEE Advanced Selection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
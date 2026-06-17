import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Star } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { ResultImageGrid } from "@/components/results/ResultImageGrid";
import { AllTimeHallOfFame } from "@/components/home/AllTimeHallOfFame";

export const metadata = {
  title: "Results & Selections | MIITJEE Classes",
  description: "Explore the outstanding results of MIITJEE students in JEE Main, JEE Advanced, and NEET examinations.",
};

export default async function ResultsHubPage() {
  const supabase = await createClient();
  const { data: resultImages } = await supabase
    .from("result_images")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  const snapshots = resultImages?.filter(img => img.category === 'snapshots_2026') || [];
  const newspapers = resultImages?.filter(img => img.category === 'newspaper_headlines') || [];
  const jee = resultImages?.filter(img => img.category === 'jee') || [];
  const neet = resultImages?.filter(img => img.category === 'neet') || [];
  const boards = resultImages?.filter(img => img.category === 'boards') || [];

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
      <section className="py-12 md:py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-[var(--navy)] font-display font-black text-4xl md:text-5xl inline-block relative">
              Class of 2026 — Our Best Year Yet
              <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[var(--gold)] rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1: JEE 2026 */}
            <div className="bg-gradient-to-br from-[var(--navy-mid)] to-[var(--navy)] rounded-[24px] p-6 md:p-8 border-t-4 border-[var(--gold)] shadow-xl flex flex-col justify-between card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
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

            <div className="flex flex-col gap-4 md:gap-6">
              {/* Card 2: NEET 2025 */}
              <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-lg border-t-4 border-t-[var(--red)] card-hover relative overflow-hidden">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
                {/* Card 3: JEE collective */}
                <div className="bg-[var(--navy)] rounded-[24px] p-6 shadow-lg flex flex-col justify-center items-center text-center card-hover border border-[var(--navy-light)] relative z-10">
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
                <div className="bg-[var(--navy)] rounded-[24px] p-6 shadow-lg flex flex-col justify-center items-center text-center card-hover border border-[var(--navy-light)] relative z-10">
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
      <AllTimeHallOfFame showButton={false} />

      {/* DYNAMIC RESULTS GALLERIES */}
      <ResultImageGrid 
        title="Class of 2026 Snapshots" 
        subtitle="Capturing the joy of our successful students and their proud parents."
        images={snapshots} 
        theme="light" 
      />

      <ResultImageGrid 
        title="In the News" 
        subtitle="MIITJEE making headlines across top newspapers for unprecedented results."
        images={newspapers} 
        theme="dark" 
      />

      <ResultImageGrid 
        title="JEE Excellence" 
        images={jee} 
        theme="light" 
      />

      <ResultImageGrid 
        title="NEET Excellence" 
        images={neet} 
        theme="dark" 
      />

      <ResultImageGrid 
        title="12th Board Toppers" 
        images={boards} 
        theme="light" 
      />
    </div>
  );
}
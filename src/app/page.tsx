import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/server";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ResultsShowcase from "@/components/home/ResultsShowcase";
import TestSeriesCTA from "@/components/home/TestSeriesCTA";
import ProgramsOverview from "@/components/home/ProgramsOverview";

const WhyMiitjee = dynamic(() => import("@/components/home/WhyMiitjee"));
const FacultyShowcase = dynamic(() => import("@/components/home/FacultyShowcase"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const GalleryPreview = dynamic(() => import("@/components/home/GalleryPreview"));
const BranchesSection = dynamic(() => import("@/components/home/BranchesSection"));
const ManthanTeaser = dynamic(() => import("@/components/home/ManthanTeaser"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const AdmissionForm = dynamic(() => import("@/components/home/AdmissionForm"));
const FeaturedReelsSection = dynamic(() => import("@/components/home/featured-reels").then(mod => mod.FeaturedReelsSection));
const FeaturedResultsSection = dynamic(() => import("@/components/home/FeaturedResults").then(mod => mod.FeaturedResultsSection));


export default async function Home() {
  const supabase = await createClient();

  // Fetch data in parallel
  const [
    { data: results },
    { data: faculty },
    { data: testimonials },
    { data: gallery },
    { data: branches },
    { data: reels },
    { data: resultImages },
  ] = await Promise.all([
    supabase
      .from("results")
      .select("*")
      .eq("is_published", true)
      .eq("is_featured", true)
      .order("sort_order", { ascending: true })
      .limit(8),
    supabase
      .from("faculty")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true })
      .limit(4),
    supabase
      .from("testimonials")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true })
      .limit(6),
    supabase
      .from("gallery")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true })
      .limit(6),
    supabase
      .from("branches")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("featured_reels")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("result_images")
      .select("*")
      .eq("is_published", true)
      .eq("category", "snapshots_2026")
      .order("sort_order", { ascending: true }),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <ResultsShowcase results={results || []} />
      <TestSeriesCTA />
      <ProgramsOverview />
      <WhyMiitjee />
      <FacultyShowcase faculty={faculty || []} />
      <TestimonialsSection testimonials={testimonials || []} />
      <FeaturedReelsSection reels={reels || []} />
      <FeaturedResultsSection results={resultImages || []} />
      <GalleryPreview images={gallery || []} />
      <BranchesSection branches={branches || []} />
      <ManthanTeaser />
      <FAQSection />
      <AdmissionForm />
    </div>
  );
}

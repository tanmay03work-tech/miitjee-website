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

export default async function Home() {
  const supabase = await createClient();

  // Fetch data in parallel
  const [
    { data: results },
    { data: faculty },
    { data: testimonials },
    { data: gallery },
    { data: branches },
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
      <GalleryPreview images={gallery || []} />
      <BranchesSection branches={branches || []} />
      <ManthanTeaser />
      <FAQSection />
      <AdmissionForm />
    </div>
  );
}

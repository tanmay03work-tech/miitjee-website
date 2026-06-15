import { createClient } from "@/lib/supabase/server";
import GalleryClient from "./gallery-client";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Gallery | MIITJEE Classes",
  description: "Take a glimpse into the vibrant campus life, classrooms, and events at MIITJEE.",
};

export default async function GalleryPage() {
  const supabase = await createClient();

  const { data: galleryItems } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero
        title="Life at"
        highlight="MIITJEE"
        description="Explore our state-of-the-art facilities, vibrant events, and the focused learning environment that breeds success."
      />

      <div className="container mx-auto px-4 max-w-7xl mt-12 pb-16">
        <GalleryClient initialItems={galleryItems || []} />
      </div>
    </div>
  );
}
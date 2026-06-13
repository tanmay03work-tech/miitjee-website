import { createClient } from "@/lib/supabase/server";
import GalleryClient from "./gallery-client";

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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#1C1CA5] text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Life at MIITJEE
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Explore our state-of-the-art facilities, vibrant events, and the focused learning environment that breeds success.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <GalleryClient initialItems={galleryItems || []} />
      </div>
    </div>
  );
}
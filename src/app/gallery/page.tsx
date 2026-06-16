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
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Light Theme Hero Section */}
      <section className="relative pt-32 pb-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-[#EEF0FF] text-[#1C1CA5] font-bold px-5 py-2 rounded-full text-sm tracking-wide mb-6">
            MIITJEE GALLERY
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-[#23205D] mb-6">
            Life at <span className="text-[#1C1CA5]">MIITJEE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore our state-of-the-art facilities, vibrant events, and the focused learning environment that breeds success.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GalleryClient initialItems={galleryItems || []} />
      </div>
    </div>
  );
}
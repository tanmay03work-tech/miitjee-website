import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { UserCircle2, Quote, Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Testimonials | MIITJEE Classes",
  description: "Hear what our students and parents have to say about their experience at MIITJEE.",
};

export default async function TestimonialsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const typeParam = typeof resolvedSearchParams.type === "string" ? resolvedSearchParams.type : "student";
  
  const supabase = await createClient();

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_published", true)
    .eq("type", typeParam)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <PageHero
        title="Success"
        highlight="Stories"
        description="Don't just take our word for it. Hear from the students who achieved their dreams and the parents who trusted us."
      />

      <div className="container mx-auto px-4 max-w-6xl mt-12">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="/testimonials?type=student"
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              typeParam === "student"
                ? "bg-[#FEFD12] text-gray-900 shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Students
          </Link>
          <Link
            href="/testimonials?type=parent"
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              typeParam === "parent"
                ? "bg-[#FEFD12] text-gray-900 shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Parents
          </Link>
        </div>

        {testimonials && testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group card-hover"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50 group-hover:text-blue-100 transition-colors -z-0" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 relative bg-gray-50 flex-shrink-0">
                    {testimonial.photo_url ? (
                      <Image
                        src={testimonial.photo_url}
                        alt={testimonial.student_name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <UserCircle2 className="w-10 h-10 text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-gray-900 text-lg leading-tight mb-1">
                      {testimonial.student_name}
                    </h3>
                    {testimonial.programme && (
                      <p className="text-[#1C1CA5] text-sm font-medium">
                        {testimonial.programme} {testimonial.year ? `Batch ${testimonial.year}` : ''}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'text-[#FEFD12] fill-[#FEFD12]' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                
                {testimonial.branch_name && (
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2"></span>
                    {testimonial.branch_name} Center
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 max-w-2xl mx-auto">
            <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No testimonials found</h3>
            <p className="text-gray-500">We don't have any {typeParam} testimonials to show right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
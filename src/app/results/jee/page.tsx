import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, UserCircle2, Star, Trophy } from "lucide-react";
import YearFilter from "../YearFilter";

export const metadata = {
  title: "JEE Results | MIITJEE Classes — Patna",
  description: "Explore the top JEE Main and Advanced results achieved by MIITJEE students.",
};

export default async function JEEResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const yearParam = typeof resolvedSearchParams.year === "string" ? resolvedSearchParams.year : undefined;
  
  const supabase = await createClient();

  let query = supabase
    .from("results")
    .select("*")
    .eq("programme", "jee")
    .eq("is_published", true)
    .order("is_featured", { ascending: false })
    .order("year", { ascending: false })
    .order("sort_order", { ascending: true });

  if (yearParam && yearParam !== "all") {
    query = query.eq("year", parseInt(yearParam));
  }

  const { data: results } = await query;
  
  const { data: allYearsData } = await supabase
    .from("results")
    .select("year")
    .eq("programme", "jee")
    .eq("is_published", true)
    .order("year", { ascending: false });

  const years = Array.from(new Set((allYearsData || []).map(r => r.year).filter((y): y is number => typeof y === 'number')));

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 flex items-center text-sm font-medium text-gray-500">
          <Link href="/results" className="hover:text-[#1C1CA5] flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Results Hub
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#1C1CA5] mb-2">
              JEE Hall of Fame
            </h1>
            <p className="text-gray-600 text-lg">
              Celebrating our students who cracked JEE Main & Advanced.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Filter by Year:</span>
            <YearFilter years={years} currentYear={yearParam} />
          </div>
        </div>

        {results && results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((result) => (
              <div 
                key={result.id} 
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative ${
                  result.is_featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {result.is_featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Top Ranker
                  </div>
                )}
                
                <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center overflow-hidden">
                  {result.photo_url ? (
                    <Image
                      src={result.photo_url}
                      alt={result.student_name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserCircle2 className="w-20 h-20 text-gray-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-poppins font-bold text-xl leading-tight">
                      {result.student_name}
                    </h3>
                    <p className="text-gray-200 text-sm">{result.exam} ({result.year})</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="inline-block bg-[#FEFD12] text-gray-900 font-bold px-4 py-1.5 rounded-lg mb-3">
                    {result.rank_score}
                  </div>
                  {result.institute && (
                    <p className="text-gray-600 text-sm font-medium flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#1C1CA5] mt-1.5 mr-2 flex-shrink-0"></span>
                      {result.institute}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">We don't have any results to show for the selected criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
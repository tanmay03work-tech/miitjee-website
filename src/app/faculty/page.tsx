import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { UserCircle2, GraduationCap, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Our Expert Faculty | MIITJEE Classes",
  description: "Meet the experienced and dedicated faculty members guiding MIITJEE students to success.",
};

export default async function FacultyPage() {
  const supabase = await createClient();

  const { data: facultyMembers } = await supabase
    .from("faculty")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#23205D] text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1CA5]/20 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Our Expert Faculty
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Learn from the best minds. Our highly qualified and experienced teachers are dedicated to your success in JEE, NEET, and Foundation courses.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {facultyMembers && facultyMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <div 
                key={faculty.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                <div className="p-8 pb-0 flex flex-col items-center text-center relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-[#1C1CA5]/10 transition-colors"></div>
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-gray-100 flex items-center justify-center">
                    {faculty.photo_url ? (
                      <Image
                        src={faculty.photo_url}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <UserCircle2 className="w-20 h-20 text-gray-300" />
                    )}
                  </div>
                  
                  <h2 className="font-poppins font-bold text-2xl text-[#1C1CA5] mb-1">
                    {faculty.name}
                  </h2>
                  <div className="text-gray-600 font-medium mb-4 flex flex-col items-center gap-1">
                    <span>{faculty.designation}</span>
                    {faculty.subject && (
                      <span className="inline-flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        <BookOpen className="w-3 h-3 mr-1.5" />
                        {faculty.subject}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 pt-4 flex-grow flex flex-col">
                  <div className="space-y-3 mb-6 flex-grow">
                    {faculty.credential && (
                      <div className="flex items-start text-sm">
                        <GraduationCap className="w-5 h-5 text-[#1C1CA5] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{faculty.credential}</span>
                      </div>
                    )}
                    
                    {faculty.experience_yrs && (
                      <div className="flex items-start text-sm">
                        <Award className="w-5 h-5 text-[#1C1CA5] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{faculty.experience_yrs} years experience</span>
                      </div>
                    )}
                  </div>

                  {faculty.bio && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
                        "{faculty.bio}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 max-w-2xl mx-auto">
            <UserCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Faculty profiles coming soon</h3>
            <p className="text-gray-500">We are currently updating our faculty directory. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
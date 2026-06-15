import { createClient } from "@/lib/supabase/server";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Our Branches | MIITJEE Classes",
  description: "Find a MIITJEE classroom center near you. We have multiple branches across the city for your convenience.",
};

export default async function BranchesPage() {
  const supabase = await createClient();

  const { data: branches } = await supabase
    .from("branches")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <PageHero
        title="Our"
        highlight="Centers"
        description="Find a MIITJEE center near you. Our state-of-the-art classrooms are equipped to provide the best learning experience."
      />

      <div className="container mx-auto px-4 max-w-6xl mt-12">
        {branches && branches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div 
                key={branch.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full card-hover"
              >
                {/* Map Placeholder */}
                <div className="h-48 w-full bg-gray-200 relative">
                  {branch.maps_url ? (
                    <iframe 
                      src={branch.maps_url} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                      <MapPin className="w-10 h-10 mb-2" />
                      <span className="text-sm font-medium ml-2">Map Preview</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-1">
                    {branch.name}
                  </h2>
                  <p className="text-[#1C1CA5] font-medium text-sm mb-4">{branch.city}</p>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
                    </div>

                    {branch.phone && branch.phone.length > 0 && (
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          {branch.phone.map((p: string, i: number) => (
                            <a key={i} href={`tel:${p}`} className="text-gray-600 text-sm hover:text-[#1C1CA5] transition-colors">
                              {p}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {branch.email && (
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <a href={`mailto:${branch.email}`} className="text-gray-600 text-sm hover:text-[#1C1CA5] transition-colors">
                          {branch.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    <a 
                      href={`tel:${branch.phone?.[0]}`}
                      className="flex items-center justify-center py-2 px-4 bg-gray-50 hover:bg-[#1C1CA5] text-gray-700 hover:text-white rounded-lg text-sm font-semibold transition-colors border border-gray-200 hover:border-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </a>
                    {branch.whatsapp && (
                      <a 
                        href={`https://wa.me/${branch.whatsapp.replace(/\D/g,'')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-2 px-4 bg-green-50 hover:bg-green-500 text-green-700 hover:text-white rounded-lg text-sm font-semibold transition-colors border border-green-200 hover:border-transparent"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 max-w-2xl mx-auto">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No branches found</h3>
            <p className="text-gray-500">We are currently updating our branch locations. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
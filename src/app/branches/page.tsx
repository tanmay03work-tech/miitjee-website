import { Phone, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Our Branches | MIITJEE Classes",
  description: "Find a MIITJEE classroom center near you. We have multiple branches across the city for your convenience.",
};

const BRANCHES = [
  {
    id: 1,
    name: "Sakchi — Main Centre",
    badge: "MAIN CENTRE",
    badgeColor: "gold",
    address: "H.No 40 SNP Area, Near Sakchi Golchakkar, Sakchi, Jamshedpur — 831001",
    phone: "+91 89060 00160",
    programs: ["JEE Main", "JEE Advanced", "NEET", "Foundation"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MIITJEE+Sakchi+Jamshedpur",
    established: "Est. 2001",
  },
  {
    id: 2,
    name: "Ranchi Centre",
    badge: "RANCHI",
    address: "102, Hari Om Tower, Lalpur, Ranchi-834001",
    phone: "+91 89060 00160",
    programs: ["JEE Main", "NEET", "Foundation"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hari+Om+Tower+Lalpur+Ranchi",
  },
  {
    id: 3,
    name: "Sundarnagar Centre",
    badge: "SUNDARNAGAR",
    address: "Little Heart School, Sundarnagar, Jamshedpur - 832111",
    phone: "+91 89060 00160",
    programs: ["JEE Main", "NEET", "Foundation"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+Heart+School+Sundarnagar+Jamshedpur",
  },
  {
    id: 4,
    name: "Baridih Centre",
    badge: "BARIDIH",
    address: "Sai Saraswati English School, Baridih, Jamshedpur - 831019",
    phone: "+91 89060 00160",
    programs: ["JEE Main", "NEET", "Foundation"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Saraswati+English+School+Baridih+Jamshedpur",
  },
  {
    id: 5,
    name: "Bistupur Centre",
    badge: "COMING SOON",
    address: "Bistupur, Jamshedpur",
    phone: "+91 89060 00160",
    programs: ["JEE Main", "NEET"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MIITJEE+Bistupur+Jamshedpur",
  },
];

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20 bg-[var(--navy)]">
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[var(--gold)] font-bold tracking-widest text-sm md:text-base uppercase mb-4 font-body">
            SINCE 2001 · EXPANDING ACROSS EASTERN INDIA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-tight mb-6 font-display" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
            Our Centres
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] font-body max-w-2xl mx-auto leading-relaxed">
            Centres across Jharkhand — Jamshedpur & Ranchi
          </p>
        </div>
      </section>

      {/* Branches Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRANCHES.map((branch) => (
              <div 
                key={branch.id} 
                className="card-hover p-[28px] rounded-[16px] flex flex-col bg-white border border-gray-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ 
                      backgroundColor: branch.badgeColor === 'gold' ? 'var(--gold)' : '#EFF6FF',
                      color: branch.badgeColor === 'gold' ? 'var(--navy)' : '#1D4ED8'
                    }}
                  >
                    {branch.badge}
                  </span>
                  {branch.established && (
                    <span className="text-gray-500 text-sm font-body">
                      {branch.established}
                    </span>
                  )}
                </div>

                <h2 className="text-[22px] text-gray-900 mb-2 font-display" style={{ fontWeight: 800 }}>
                  {branch.name}
                </h2>
                
                <p className="text-[15px] font-body mb-6 flex-grow text-gray-600" style={{ fontWeight: 400 }}>
                  {branch.address}
                </p>

                {/* Program Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {branch.programs.map(program => {
                    let pillBg = "#E5E7EB"; // gray-200
                    let pillText = "#374151"; // gray-700
                    
                    if (program.includes("JEE")) {
                      pillBg = "var(--gold)";
                      pillText = "var(--navy)";
                    } else if (program.includes("NEET")) {
                      pillBg = "var(--red)";
                      pillText = "white";
                    } else if (program.includes("Foundation")) {
                      pillBg = "#3B82F6"; // blue-500
                      pillText = "white";
                    }

                    return (
                      <span 
                        key={program}
                        className="text-xs font-bold px-3 py-1.5 rounded-[6px] whitespace-nowrap"
                        style={{ backgroundColor: pillBg, color: pillText }}
                      >
                        {program}
                      </span>
                    )
                  })}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-100">
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-lg font-bold hover:opacity-80 transition-opacity text-[var(--navy)]">
                    <Phone className="w-5 h-5" />
                    {branch.phone}
                  </a>
                  
                  <a 
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors border-2 hover:bg-gray-50"
                    style={{ borderColor: 'var(--navy)', color: 'var(--navy)', fontFamily: 'Montserrat' }}
                  >
                    Get Directions
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
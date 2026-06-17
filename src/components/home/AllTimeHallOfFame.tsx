import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  showButton?: boolean;
}

export function AllTimeHallOfFame({ showButton = true }: Props = {}) {
  return (
    <section className="py-12 md:py-16 bg-[var(--navy)] relative" id="jee-hall-of-fame">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-white font-display font-black text-4xl md:text-5xl mb-4">
            All-Time Hall of Fame
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Our consistent legacy of producing state and city toppers across decades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Topper 1 */}
          <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"></div>
            <span className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
              JEE
            </span>
            <div className="w-28 h-28 relative rounded-full mb-4 shadow-lg ring-4 ring-[var(--navy)] overflow-hidden bg-[var(--gold)]">
              <Image src="/hall-of-fame/vishnu.png" alt="Vishnu Kumar" fill className="object-cover object-top" />
            </div>
            <h3 className="text-white font-display font-extrabold text-xl mb-1">Vishnu Kumar</h3>
            <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">AIR 202 IIT Kharagpur</p>
            <p className="text-[var(--text-muted)] text-xs font-medium">1st Rank Jharkhand</p>
          </div>

          {/* Topper 2 */}
          <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden" id="neet-hall-of-fame">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--red)]"></div>
            <span className="inline-block bg-[var(--red)] text-white font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
              NEET
            </span>
            <div className="w-28 h-28 relative rounded-full mb-4 shadow-lg ring-4 ring-[var(--navy)] overflow-hidden bg-[var(--gold)]">
              <Image src="/hall-of-fame/ansh-jain.jpeg" alt="Ansh Jain" fill className="object-cover object-top" />
            </div>
            <h3 className="text-white font-display font-extrabold text-xl mb-1">Ansh Jain</h3>
            <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">670/720</p>
            <p className="text-[var(--text-muted)] text-xs font-medium">AIIMS Raipur</p>
          </div>

          {/* Topper 3 */}
          <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#22C55E]"></div>
            <span className="inline-block bg-[#22C55E] text-white font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
              Medical
            </span>
            <div className="w-28 h-28 relative rounded-full mb-4 shadow-lg ring-4 ring-[var(--navy)] overflow-hidden bg-[var(--gold)]">
              <Image src="/hall-of-fame/fauzia-sultam.png" alt="Fauzia Sultan" fill className="object-cover object-top" />
            </div>
            <h3 className="text-white font-display font-extrabold text-xl mb-1">Fauzia Sultan</h3>
            <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">607/720</p>
            <p className="text-[var(--text-muted)] text-xs font-medium">NEET Selection</p>
          </div>

          {/* Topper 4 */}
          <div className="bg-[var(--navy-mid)] rounded-2xl border border-[var(--navy-light)] p-6 card-hover flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gold)]"></div>
            <span className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold px-3 py-1 rounded-full text-xs tracking-wide mb-6 w-fit self-center">
              JEE
            </span>
            <div className="w-28 h-28 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-display font-black text-3xl mb-4 shadow-lg ring-4 ring-[var(--navy)]">
              PK
            </div>
            <h3 className="text-white font-display font-extrabold text-xl mb-1">Pabitra Kumar</h3>
            <p className="text-[var(--gold)] font-body font-semibold text-sm mb-2">IIT Guwahati</p>
            <p className="text-[var(--text-muted)] text-xs font-medium">JEE Advanced Selection</p>
          </div>
        </div>

        {/* View Results Button */}
        {showButton && (
          <div className="flex justify-center">
            <Link 
              href="/results" 
              className="inline-flex items-center justify-center py-4 px-8 bg-[var(--gold)] text-[var(--navy)] font-display font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
            >
              View All Results <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

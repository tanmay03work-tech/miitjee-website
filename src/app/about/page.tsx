import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StatsCounter from "@/components/about/StatsCounter";
import * as motion from "framer-motion/client";
import GalleryPreview from "@/components/home/GalleryPreview";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
  description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
  openGraph: {
    title: "About MIITJEE Classes | Best JEE NEET Coaching Patna",
    description: "Learn about MIITJEE Classes' journey, mission, and vision. We are committed to shaping the future of JEE and NEET aspirants with expert faculty and proven results.",
    type: "website",
    url: "https://miitjee.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIITJEE Classes",
      },
    ],
  },
};

export default async function AboutPage() {
  const supabase = await createClient();
  const { data: gallery } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .limit(8);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ABOUT HERO */}
      <section 
        className="relative flex items-center"
        style={{
          background: 'var(--navy)',
          minHeight: '80vh',
          paddingTop: 'calc(var(--nav-height) + 4rem)',
          paddingBottom: '4rem'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column (55% ~ 7 cols) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div 
                  className="inline-block px-4 py-1 rounded-full mb-6"
                  style={{
                    border: '1px solid var(--gold)',
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '2px'
                  }}
                >
                  EST. 3RD MARCH 2001
                </div>
                
                <h1 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(48px, 6vw, 72px)',
                    color: '#fff',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem'
                  }}
                >
                  26 Years of Creating<br/>
                  <span style={{ color: 'var(--gold)' }}>Champions</span>
                </h1>
                
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    marginBottom: '3rem'
                  }}
                >
                  MIITJEE was founded by Mr. Krishna Banerjee and Late Shailesh Verma 
                  with a single mission: to make IITs and medical colleges accessible to 
                  every deserving student in Eastern India.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/results" 
                    className="inline-flex items-center justify-center px-8 py-4 hover:scale-105"
                    style={{
                      background: 'var(--gold)',
                      color: 'var(--navy)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '16px',
                      borderRadius: '4px',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    Our Results
                  </Link>
                  <Link href="/apply" 
                    className="inline-flex items-center justify-center px-8 py-4 hover:bg-white/5"
                    style={{
                      background: 'transparent',
                      color: '#fff',
                      border: '2px solid rgba(255,255,255,0.2)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '16px',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Book Counselling
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column (45% ~ 5 cols) - Milestone Timeline */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div 
                className="absolute left-[11px] top-0 bottom-0"
                style={{ width: '2px', background: 'var(--gold)', opacity: 0.3 }}
              />
              
              <div className="space-y-12">
                {[
                  { year: '2001', title: 'Founded in Jamshedpur', desc: 'Started the journey on 3rd March' },
                  { year: '2009', title: 'No.1 Institute in Eastern India', desc: 'Achieved unprecedented success' },
                  { year: '2024', title: '1 Lakh+ Students Milestone', desc: 'A growing family of achievers' },
                  { year: '2026', title: 'JEE & NEET City Toppers', desc: 'Achieved in the same academic year' },
                ].map((milestone, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                    className="relative pl-12"
                  >
                    <div 
                      className="absolute left-0 top-2 w-6 h-6 rounded-full"
                      style={{ background: 'var(--navy)', border: '4px solid var(--gold)' }}
                    />
                    <div 
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '32px',
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {milestone.year}
                    </div>
                    <div 
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: 'var(--gold)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {milestone.title}
                    </div>
                    <div 
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {milestone.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--navy-mid)',
                borderTop: '4px solid var(--gold)',
                borderRadius: '8px',
                textAlign: 'center',
                overflow: 'hidden',
                maxWidth: '300px',
                margin: '0 auto'
              }}
            >

              <div className="w-full relative bg-white border-b-4 border-[var(--gold)] overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <Image
                  src="/images/founders/shailesh verma.jpg"
                  alt="Late Shailesh Verma"
                  fill
                  className="object-cover"
                  style={{ transform: 'scale(1.22)', transformOrigin: 'center 35%' }}
                />
              </div>

              <div style={{ padding: '1.5rem 1.5rem' }}>
              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}
              >
                Late Shailesh Verma
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Founder-Director
              </p>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: 'var(--text-muted)'
                }}
              >
                "Start early, Start fresh, Take a lead."
              </p>
              </div>
            </motion.div>

            {/* Right: Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: 'var(--navy)',
                  marginBottom: '2rem',
                  lineHeight: 1.2
                }}
              >
                Our Origins
              </h2>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8
                }}
              >
                MIITJEE was established on 3rd March 2001, by the vision & endeavor 
                of Mr. Krishna Banerjee and Late Shailesh Verma, with a mission & 
                sole objective to impart qualitative and result-oriented coaching for 
                JEE-MAIN + ADVANCED & NEET / AIIMS. Since then, the Institute has 
                carved a niche of unbelievable success.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* MISSION & VISION */}
      <section style={{ background: 'var(--navy)', padding: 'var(--section-pad)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid var(--navy-light)',
                borderLeft: '4px solid var(--gold)',
                padding: '3rem',
                borderRadius: '8px'
              }}
            >
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '24px',
                  color: '#fff',
                  marginBottom: '1rem'
                }}
              >
                Mission
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7
                }}
              >
                To take every JEE & NEET aspirant in Eastern India from aspiration 
                to admission — with world-class IITian faculty, small batches, and 
                26 years of proven methodology.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid var(--navy-light)',
                borderLeft: '4px solid var(--gold)',
                padding: '3rem',
                borderRadius: '8px'
              }}
            >
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '24px',
                  color: '#fff',
                  marginBottom: '1rem'
                }}
              >
                Vision
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7
                }}
              >
                To be synonymous with merit in Eastern India — the institute where 
                every future IITian and doctor begins their story.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <GalleryPreview images={gallery || []} />

      {/* CTA Section */}
      <section style={{ background: 'var(--off-white)', padding: 'var(--section-pad)', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--navy)',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '3rem'
            }}
          >
            Join the legacy of excellence and take the first step towards a brilliant career in engineering or medicine.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/apply" 
              className="inline-flex items-center gap-2 px-8 py-4 hover:scale-105"
              style={{
                background: 'var(--gold)',
                color: 'var(--navy)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '16px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
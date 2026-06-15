import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_EMAIL,
  PRIMARY_ADDRESS,
  WHATSAPP_LINK,
  SOCIAL_LINKS,
  FOOTER_LINKS,
} from "@/lib/constants/site";

// ─────────────────────────────────────────
// Social SVG Icons (lucide doesn't ship brand icons)
// ─────────────────────────────────────────
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="relative bg-[#060E1C] text-white border-t border-[var(--navy-light)] overflow-hidden"
    >
      {/* Background Texture & Glows */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div 
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" 
        style={{ background: 'radial-gradient(circle, rgba(255, 214, 0, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none translate-y-1/4 translate-x-1/4" 
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 95, 0.25) 0%, transparent 70%)' }}
      />

      {/* Gradient top divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)]" />

      {/* ── Main Footer Content ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ── Column 1: Logo & About ── */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="MIITJEE Logo"
                width={200}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-display text-[15px] font-bold text-[var(--gold)] mb-1">
              {SITE_TAGLINE}
            </p>
            <p className="text-xs font-medium text-white/50 mb-4 uppercase tracking-widest">
              Est. 3rd March 2001 · Jamshedpur, Jharkhand
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-md mb-6">
              Jharkhand&apos;s leading coaching institute for JEE, NEET, and
              Foundation programmes. Expert faculty, proven results, and
              personalised mentoring since 2001.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center size-9 rounded-full border border-white text-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center size-9 rounded-full border border-white text-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center size-9 rounded-full border border-white text-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-[12px] font-bold uppercase tracking-[2px] text-[var(--gold)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Programs ── */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-[12px] font-bold uppercase tracking-[2px] text-[var(--gold)] mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact + Branches ── */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-[12px] font-bold uppercase tracking-[2px] text-[var(--gold)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-[var(--gold)]" />
                  <span>{PRIMARY_ADDRESS}</span>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-[var(--gold)]" />
                  {PRIMARY_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <MessageCircle className="size-4 shrink-0 text-green-400" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <Mail className="size-4 shrink-0 text-[var(--gold)]" />
                  <span className="whitespace-nowrap">{PRIMARY_EMAIL}</span>
                </a>
              </li>
            </ul>

            {/* Branches sub-section */}
            <h3 className="font-display text-[12px] font-bold uppercase tracking-[2px] text-[var(--gold)] mt-6 mb-4">
              Branches
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.branches.map((branch) => (
                <li key={branch.label}>
                  <Link
                    href={branch.href}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                  >
                    <MapPin className="size-3.5 shrink-0 mt-0.5 text-[var(--gold)]" />
                    {branch.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 5: Location Map ── */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-[12px] font-bold uppercase tracking-[2px] text-[var(--gold)] mb-4">
              Location Map
            </h3>
            <div className="rounded-xl overflow-hidden h-48 w-full border border-white/10 bg-white/5 relative group">
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=MIITJEE+Sakchi+Jamshedpur" 
                target="_blank" 
                className="absolute top-2 left-2 z-10 bg-white text-[#1a73e8] text-sm font-medium px-3 py-1.5 rounded-sm shadow-md flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
              >
                Maps <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </Link>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6974797175485!2d86.20019687595562!3d22.813636579320295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3170e7e0e75%3A0xcda6b08fbdfd71c6!2sMIITJEE!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.2] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div className="border-t border-[var(--navy-light)] bg-[#060E1C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              © {currentYear} {SITE_NAME} Classes Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/apply"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/apply"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
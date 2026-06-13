"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ChevronRight,
} from "lucide-react";
import {
  NAV_ITEMS,
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
} from "@/lib/constants/site";
import type { NavItem, NavChild } from "@/lib/constants/site";

// ─────────────────────────────────────────
// Dropdown Animation Variants
// ─────────────────────────────────────────
const dropdownVariants: any = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.15 },
  },
};

const mobileDrawerVariants: any = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 200 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ─────────────────────────────────────────
// Desktop Dropdown
// ─────────────────────────────────────────
function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
  pathname,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  pathname: string;
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 150);
  };

  const isParentActive = pathname.startsWith(item.href);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id={`nav-dropdown-${item.label.toLowerCase().replace(/\s/g, "-")}`}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-brand-blue-dark/5 ${
          isParentActive
            ? "text-brand-blue-dark"
            : "text-gray-700"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {/* Active indicator */}
        {isParentActive && (
          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow-bright rounded-full" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white shadow-xl shadow-black/8 border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-2">
              {item.children.map((child) => (
                <DropdownItem
                  key={child.href}
                  child={child}
                  pathname={pathname}
                  onClick={onClose}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownItem({
  child,
  pathname,
  onClick,
}: {
  child: NavChild;
  pathname: string;
  onClick: () => void;
}) {
  const isActive = pathname === child.href || child.active;

  if (child.disabled) {
    return (
      <div
        className="flex items-start gap-3 px-3 py-2.5 rounded-lg opacity-50 cursor-not-allowed"
        aria-disabled="true"
      >
        <span className="text-lg mt-0.5 shrink-0">{child.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-400">
              {child.label}
            </span>
            {child.badge && (
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-brand-yellow-bright text-brand-blue-deep rounded-full">
                {child.badge}
              </span>
            )}
          </div>
          {child.description && (
            <p className="text-xs text-gray-400 mt-0.5">{child.description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={child.href}
      onClick={onClick}
      className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
        isActive
          ? "bg-brand-blue-dark/5"
          : "hover:bg-gray-50"
      }`}
    >
      <span className="text-lg mt-0.5 shrink-0">{child.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-brand-blue-dark"
                : "text-gray-700 group-hover:text-brand-blue-dark"
            }`}
          >
            {child.label}
          </span>
          {child.badge && (
            <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-brand-yellow-bright text-brand-blue-deep rounded-full">
              {child.badge}
            </span>
          )}
        </div>
        {child.description && (
          <p className="text-xs text-gray-500 mt-0.5">{child.description}</p>
        )}
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────
// Mobile Accordion Item
// ─────────────────────────────────────────
function MobileAccordionItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={`flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors border-b border-gray-100 ${
          pathname === item.href || pathname.startsWith(item.href + "/")
            ? "text-brand-blue-dark bg-brand-blue-dark/5"
            : "text-gray-800 hover:bg-gray-50"
        }`}
      >
        {item.label}
        {item.label === "Scholarship" && (
          <span className="text-xs text-gray-500 font-normal">(MANTHAN)</span>
        )}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between w-full px-4 py-3.5 text-base font-medium transition-colors ${
          pathname.startsWith(item.href)
            ? "text-brand-blue-dark bg-brand-blue-dark/5"
            : "text-gray-800 hover:bg-gray-50"
        }`}
      >
        {item.label}
        <ChevronRight
          className={`size-4 text-gray-400 transition-transform duration-200 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50/70 py-1">
              {item.children!.map((child) => (
                <MobileChildLink
                  key={child.href}
                  child={child}
                  pathname={pathname}
                  onClose={onClose}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileChildLink({
  child,
  pathname,
  onClose,
}: {
  child: NavChild;
  pathname: string;
  onClose: () => void;
}) {
  const isActive = pathname === child.href || child.active;

  if (child.disabled) {
    return (
      <div className="flex items-center gap-3 px-6 py-3 opacity-50 cursor-not-allowed">
        <span className="text-base">{child.icon}</span>
        <span className="text-sm text-gray-400">{child.label}</span>
        {child.badge && (
          <span className="ml-auto inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase bg-brand-yellow-bright text-brand-blue-deep rounded-full">
            {child.badge}
          </span>
        )}
      </div>
    );
  }

  return (
    <Link
      href={child.href}
      onClick={onClose}
      className={`flex items-center gap-3 px-6 py-3 transition-colors ${
        isActive
          ? "text-brand-blue-dark bg-brand-blue-dark/5"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="text-base">{child.icon}</span>
      <span className="text-sm font-medium">{child.label}</span>
    </Link>
  );
}

// ─────────────────────────────────────────
// MAIN NAVBAR COMPONENT
// ─────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full bg-white border-b border-brand-blue-dark transition-shadow duration-300 ${
        scrolled
          ? "shadow-md shadow-black/5"
          : "shadow-none"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ── Logo ── */}
          <Link
            href="/"
            id="navbar-logo"
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src="/logo.svg"
              alt="MIITJEE Logo"
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-brand-blue-dark/5 ${
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/")
                      ? "text-brand-blue-dark"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {(pathname === item.href ||
                    pathname.startsWith(item.href + "/")) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow-bright rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* ── Desktop CTA Buttons ── */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              id="navbar-call-btn"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-brand-blue-dark hover:bg-brand-blue-dark/5 rounded-lg transition-colors"
            >
              <Phone className="size-3.5" />
              <span className="hidden xl:inline">{PRIMARY_PHONE_DISPLAY}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Link
              href="/apply"
              id="navbar-apply-btn"
              className="inline-flex items-center px-5 py-2.5 text-sm font-heading font-bold bg-brand-yellow-bright text-brand-blue-deep rounded-lg hover:bg-brand-yellow-bright/80 transition-all hover:shadow-md hover:shadow-brand-yellow-bright/25 active:scale-[0.98]"
            >
              Apply Now
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center size-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-5 text-gray-700" />
            ) : (
              <Menu className="size-5 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 top-16 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={mobileDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-16 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                {/* Navigation Links */}
                <div className="flex-1">
                  {NAV_ITEMS.map((item) => (
                    <MobileAccordionItem
                      key={item.label}
                      item={item}
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </div>

                {/* Bottom CTA Buttons */}
                <div className="p-4 space-y-3 border-t border-gray-100">
                  <Link
                    href="/apply"
                    onClick={() => setMobileOpen(false)}
                    id="mobile-apply-btn"
                    className="flex items-center justify-center w-full py-3.5 font-heading font-bold text-base bg-brand-yellow-bright text-brand-blue-deep rounded-xl hover:bg-brand-yellow-bright/80 transition-all active:scale-[0.98]"
                  >
                    Apply Now
                  </Link>
                  <a
                    href={`tel:${PRIMARY_PHONE}`}
                    id="mobile-call-btn"
                    className="flex items-center justify-center gap-2 w-full py-3.5 font-medium text-base text-brand-blue-dark bg-white border-2 border-brand-blue-dark rounded-xl hover:bg-brand-blue-dark/5 transition-all"
                  >
                    <Phone className="size-4" />
                    📞 Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
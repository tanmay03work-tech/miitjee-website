"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  text: string;
}

export default function AnnouncementBar({ text }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user dismissed the announcement
    const dismissed = localStorage.getItem("miitjee_announcement_dismissed");
    if (dismissed !== text) {
      setIsVisible(true);
    }
  }, [text]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("miitjee_announcement_dismissed", text);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-r from-brand-yellow to-brand-yellow-bright text-brand-blue-deep py-2 px-4 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse text-brand-blue-dark flex-shrink-0" />
              <p className="text-xs sm:text-sm font-bold font-poppins text-center tracking-wide uppercase">
                {text}
              </p>
              <Sparkles className="w-4 h-4 animate-pulse text-brand-blue-dark flex-shrink-0 hidden sm:block" />
              <button
                onClick={handleDismiss}
                className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-deep/20"
                aria-label="Dismiss announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

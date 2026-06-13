"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants/site";

const bounceAnimation: any = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 1.5,
    },
  },
};

const pulseKeyframes: any = {
  scale: [1, 1.08, 1],
  transition: {
    duration: 2,
    repeat: 2,
    ease: "easeInOut",
    delay: 2.5,
  },
};

export default function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50" id="whatsapp-fab">
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 8, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 8, scale: 0.9 }}
          className="absolute bottom-full right-0 mb-2 whitespace-nowrap"
        >
          <div className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg">
            Chat with us
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        </motion.div>
      )}

      {/* FAB Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        variants={bounceAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      >
        <motion.div animate={pulseKeyframes}>
          <MessageCircle className="size-6" fill="white" strokeWidth={0} />
        </motion.div>
      </motion.a>

      {/* Ripple ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#25D366]/40"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{
          scale: [1, 1.5, 1.8],
          opacity: [0.4, 0.15, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: 3,
          delay: 2,
          ease: "easeOut",
        }}
      />
    </div>
  );
}
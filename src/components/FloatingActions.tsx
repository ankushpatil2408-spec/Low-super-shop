import React, { useState, useEffect } from "react";
import { STORE_CONTACT } from "../data";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp Button with pulsing green shadow */}
          <a
            href={`https://wa.me/${STORE_CONTACT.whatsapp.replace("+", "")}?text=Hello%20Low%20Price%20Super%20Shop%20Raver%21%20I%20have%20an%20inquiry%20about%20grocery%20items.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-400/40 hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-200 relative group"
            title="Chat on WhatsApp"
          >
            {/* Pulsing ring animation */}
            <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping -z-10" />
            <LucideIcon name="MessageCircle" className="w-6 h-6" />
            
            {/* Hover tooltip label */}
            <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow">
              WhatsApp Support
            </span>
          </a>

          {/* Call Now Button */}
          <a
            href={`tel:${STORE_CONTACT.phone}`}
            className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/40 hover:shadow-amber-500/50 hover:scale-110 transition-all duration-200 group"
            title="Call Store Admin"
          >
            <LucideIcon name="Phone" className="w-5 h-5 fill-current" />
            
            {/* Hover tooltip label */}
            <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow">
              Call Store
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

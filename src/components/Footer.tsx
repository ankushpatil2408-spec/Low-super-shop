import React, { useState } from "react";
import { STORE_CONTACT } from "../data";
import LucideIcon from "./LucideIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Why Shop With Us", href: "#why-choose-us" },
    { name: "Savings Calculator", href: "#calculator" },
    { name: "Store Gallery", href: "#gallery" },
    { name: "Ratings & Reviews", href: "#reviews" },
    { name: "Contact & Directions", href: "#contact" },
  ];

  const categoryLinks = [
    { name: "Fresh Grocery Grains", href: "#categories" },
    { name: "Household Daily Needs", href: "#categories" },
    { name: "Grooming & Personal Care", href: "#categories" },
    { name: "Packed Snacks & Biscuits", href: "#categories" },
    { name: "Refreshing Beverages", href: "#categories" },
    { name: "Cleaning Essentials", href: "#categories" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      {/* Footer background geometric shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-950/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Column Splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Store Intro (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <LucideIcon name="ShoppingCart" className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg text-white leading-tight">
                  {STORE_CONTACT.name}
                </span>
                <span className="block font-sans font-semibold text-[10px] tracking-wider uppercase text-emerald-400">
                  {STORE_CONTACT.type.split(" / ")[0]}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We are dedicated to offering Raver's households the highest quality groceries, packaging snacks, household needs, and kitchen supplies at unbeatable wholesale discount rates. Stop overpaying and shop smarter today!
            </p>

            {/* Social Media icons */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_CONTACT.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  aria-label="WhatsApp Store Support"
                >
                  <LucideIcon name="MessageCircle" className="w-4.5 h-4.5" />
                </a>
                <a
                  href={`tel:${STORE_CONTACT.phone}`}
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  aria-label="Call Store Administrator"
                >
                  <LucideIcon name="Phone" className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://maps.google.com/?q=IDBI+Bank,+Raver,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                  aria-label="Google Map Directions"
                >
                  <LucideIcon name="MapPin" className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Quick Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Category Highlights (2.5 Cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {categoryLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Sign-up (3 Cols) */}
          <div className="lg:col-span-3.5 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Deals Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive weekly SMS or WhatsApp discount flyers featuring premium grocery promotions at Raver.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 bg-emerald-950/50 border border-emerald-900 rounded-xl text-center text-xs text-emerald-400">
                ✓ Successfully subscribed to weekly offers!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-emerald-500 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider"
                >
                  Join Deals List
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Column: Copyright & Compliance */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs">
          <p className="text-slate-500 text-center md:text-left">
            © 2026 {STORE_CONTACT.name} • All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <span>•</span>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#categories" className="hover:text-emerald-400 transition-colors">Sitemap</a>
          </div>
          <p className="text-slate-500 text-center md:text-right">
            Opposite IDBI Bank, Raver, Maharashtra 425508
          </p>
        </div>

      </div>
    </footer>
  );
}

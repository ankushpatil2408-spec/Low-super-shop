import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS, STORE_CONTACT } from "../data";
import { ProductItem } from "../types";
import LucideIcon from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onSearchSelect?: (productId: string) => void;
}

export default function Header({ onSearchSelect }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Monitor page scroll to apply sleek styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = PRODUCTS.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      ).slice(0, 5); // Limit to top 5 results
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Click outside search listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (productId: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    if (onSearchSelect) {
      onSearchSelect(productId);
    }
  };

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Savings", href: "#calculator" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="store-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3 border-b border-emerald-50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo and Branding */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
              <LucideIcon name="ShoppingCart" className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-display font-bold text-lg sm:text-xl leading-tight text-gray-900 group-hover:text-emerald-700 transition-colors">
                Low Price
              </span>
              <span className="block font-sans font-semibold text-xs tracking-wider uppercase text-emerald-600">
                Super Shop
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Interactive Search Bar */}
          <div ref={searchRef} className="hidden md:block relative max-w-xs lg:max-w-sm w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search grocery & daily needs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full bg-slate-100/80 focus:bg-white text-slate-800 placeholder-slate-400 text-sm pl-9 pr-4 py-2 rounded-full border border-transparent focus:border-emerald-500 focus:outline-none transition-all"
              />
              <LucideIcon
                name="Search"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              />
            </div>

            {/* Live Search Results Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 left-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-96 overflow-y-auto"
                >
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                    <span>Low Price Deals Found</span>
                    <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full uppercase">
                      Best Rates
                    </span>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-50">
                      {searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleResultClick(item.id)}
                          className="p-3 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-3"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded-lg border border-slate-100 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-800 truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-400">
                              Qty: {item.unit} • {item.category}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="block text-sm font-bold text-emerald-600">
                              ₹{item.price}
                            </span>
                            <span className="block text-[10px] line-through text-slate-400">
                              ₹{item.originalPrice}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-sm text-slate-400">
                      No matching items found. Try searching "Rice", "Soap" or "Tea".
                    </div>
                  )}
                  <div className="p-2.5 bg-slate-50 text-center border-t border-slate-100">
                    <p className="text-[11px] text-slate-500">
                      Need anything else? Call us directly!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Actions (Call Now Button) */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${STORE_CONTACT.phone}`}
              className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md shadow-emerald-200 transition-colors"
            >
              <LucideIcon name="Phone" className="w-4 h-4" />
              <span>Call Store</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 lg:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[65px] bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Search Bar inside Mobile Menu */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search groceries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-100 text-slate-800 placeholder-slate-400 text-sm pl-9 pr-4 py-2.5 rounded-xl border border-transparent focus:border-emerald-500 focus:outline-none"
                  />
                  <LucideIcon
                    name="Search"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  />
                  {searchQuery.trim().length > 0 && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden z-50">
                      {searchResults.length > 0 ? (
                        <div className="divide-y divide-slate-50 max-h-60 overflow-y-auto">
                          {searchResults.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => {
                                handleResultClick(item.id);
                                setIsMobileMenuOpen(false);
                              }}
                              className="p-2.5 hover:bg-slate-50 transition-colors flex items-center gap-3 cursor-pointer"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-8 h-8 object-cover rounded"
                                referrerPolicy="no-referrer"
                              />
                              <div className="flex-1 min-w-0">
                                <h5 className="text-xs font-semibold text-slate-800 truncate">
                                  {item.name}
                                </h5>
                                <p className="text-[10px] text-slate-400">
                                  ₹{item.price} ({item.unit})
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-3 text-center text-xs text-slate-400">
                          No items found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-3">
                    Store Directory
                  </p>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <LucideIcon name="MapPin" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Our Location</p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Opp. IDBI Bank, Raver
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <LucideIcon name="Clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Store Hours</p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      8:30 AM to 10:00 PM
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${STORE_CONTACT.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-100 transition-colors text-sm"
                >
                  <LucideIcon name="Phone" className="w-4 h-4" />
                  <span>Call Store Now</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

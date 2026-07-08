/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import SavingsCalculator from "./components/SavingsCalculator";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [highlightedProductId, setHighlightedProductId] = useState<string | null>(null);

  // When someone clicks a search result in the header, scroll down to the categories section
  // and focus on the matching items
  const handleSearchSelect = (productId: string) => {
    setHighlightedProductId(productId);
    
    // Scroll smoothly to categories section
    const targetSection = document.getElementById("categories");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Reset highlighted state after some time
    setTimeout(() => {
      setHighlightedProductId(null);
    }, 4000);
  };

  return (
    <div id="app-root" className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Header */}
      <Header onSearchSelect={handleSearchSelect} />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Categories highlightedProductId={highlightedProductId} />
        <WhyChooseUs />
        <SavingsCalculator />
        <Gallery />
        <Reviews />
        <ContactMap />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating fast contact elements */}
      <FloatingActions />
    </div>
  );
}

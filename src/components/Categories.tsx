import React, { useState } from "react";
import { CATEGORIES, PRODUCTS, STORE_CONTACT } from "../data";
import { ProductItem, Category } from "../types";
import LucideIcon from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

interface CategoriesProps {
  highlightedProductId?: string | null;
}

export default function Categories({ highlightedProductId }: CategoriesProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("grocery");
  const [inquiryCart, setInquiryCart] = useState<{ [key: string]: number }>({});

  // Get active category's products
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === selectedCategoryId
  );

  const activeCategory = CATEGORIES.find((cat) => cat.id === selectedCategoryId);

  // Cart actions
  const addToCart = (productId: string) => {
    setInquiryCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setInquiryCart((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };

  const clearCart = () => {
    setInquiryCart({});
  };

  const cartItemKeys = Object.keys(inquiryCart);
  const totalCartCount = cartItemKeys.reduce((sum, key) => sum + inquiryCart[key], 0);

  // Calculate cart estimated total and savings
  let cartTotal = 0;
  let cartOriginalTotal = 0;
  cartItemKeys.forEach((id) => {
    const item = PRODUCTS.find((p) => p.id === id);
    if (item) {
      cartTotal += item.price * inquiryCart[id];
      cartOriginalTotal += item.originalPrice * inquiryCart[id];
    }
  });
  const cartSavings = cartOriginalTotal - cartTotal;

  // Build Whatsapp inquiry link text
  const generateWhatsAppLink = () => {
    let text = `Hello Low Price Super Shop Raver,\nI want to inquire about buying these daily items:\n\n`;
    cartItemKeys.forEach((id, index) => {
      const item = PRODUCTS.find((p) => p.id === id);
      if (item) {
        text += `${index + 1}. ${item.name} (${item.unit}) x ${inquiryCart[id]} - ₹${item.price * inquiryCart[id]}\n`;
      }
    });
    text += `\n*Total Estimated Price:* ₹${cartTotal}\n*You Saved:* ₹${cartSavings}!\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/${STORE_CONTACT.whatsapp.replace("+", "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="categories" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            OUR DEPARTMENTS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Browse Our Store Categories
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Click on a category card below to browse featured products and compare our low prices directly with typical retail rates!
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Categories Navigation Grid (8 categories requested) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategoryId === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl text-left border relative overflow-hidden transition-all group ${
                  isActive
                    ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-200 border-transparent"
                    : "bg-white border-slate-100 hover:border-emerald-300 text-slate-700 hover:shadow-md"
                }`}
              >
                {/* Background image preview with soft transparency */}
                <div className={`absolute right-0 bottom-0 w-16 h-16 opacity-10 rounded-tl-full overflow-hidden`}>
                  <img src={category.image} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col h-full justify-between gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <LucideIcon name={category.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-snug group-hover:text-emerald-600 group-hover:dark:text-white transition-colors">
                      {category.name}
                    </h3>
                    <p
                      className={`text-[10px] mt-1 line-clamp-2 ${
                        isActive ? "text-emerald-100" : "text-slate-400"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Department Showcase and Interactive Shopping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Products Grid (9 Cols / 12 Cols if cart empty) */}
          <div className={`${totalCartCount > 0 ? "lg:col-span-8" : "lg:col-span-12"} space-y-6`}>
            
            {/* Header info for category products */}
            {activeCategory && (
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                    Showing Department
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 flex items-center gap-2 mt-1">
                    <LucideIcon name={activeCategory.iconName} className="w-5 h-5 text-emerald-500" />
                    <span>{activeCategory.name} Essentials</span>
                  </h3>
                </div>
                <div className="text-xs bg-amber-50 text-amber-800 border border-amber-200/50 px-3 py-1.5 rounded-full font-semibold">
                  🏷️ Average savings of 15% to 25% here
                </div>
              </div>
            )}

            {/* List of Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => {
                  const qty = inquiryCart[product.id] || 0;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={product.id}
                      className={`bg-white rounded-2xl overflow-hidden border transition-all ${
                        qty > 0
                          ? "border-emerald-500 ring-2 ring-emerald-500/10 shadow-lg shadow-emerald-50"
                          : "border-slate-100 hover:border-slate-200 hover:shadow-md"
                      }`}
                    >
                      {/* Product Image Section */}
                      <div className="h-44 bg-slate-50 relative overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-3 left-3 bg-red-500 text-white font-display font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase shadow-sm">
                          Save ₹{product.originalPrice - product.price}
                        </div>
                        {product.isPopular && (
                          <div className="absolute top-3 right-3 bg-emerald-600 text-white font-display text-[9px] font-bold px-2.5 py-1 rounded-full uppercase shadow-sm">
                            Best Seller
                          </div>
                        )}
                      </div>

                      {/* Content Card Info */}
                      <div className="p-4 space-y-3.5">
                        <div className="space-y-1">
                          <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug line-clamp-1">
                            {product.name}
                          </h4>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                            Unit: {product.unit}
                          </span>
                        </div>

                        {/* Price Display comparison */}
                        <div className="flex items-end justify-between py-1 bg-slate-50/50 rounded-xl px-2.5 border border-slate-50">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-semibold leading-none">
                              Market Rate
                            </span>
                            <span className="text-xs font-semibold text-slate-400 line-through">
                              ₹{product.originalPrice}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-emerald-600 block font-bold leading-none">
                              Our Low Price
                            </span>
                            <span className="text-base sm:text-lg font-black text-emerald-600">
                              ₹{product.price}
                            </span>
                          </div>
                        </div>

                        {/* Add to Inquiry list action */}
                        <div className="flex items-center gap-2 pt-1.5">
                          {qty > 0 ? (
                            <div className="flex items-center justify-between w-full bg-emerald-50 rounded-xl border border-emerald-200 p-1">
                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center font-bold text-base focus:outline-none"
                              >
                                -
                              </button>
                              <span className="font-bold text-emerald-800 text-sm">{qty} in cart</span>
                              <button
                                onClick={() => addToCart(product.id)}
                                className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center font-bold text-base focus:outline-none"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(product.id)}
                              className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-50 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                              <LucideIcon name="ShoppingCart" className="w-4 h-4" />
                              <span>Add to Inquiry</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Dynamic WhatsApp Cart Widget (3 Cols - Sticky inside Grid) */}
          <AnimatePresence>
            {totalCartCount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl lg:sticky lg:top-24 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <LucideIcon name="ShoppingCart" className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                        Your Inquiries
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {totalCartCount} items selected
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:text-red-600 font-bold hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {/* Items in cart list */}
                <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1">
                  {cartItemKeys.map((id) => {
                    const item = PRODUCTS.find((p) => p.id === id);
                    if (!item) return null;
                    const qty = inquiryCart[id];
                    return (
                      <div key={id} className="flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2 min-w-0">
                          <img
                            src={item.image}
                            alt=""
                            className="w-8 h-8 rounded-md object-cover border border-slate-50 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-slate-800 truncate">
                              {item.name}
                            </span>
                            <span className="block text-[10px] text-slate-400">
                              ₹{item.price} x {qty}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => removeFromCart(id)}
                            className="w-5 h-5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-[10px] font-bold"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-slate-800 w-4 text-center">
                            {qty}
                          </span>
                          <button
                            onClick={() => addToCart(id)}
                            className="w-5 h-5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-[10px] font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Totals and Saving Callout */}
                <div className="space-y-3 bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100 text-sm">
                  <div className="flex justify-between font-medium text-slate-600">
                    <span>Regular Market Total:</span>
                    <span className="line-through text-slate-400">₹{cartOriginalTotal}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800 text-base border-t border-emerald-100/50 pt-2">
                    <span>Our Low Price Total:</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="text-center bg-emerald-600 text-white rounded-lg py-1.5 px-3 text-[11px] font-bold uppercase tracking-wider mt-1.5">
                    🎉 You save ₹{cartSavings} at our store!
                  </div>
                </div>

                {/* WhatsApp checkout button */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-colors text-xs sm:text-sm text-center"
                >
                  <LucideIcon name="MessageCircle" className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </a>

                <p className="text-[10px] text-slate-400 text-center leading-normal">
                  Note: Clicking this button loads a direct chat with pre-written list. No card details or online payment needed. Collect at counter!
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

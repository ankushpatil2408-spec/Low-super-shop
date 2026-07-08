import React, { useState } from "react";
import { REVIEWS } from "../data";
import { Review } from "../types";
import LucideIcon from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeFilter, setActiveFilter] = useState<number | "All">("All");

  // Form states
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [tag, setTag] = useState("Local Customer");
  const [hoverRating, setHoverRating] = useState(0);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  // Handle Review submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      return;
    }

    const newReview: Review = {
      id: `custom_${Date.now()}`,
      name: name,
      rating: rating,
      text: text,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150`, // generic high quality face
      tag: tag || "Verified Local Buyer",
    };

    setReviewsList((prev) => [newReview, ...prev]);
    setName("");
    setText("");
    setRating(5);
    setTag("Local Customer");
    setIsSuccessMessage(true);

    setTimeout(() => {
      setIsSuccessMessage(false);
    }, 5000);
  };

  // Filter reviews
  const filteredReviews = reviewsList.filter((rev) => {
    if (activeFilter === "All") return true;
    return rev.rating === activeFilter;
  });

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Read real, heartfelt experiences from families and business buyers who buy their monthly provisions here.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Filters and Layout Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reviews List & Stats Filter (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Aggregate Stats Filter Row */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-display font-extrabold text-emerald-600">4.9</div>
                <div>
                  <div className="flex items-center text-amber-400">
                    <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                    <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                    <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                    <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                    <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-[11px] text-slate-400">Based on local customer ratings</p>
                </div>
              </div>

              {/* Toggle Stars filters */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => setActiveFilter("All")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    activeFilter === "All" ? "bg-emerald-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  All ({reviewsList.length})
                </button>
                {[5, 4].map((star) => {
                  const count = reviewsList.filter((r) => r.rating === star).length;
                  return (
                    <button
                      key={star}
                      onClick={() => setActiveFilter(star)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                        activeFilter === star ? "bg-emerald-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span>{star}</span>
                      <LucideIcon name="Star" className="w-3 h-3 fill-current" />
                      <span>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* List of Reviews with animations */}
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((review) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      key={review.id}
                      className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm relative space-y-4"
                    >
                      {/* Avatar & User Details */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-11 h-11 rounded-full object-cover border-2 border-slate-100"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight">
                              {review.name}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                {review.tag}
                              </span>
                              <span className="text-[10px] text-slate-400 font-medium">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Star Rating Display */}
                        <div className="flex items-center text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <LucideIcon
                              key={i}
                              name="Star"
                              className={`w-3.5 h-3.5 ${
                                i < review.rating ? "fill-current" : "text-slate-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Copy */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                        "{review.text}"
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <div className="bg-white p-12 text-center text-sm text-slate-400 rounded-3xl border border-slate-100">
                    No reviews fit the selected star rating. Be the first to post a new review!
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Form to Add Review (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg">
            <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl border-b border-slate-50 pb-4 flex items-center gap-2">
              <LucideIcon name="MessageCircle" className="w-5 h-5 text-emerald-600" />
              <span>Share Your Experience</span>
            </h3>

            {isSuccessMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-6 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-sm text-emerald-800 space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <LucideIcon name="Check" className="w-6 h-6" />
                </div>
                <h4 className="font-bold">Review Posted Successfully!</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Thank you so much! Your review has been added live to our local board for everyone to see.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-5 mt-6">
                
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="user-name" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Your Full Name
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="Enter your name (e.g. Anand Patil)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-slate-800 placeholder-slate-400 text-sm px-4 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Rating Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 focus:outline-none focus:ring-0 transition-transform hover:scale-110"
                      >
                        <LucideIcon
                          name="Star"
                          className={`w-7 h-7 ${
                            star <= (hoverRating || rating)
                              ? "text-amber-400 fill-current"
                              : "text-slate-200"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-400 ml-2">
                      ({rating} out of 5)
                    </span>
                  </div>
                </div>

                {/* Tag Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="user-tag" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Who are you? (Visitor Label)
                  </label>
                  <select
                    id="user-tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-slate-800 text-sm px-4 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all"
                  >
                    <option value="Local Resident">Local Resident</option>
                    <option value="Regular Shopper">Regular Shopper</option>
                    <option value="Verified Family Buyer">Verified Family Buyer</option>
                    <option value="Daily Needs Buyer">Daily Needs Buyer</option>
                    <option value="Wholesale Buyer">Wholesale Buyer</option>
                  </select>
                </div>

                {/* Review Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="user-review" className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Your Honest Feedback
                  </label>
                  <textarea
                    id="user-review"
                    required
                    rows={4}
                    placeholder="Describe your shopping experience, saving amounts, and staff support details..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-slate-800 placeholder-slate-400 text-sm px-4 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-100 hover:shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider"
                >
                  Submit Live Review
                </button>

                <p className="text-[10px] text-slate-400 text-center leading-normal">
                  *Your privacy is important. Submissions will be posted onto the client demonstration screen immediately without harvesting telemetry.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

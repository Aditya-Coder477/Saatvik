"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp, Camera, Filter } from "lucide-react";
import { reviews } from "@/data/reviews";
import { products } from "@/data/products";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const filtered = filterRating ? reviews.filter((r) => r.rating === filterRating) : reviews;
  const photoReviews = reviews.filter((r) => r.photos.length > 0);

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const ratingBreakdown = [5, 4, 3, 2, 1].map((r) => ({
    stars: r,
    count: reviews.filter((rev) => rev.rating === r).length,
    pct: Math.round((reviews.filter((rev) => rev.rating === r).length / reviews.length) * 100),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Voices</p>
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">Customer Reviews</h1>
        <p className="text-sm text-earth">Real stories from the Saatvik community</p>
      </div>

      {/* Photo Gallery */}
      {photoReviews.length > 0 && (
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4 flex items-center gap-2">
            <Camera size={16} className="text-gold" /> Customer Photos
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {photoReviews.flatMap((r) => r.photos).map((photo, i) => (
              <div key={i} className="aspect-square overflow-hidden img-zoom">
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Summary Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-cream p-6 mb-6">
            <div className="text-center mb-4">
              <p className="font-serif text-4xl text-charcoal">{avgRating}</p>
              <div className="flex justify-center gap-0.5 my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.round(Number(avgRating)) ? "fill-gold text-gold" : "text-sand"} />
                ))}
              </div>
              <p className="text-xs text-earth">{reviews.length} reviews</p>
            </div>
            <div className="space-y-2">
              {ratingBreakdown.map((r) => (
                <button
                  key={r.stars}
                  onClick={() => setFilterRating(filterRating === r.stars ? null : r.stars)}
                  className={`flex items-center gap-2 w-full text-left group ${filterRating === r.stars ? "font-medium" : ""}`}
                >
                  <span className="text-xs w-2 text-earth">{r.stars}</span>
                  <Star size={10} className="fill-gold text-gold" />
                  <div className="flex-1 h-2 bg-sand rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-xs text-earth w-8 text-right">{r.count}</span>
                </button>
              ))}
            </div>
          </div>

          {filterRating && (
            <button onClick={() => setFilterRating(null)} className="text-xs text-gold hover:text-gold-dark w-full text-center">
              Clear filter
            </button>
          )}
        </div>

        {/* Reviews List */}
        <div className="md:col-span-3 space-y-6">
          {filtered.map((review, i) => {
            const product = products.find((p) => p.id === review.productId);
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-sand pb-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className={j < review.rating ? "fill-gold text-gold" : "text-sand"} />
                      ))}
                    </div>
                    <h4 className="font-medium text-sm text-charcoal">{review.title}</h4>
                  </div>
                  <span className="text-xs text-earth">{new Date(review.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>

                <p className="text-sm text-earth leading-relaxed mb-3">{review.body}</p>

                {review.photos.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.photos.map((p, j) => (
                      <img key={j} src={p} alt="" className="w-20 h-20 object-cover rounded" />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-earth">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blush rounded-full flex items-center justify-center text-[10px] font-medium text-earth">{review.avatar}</div>
                      <span className="font-medium text-charcoal">{review.author}</span>
                    </div>
                    {product && <span>on {product.name}</span>}
                    <span>· Size {review.size}</span>
                    <span className="hidden sm:inline bg-cream px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">{review.fitFeedback.replace(/-/g, " ")}</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-earth hover:text-gold transition-colors">
                    <ThumbsUp size={12} /> {review.helpful}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

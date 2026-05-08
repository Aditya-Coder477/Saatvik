"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getFeaturedReviews } from "@/data/reviews";

export default function ReviewsPreview() {
  const featured = getFeaturedReviews(3);

  return (
    <section className="py-16 md:py-24 px-4 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Voices</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 relative"
            >
              <Quote size={24} className="text-sand mb-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < review.rating ? "fill-gold text-gold" : "text-sand"}
                  />
                ))}
              </div>
              <h4 className="font-serif text-base text-charcoal mb-2">{review.title}</h4>
              <p className="text-sm text-earth leading-relaxed mb-4">{review.body}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-sand">
                <div className="w-9 h-9 bg-blush rounded-full flex items-center justify-center text-xs font-medium text-earth">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">{review.author}</p>
                  <p className="text-xs text-earth">Size {review.size} · {review.fitFeedback.replace(/-/g, " ")}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

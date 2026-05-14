"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { getFeaturedReviews } from "@/data/reviews";
import Link from "next/link";

const cardAccents = [
  { border: "#E8614A", avatar: "from-coral to-peach" },
  { border: "#A78BCA", avatar: "from-lavender to-warm-pink" },
  { border: "#7FAF8A", avatar: "from-sage-green to-lavender" },
];

export default function ReviewsPreview() {
  const featured = getFeaturedReviews(3);

  return (
    <section className="py-16 md:py-24 px-4 bg-section-lavender">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-lavender mb-3 font-medium">Voices</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">
            What Our <span className="italic gradient-text-lavender">Customers</span> Say
          </h2>
          <p className="text-sm text-earth">Real stories from real Saatvik shoppers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 md:p-8 relative shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderTop: `3px solid ${cardAccents[i].border}` }}
            >
              {/* Quote */}
              <Quote
                size={28}
                className="mb-4 opacity-20"
                style={{ color: cardAccents[i].border }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className={j < review.rating ? "fill-mustard text-mustard" : "text-sand"}
                  />
                ))}
              </div>

              <h4 className="font-serif text-lg text-charcoal mb-2">{review.title}</h4>
              <p className="text-sm text-earth leading-relaxed mb-5">{review.body}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sand">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${cardAccents[i].border}, ${
                      i === 0 ? "#F4A57B" : i === 1 ? "#E8829A" : "#A78BCA"
                    })`,
                  }}
                >
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-charcoal">{review.author}</p>
                    <BadgeCheck size={14} className="text-sage-green fill-sage-green" />
                  </div>
                  <p className="text-xs text-earth">
                    Size {review.size} · {review.fitFeedback.replace(/-/g, " ")}
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-wider bg-sage-green/15 text-sage-green font-semibold px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm text-lavender font-medium hover:text-charcoal transition-colors border-b border-lavender/40 hover:border-charcoal pb-0.5"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StoryTeaser() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80"
            alt="Saatvik artisan craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
            Rooted in Tradition,<br />Designed for Today
          </h2>
          <div className="w-12 h-[1px] bg-gold mb-6" />
          <p className="text-earth leading-relaxed mb-4">
            Saatvik was born from a belief that purity and elegance are timeless. We bring together India&apos;s finest artisan traditions — from Lucknowi Chikankari to Chanderi silk — with modern silhouettes that move with the contemporary woman.
          </p>
          <p className="text-earth leading-relaxed mb-8">
            Every piece in our collection is thoughtfully curated, ethically crafted, and designed to make you feel as beautiful as the heritage behind it.
          </p>
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors group font-medium"
          >
            Read Our Story
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

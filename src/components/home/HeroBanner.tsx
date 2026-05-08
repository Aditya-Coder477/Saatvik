"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-sand">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
          alt="Saatvik Collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-gold mb-4 font-sans"
          >
            New Collection 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6"
          >
            Where Heritage
            <br />
            Meets <span className="italic text-blush">Modernity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/80 text-base md:text-lg mb-8 leading-relaxed font-light max-w-md"
          >
            Curated fashion that blends the richness of Indian artistry with contemporary elegance. Pure, premium, refined.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/category/traditional"
              className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold hover:text-white transition-all duration-300 group"
            >
              Shop New In
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-white/10 transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

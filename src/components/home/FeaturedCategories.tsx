"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Featured Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link
              href={`/category/${cat.slug}`}
              className="group block relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                  {cat.productCount} Pieces
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  {cat.name}
                </h3>
                <p className="text-sm text-cream/70 mb-5 max-w-sm leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream group-hover:text-gold transition-colors">
                  Explore Collection
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

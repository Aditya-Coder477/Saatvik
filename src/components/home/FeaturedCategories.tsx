"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-coral mb-3 font-medium">Explore</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Featured <span className="italic gradient-text-coral">Collections</span>
            </h2>
          </div>
          <p className="text-sm text-earth max-w-xs leading-relaxed">
            Handcrafted traditional wear meets contemporary design. Discover your perfect look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
            >
              <Link
                href={`/category/${cat.slug}`}
                className={`group block relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[4/3] md:col-span-2 lg:col-span-2 lg:row-span-2" : "aspect-[3/4]"
                }`}
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />

                {/* Color accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: [
                      "linear-gradient(to top, rgba(232,97,74,0.35), transparent)", // Coral
                      "linear-gradient(to top, rgba(123,29,42,0.35), transparent)", // Maroon
                      "linear-gradient(to top, rgba(244,165,123,0.35), transparent)", // Peach
                      "linear-gradient(to top, rgba(127,175,138,0.35), transparent)", // Sage
                      "linear-gradient(to top, rgba(167,139,202,0.35), transparent)", // Lavender
                    ][i % 5],
                  }}
                />

                {/* Product count pill */}
                <div className="absolute top-5 right-5">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                    style={{
                      background: [
                        "linear-gradient(135deg, #E8614A, #F4A57B)",
                        "linear-gradient(135deg, #7B1D2A, #C94830)",
                        "linear-gradient(135deg, #D4A72C, #F4A57B)",
                        "linear-gradient(135deg, #7FAF8A, #C5CFC6)",
                        "linear-gradient(135deg, #A78BCA, #E8829A)",
                      ][i % 5],
                    }}
                  >
                    {cat.productCount} Pieces
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-cream/70 mb-6 max-w-xs leading-relaxed">
                    {cat.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
                    style={{
                      background: [
                        "linear-gradient(135deg, #E8614A, #F4A57B)",
                        "linear-gradient(135deg, #7B1D2A, #C94830)",
                        "linear-gradient(135deg, #D4A72C, #F4A57B)",
                        "linear-gradient(135deg, #7FAF8A, #C5CFC6)",
                        "linear-gradient(135deg, #A78BCA, #E8829A)",
                      ][i % 5],
                      color: "white",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    }}
                  >
                    Explore Collection
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

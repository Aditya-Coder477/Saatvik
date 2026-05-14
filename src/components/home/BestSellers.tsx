"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { getBestSellers } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-16 md:py-24 px-4 bg-section-peach">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame size={14} className="text-coral fill-coral" />
              <p className="text-xs uppercase tracking-[0.3em] text-coral font-semibold">Most Loved</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              <span className="gradient-text-coral">Best</span>{" "}
              <span className="italic">Sellers</span>
            </h2>
          </div>
          <Link
            href="/category/traditional?sort=popularity"
            className="hidden sm:inline-flex items-center gap-2 btn-coral rounded-full text-xs px-5 py-2.5"
          >
            View All
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto scroll-hidden px-4 pb-4 snap-x-mandatory -mx-4 md:mx-0">
          {products.map((product, i) => (
            <div key={product.id} className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[28vw] lg:w-[22vw] snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="sm:hidden text-center mt-10">
          <Link
            href="/category/traditional?sort=popularity"
            className="inline-flex items-center gap-2 btn-coral rounded-full px-6 py-3"
          >
            View All Best Sellers <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

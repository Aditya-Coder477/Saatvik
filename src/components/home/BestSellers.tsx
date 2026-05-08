"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBestSellers } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Best Sellers</h2>
          </div>
          <Link
            href="/category/traditional?sort=popularity"
            className="hidden sm:inline-flex items-center gap-2 text-sm uppercase tracking-wider text-earth hover:text-gold transition-colors group"
          >
            View All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            href="/category/traditional?sort=popularity"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-earth hover:text-gold transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

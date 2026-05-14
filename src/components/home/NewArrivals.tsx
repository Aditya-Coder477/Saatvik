"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { getNewArrivals } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function NewArrivals() {
  const products = getNewArrivals();

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-coral fill-coral" />
              <p className="text-xs uppercase tracking-[0.3em] text-coral font-semibold">Just Landed</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              New <span className="italic gradient-text-coral">Arrivals</span>
            </h2>
          </div>
          <Link
            href="/category/new-arrivals"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-charcoal hover:text-coral transition-colors group"
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

        <div className="sm:hidden text-center mt-10">
          <Link
            href="/category/new-arrivals"
            className="inline-flex items-center gap-2 btn-coral rounded-full px-6 py-3"
          >
            View All New Arrivals <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

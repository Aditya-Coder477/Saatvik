"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/helpers";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-lift"
    >
      {/* Image */}
      <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-sand mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Hover second image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.includes("new") && (
            <span className="bg-charcoal text-cream text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
              New
            </span>
          )}
          {product.badges.includes("best-seller") && (
            <span className="bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
              Best Seller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-blush text-charcoal text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product); }}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            className={wishlisted ? "fill-gold text-gold" : "text-charcoal"}
          />
        </button>

        {/* Quick view hint */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm text-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
          <span className="text-xs uppercase tracking-widest text-charcoal font-medium">Quick View</span>
        </div>
      </Link>

      {/* Info */}
      <div className="px-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-base text-charcoal mb-1 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-earth mb-2 uppercase tracking-wider">{product.subcategory}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-charcoal">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-earth line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-gold text-gold" />
            <span className="text-xs text-earth">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

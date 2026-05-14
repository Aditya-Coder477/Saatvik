"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, Eye, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/helpers";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeConfig: Record<string, { label: string; style: React.CSSProperties }> = {
  new: {
    label: "New",
    style: {
      background: "linear-gradient(135deg, #E8614A, #F4A57B)",
      color: "white",
    },
  },
  "best-seller": {
    label: "Best Seller",
    style: {
      background: "linear-gradient(135deg, #D4A72C, #E8C05A)",
      color: "white",
    },
  },
  "limited-edition": {
    label: "Limited",
    style: {
      background: "linear-gradient(135deg, #A78BCA, #E8829A)",
      color: "white",
    },
  },
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const router = useRouter();
  const wishlisted = isInWishlist(product.id);
  const [wishlistAnimating, setWishlistAnimating] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    setWishlistAnimating(true);
    setTimeout(() => setWishlistAnimating(false), 500);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes.find((s) => s.available)?.label || "M";
    const defaultColor = product.colors[0]?.name || "";
    addItem(product, defaultSize, defaultColor, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-lift"
    >
      {/* Image container */}
      <Link
        href={`/product/${product.id}`}
        className="block relative aspect-[3/4] overflow-hidden bg-sand mb-4 rounded-xl"
      >
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Secondary image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-600"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.map((badge) => {
            const config = badgeConfig[badge];
            if (!config) return null;
            return (
              <span
                key={badge}
                className="text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-md"
                style={config.style}
              >
                {config.label}
              </span>
            );
          })}
          {discountPct && (
            <span
              className="text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold rounded-md pulse-badge"
              style={{
                background: "linear-gradient(135deg, #E8829A, #F4A57B)",
                color: "white",
              }}
            >
              {discountPct}% Off
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-300 ${
            wishlisted
              ? "opacity-100 scale-100"
              : "opacity-0 group-hover:opacity-100 hover:scale-110"
          }`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={15}
            className={`transition-all duration-300 ${
              wishlistAnimating ? "heart-pulse" : ""
            } ${wishlisted ? "fill-coral text-coral" : "text-charcoal"}`}
          />
        </button>

        {/* Bottom hover actions */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex">
            <button
              onClick={handleQuickAdd}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 text-[10px] uppercase tracking-widest font-semibold text-white transition-all duration-200"
              style={{
                background: addedToCart
                  ? "linear-gradient(135deg, #7FAF8A, #A3C9AD)"
                  : "linear-gradient(135deg, #E8614A, #F4A57B)",
              }}
            >
              <ShoppingBag size={12} />
              {addedToCart ? "Added!" : "Quick Add"}
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push(`/product/${product.id}`); }}
              className="w-11 flex items-center justify-center bg-white/90 backdrop-blur-sm text-charcoal hover:text-coral transition-colors border-l border-white/30"
            >
              <Eye size={14} />
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="px-0.5">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-base md:text-lg text-charcoal mb-1 group-hover:text-coral transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] text-earth mb-2.5 uppercase tracking-wider">{product.subcategory}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-charcoal">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-earth line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-mustard text-mustard" />
            <span className="text-xs text-earth font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

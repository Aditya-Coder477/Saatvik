"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, X } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/helpers";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const moveToCart = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      const defaultSize = item.product.sizes.find((s) => s.available)?.label || "M";
      const defaultColor = item.product.colors[0]?.name || "";
      addItem(item.product, defaultSize, defaultColor);
      removeItem(productId);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <Heart size={48} className="text-sand mb-6" />
        <h1 className="font-serif text-2xl text-charcoal mb-3">Your wishlist is empty</h1>
        <p className="text-sm text-earth mb-8">Save the pieces you love for later.</p>
        <Link href="/category/traditional" className="bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-colors">
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="font-serif text-3xl text-charcoal mb-2">Wishlist</h1>
      <p className="text-sm text-earth mb-8">{items.length} saved {items.length === 1 ? "item" : "items"}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group"
          >
            <Link href={`/product/${item.product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-sand mb-3">
              <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <button
                onClick={(e) => { e.preventDefault(); removeItem(item.product.id); }}
                className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <X size={14} className="text-charcoal" />
              </button>
            </Link>

            <h3 className="font-serif text-sm text-charcoal mb-1">{item.product.name}</h3>
            <p className="text-sm text-charcoal font-medium mb-3">{formatPrice(item.product.price)}</p>

            <button
              onClick={() => moveToCart(item.product.id)}
              className="w-full flex items-center justify-center gap-2 border border-charcoal text-charcoal py-2.5 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-all"
            >
              <ShoppingBag size={12} /> Move to Bag
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

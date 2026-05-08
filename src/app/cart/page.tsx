"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/helpers";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, shipping, total } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;

  const upsellProducts = products.filter((p) => !items.some((i) => i.product.id === p.id)).slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <ShoppingBag size={48} className="text-sand mb-6" />
        <h1 className="font-serif text-2xl text-charcoal mb-3">Your bag is empty</h1>
        <p className="text-sm text-earth mb-8">Discover our curated collections and find something you love.</p>
        <Link href="/category/traditional" className="bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="font-serif text-3xl text-charcoal mb-8">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={`${item.product.id}-${item.size}-${item.color}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 md:gap-6 pb-6 border-b border-sand"
            >
              <Link href={`/product/${item.product.id}`} className="w-24 md:w-32 aspect-[3/4] flex-shrink-0 overflow-hidden bg-sand">
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/product/${item.product.id}`} className="font-serif text-base text-charcoal hover:text-gold transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-earth mt-1">Size: {item.size} · Color: {item.color}</p>
                  </div>
                  <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="p-1 text-earth hover:text-charcoal transition-colors">
                    <X size={16} />
                  </button>
                </div>

                <div className="flex items-end justify-between mt-4">
                  <div className="flex items-center border border-sand">
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-2 text-earth hover:text-charcoal">
                      <Minus size={12} />
                    </button>
                    <span className="px-3 text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-2 text-earth hover:text-charcoal">
                      <Plus size={12} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-charcoal">{formatPrice(item.product.price * item.quantity)}</p>
                    {item.quantity > 1 && <p className="text-xs text-earth">{formatPrice(item.product.price)} each</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-cream p-6 md:p-8 sticky top-28">
            <h3 className="font-serif text-lg text-charcoal mb-6">Order Summary</h3>

            {/* Coupon */}
            <div className="mb-6 pb-6 border-b border-sand">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth" />
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="w-full py-2.5 pl-9 pr-3 text-sm border border-sand bg-white focus:outline-none focus:border-gold"
                  />
                </div>
                <button
                  onClick={() => { if (coupon.toUpperCase() === "SAATVIK10") setCouponApplied(true); }}
                  className="px-4 text-xs uppercase tracking-wider bg-charcoal text-cream hover:bg-gold transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1"><Sparkles size={12} /> 10% discount applied!</p>
              )}
              <p className="text-xs text-earth mt-2">Try: SAATVIK10</p>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between"><span className="text-earth">Subtotal</span><span className="text-charcoal">{formatPrice(subtotal)}</span></div>
              {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-{formatPrice(discount)}</span></div>}
              <div className="flex justify-between"><span className="text-earth">Shipping</span><span className="text-charcoal">{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="flex justify-between pt-3 border-t border-sand font-medium text-base">
                <span className="text-charcoal">Total</span>
                <span className="text-charcoal">{formatPrice(total - discount)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-charcoal text-cream py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors"
            >
              Checkout <ArrowRight size={14} />
            </Link>

            <p className="text-center text-xs text-earth mt-4">Secure checkout · Free returns</p>
          </div>
        </div>
      </div>

      {/* Upsell */}
      {upsellProducts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-sand">
          <h2 className="font-serif text-2xl text-charcoal mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {upsellProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}

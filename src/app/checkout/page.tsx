"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Truck, CreditCard, Smartphone, Banknote, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/helpers";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formData, setFormData] = useState({
    email: "", firstName: "", lastName: "", phone: "",
    address: "", city: "", state: "", pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    router.push("/order-confirmation");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-earth mb-4">Nothing to checkout.</p>
        <Link href="/category/new-arrivals" className="text-sm text-gold hover:text-gold-dark">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="font-serif text-3xl text-charcoal mb-2">Checkout</h1>
      <p className="text-sm text-earth mb-8">Complete your order securely</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="col-span-full py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
                <input name="phone" type="tel" placeholder="Phone number" required value={formData.phone} onChange={handleChange} className="col-span-full py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} className="py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
                <input name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} className="py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
                <input name="address" placeholder="Address" required value={formData.address} onChange={handleChange} className="col-span-full py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
                <input name="city" placeholder="City" required value={formData.city} onChange={handleChange} className="py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
                <select name="state" required value={formData.state} onChange={handleChange} className="py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white text-charcoal">
                  <option value="">Select state</option>
                  {["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat", "Rajasthan", "Uttar Pradesh", "West Bengal", "Kerala", "Telangana"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input name="pincode" placeholder="PIN code" required pattern="[0-9]{6}" value={formData.pincode} onChange={handleChange} className="py-3 px-4 border border-sand text-sm focus:outline-none focus:border-gold bg-white" />
              </div>
            </div>

            {/* Payment */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: "upi", label: "UPI (Google Pay, PhonePe, Paytm)", icon: Smartphone },
                  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
                  { id: "cod", label: "Cash on Delivery", icon: Banknote },
                ].map(({ id, label, icon: Icon }) => (
                  <label key={id} className={`flex items-center gap-4 p-4 border cursor-pointer transition-all ${paymentMethod === id ? "border-gold bg-gold/5" : "border-sand hover:border-gold/50"}`}>
                    <input type="radio" name="payment" value={id} checked={paymentMethod === id} onChange={() => setPaymentMethod(id)} className="accent-gold" />
                    <Icon size={18} className="text-earth" />
                    <span className="text-sm text-charcoal">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gold text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors">
              <Lock size={16} /> Place Order — {formatPrice(total)}
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="bg-cream p-6 sticky top-28">
              <h3 className="font-serif text-lg text-charcoal mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <div className="w-16 aspect-[3/4] overflow-hidden bg-sand flex-shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-charcoal truncate">{item.product.name}</p>
                      <p className="text-xs text-earth">Size: {item.size} · Qty: {item.quantity}</p>
                      <p className="text-sm text-charcoal mt-1">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm border-t border-sand pt-4">
                <div className="flex justify-between"><span className="text-earth">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-earth">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
                <div className="flex justify-between pt-2 border-t border-sand text-base font-medium"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-earth">
                <Shield size={14} className="text-gold" />
                <span>Secure 256-bit SSL checkout</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

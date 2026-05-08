"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { generateOrderId, getDeliveryDate } from "@/lib/helpers";

export default function OrderConfirmationPage() {
  const orderId = generateOrderId();
  const deliveryDate = getDeliveryDate(5);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle size={64} className="mx-auto text-gold mb-6" strokeWidth={1.5} />
        </motion.div>

        <h1 className="font-serif text-3xl text-charcoal mb-3">Order Confirmed</h1>
        <p className="text-earth mb-8">Thank you for shopping with Saatvik. Your order has been placed successfully.</p>

        <div className="bg-cream p-6 mb-8 text-left space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-earth">Order Number</span>
            <span className="text-sm font-medium text-charcoal">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-earth">Estimated Delivery</span>
            <span className="text-sm font-medium text-charcoal flex items-center gap-2">
              <Package size={14} className="text-gold" /> {deliveryDate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-earth">Status</span>
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">Processing</span>
          </div>
        </div>

        <p className="text-sm text-earth mb-6">A confirmation email has been sent with your order details.</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-gold transition-colors"
        >
          Continue Shopping <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}

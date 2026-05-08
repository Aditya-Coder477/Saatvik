"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Package, ShoppingBag, Users, TrendingUp, Eye, Star, IndianRupee, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import { formatPrice } from "@/lib/helpers";

const stats = [
  { label: "Revenue", value: "₹4,82,350", change: "+12.5%", up: true, icon: IndianRupee },
  { label: "Orders", value: "127", change: "+8.2%", up: true, icon: ShoppingBag },
  { label: "Visitors", value: "3,845", change: "+22.1%", up: true, icon: Eye },
  { label: "Customers", value: "892", change: "-2.4%", up: false, icon: Users },
];

const recentOrders = [
  { id: "SAT-9X4K2A", customer: "Priya Mehta", amount: 8499, status: "Processing", date: "May 7" },
  { id: "SAT-7B2M9C", customer: "Ananya Singh", amount: 12598, status: "Shipped", date: "May 6" },
  { id: "SAT-3F8N1D", customer: "Kavya Reddy", amount: 5799, status: "Delivered", date: "May 5" },
  { id: "SAT-5H6J4E", customer: "Meera Joshi", amount: 3799, status: "Processing", date: "May 5" },
  { id: "SAT-1K9P7F", customer: "Nisha Patel", amount: 9999, status: "Delivered", date: "May 4" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "orders">("overview");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl text-charcoal">Admin Dashboard</h1>
          <p className="text-sm text-earth">Welcome back. Here&apos;s what&apos;s happening.</p>
        </div>
        <span className="text-xs bg-blush text-earth px-3 py-1 rounded-full uppercase tracking-wider">Prototype</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8 border-b border-sand">
        {(["overview", "products", "orders"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === tab ? "border-gold text-charcoal font-medium" : "border-transparent text-earth hover:text-charcoal"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-cream p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon size={20} className="text-gold" />
                  <span className={`text-xs flex items-center gap-0.5 ${stat.up ? "text-green-600" : "text-red-500"}`}>
                    {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {stat.change}
                  </span>
                </div>
                <p className="font-serif text-2xl text-charcoal">{stat.value}</p>
                <p className="text-xs text-earth mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Orders */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4">Recent Orders</h3>
            <div className="bg-cream overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sand">
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Order</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Customer</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Amount</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-sand/50">
                        <td className="py-3 px-4 text-charcoal font-mono text-xs">{order.id}</td>
                        <td className="py-3 px-4 text-charcoal">{order.customer}</td>
                        <td className="py-3 px-4 text-charcoal">{formatPrice(order.amount)}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            order.status === "Delivered" ? "bg-green-50 text-green-700" :
                            order.status === "Shipped" ? "bg-blue-50 text-blue-700" :
                            "bg-amber-50 text-amber-700"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-earth">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-charcoal font-medium mb-4">Top Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.filter((p) => p.badges.includes("best-seller")).map((product) => (
                <div key={product.id} className="flex gap-4 bg-cream p-4">
                  <img src={product.images[0]} alt="" className="w-16 h-20 object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-charcoal">{product.name}</p>
                    <p className="text-xs text-earth">{formatPrice(product.price)}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={10} className="fill-gold text-gold" />
                      <span className="text-xs text-earth">{product.rating} · {product.reviewCount} reviews</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "products" && (
        <div className="bg-cream overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand">
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Product</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Price</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Rating</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-sand/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src={p.images[0]} alt="" className="w-10 h-12 object-cover" />
                        <span className="text-charcoal">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-earth capitalize">{p.category}</td>
                    <td className="py-3 px-4 text-charcoal">{formatPrice(p.price)}</td>
                    <td className="py-3 px-4"><span className="flex items-center gap-1"><Star size={10} className="fill-gold text-gold" /> {p.rating}</span></td>
                    <td className="py-3 px-4"><span className={`text-xs px-2 py-0.5 rounded-full ${p.inStock ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{p.inStock ? "In Stock" : "Out"}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div className="bg-cream overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand">
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Order</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Amount</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-earth font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-sand/50">
                    <td className="py-3 px-4 text-charcoal font-mono text-xs">{order.id}</td>
                    <td className="py-3 px-4 text-charcoal">{order.customer}</td>
                    <td className="py-3 px-4 text-charcoal">{formatPrice(order.amount)}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        order.status === "Delivered" ? "bg-green-50 text-green-700" :
                        order.status === "Shipped" ? "bg-blue-50 text-blue-700" :
                        "bg-amber-50 text-amber-700"
                      }`}>{order.status}</span>
                    </td>
                    <td className="py-3 px-4 text-earth">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

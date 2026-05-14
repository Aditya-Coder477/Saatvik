"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, ShoppingBag, Zap, Ruler, Truck, Shield, Sparkles, ChevronDown, ThumbsUp, Minus, Plus, X, BadgeCheck, ArrowLeft } from "lucide-react";
import { getProductById, getRelatedProducts, getCompleteTheLook } from "@/data/products";
import { getReviewsByProductId } from "@/data/reviews";
import { sizeChart } from "@/data/site";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice, getDeliveryDate } from "@/lib/helpers";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

const badgeConfig: Record<string, { label: string; style: React.CSSProperties }> = {
  new: { label: "New Arrival", style: { background: "linear-gradient(135deg,#E8614A,#F4A57B)", color: "white" } },
  "best-seller": { label: "Best Seller", style: { background: "linear-gradient(135deg,#D4A72C,#E8C05A)", color: "white" } },
};

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showFitHelper, setShowFitHelper] = useState(false);
  const [fitStep, setFitStep] = useState(0);
  const [fitAnswers, setFitAnswers] = useState({ height: "", usualSize: "", preference: "" });
  const [activeTab, setActiveTab] = useState<"details" | "care" | "shipping">("details");
  const [addedToCart, setAddedToCart] = useState(false);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-earth font-serif text-xl">Product not found.</p>
        <Link href="/" className="btn-coral rounded-full px-6 py-2.5 text-sm">Back to Home</Link>
      </div>
    );
  }

  const reviews = getReviewsByProductId(product.id);
  const related = getRelatedProducts(product.id);
  const completeLook = getCompleteTheLook(product.id);
  const wishlisted = isInWishlist(product.id);
  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    if (!selectedSize) { alert("Please select a size"); return; }
    const color = selectedColor || product.colors[0]?.name || "";
    addItem(product, selectedSize, color, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const getFitRecommendation = () => {
    const { height, usualSize } = fitAnswers;
    if (!height || !usualSize) return "M";
    const h = parseInt(height);
    if (h < 155) return usualSize === "XS" ? "XS" : "S";
    if (h > 170) return usualSize === "XL" ? "XL" : "L";
    return usualSize || "M";
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-earth mb-8">
          <Link href="/" className="hover:text-coral transition-colors flex items-center gap-1">
            <ArrowLeft size={12} /> Home
          </Link>
          <span className="text-sand">/</span>
          <Link href={`/category/${product.category}`} className="hover:text-coral transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-sand">/</span>
          <span className="text-charcoal font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* ── Image Gallery ── */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-3 rounded-2xl">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badges.map((badge) => {
                  const cfg = badgeConfig[badge];
                  if (!cfg) return null;
                  return (
                    <span key={badge} className="text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold rounded-lg" style={cfg.style}>
                      {cfg.label}
                    </span>
                  );
                })}
                {discountPct && (
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold rounded-lg text-white pulse-badge"
                    style={{ background: "linear-gradient(135deg,#E8829A,#F4A57B)" }}>
                    {discountPct}% Off
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 ${wishlisted ? "ring-2 ring-coral/30" : ""}`}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={17} className={wishlisted ? "fill-coral text-coral" : "text-charcoal"} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[3/4] overflow-hidden rounded-xl border-2 transition-all ${
                    selectedImage === i ? "border-coral" : "border-transparent hover:border-sand"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="py-2">
            {/* Title block */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.25em] text-coral mb-2 font-semibold">{product.subcategory}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 leading-tight">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className={i < Math.floor(product.rating) ? "fill-mustard text-mustard" : "text-sand"} />
                  ))}
                </div>
                <span className="text-sm text-earth">{product.rating} <span className="text-sand">({product.reviewCount} reviews)</span></span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 p-4 bg-section-peach rounded-xl">
                <span className="text-3xl font-bold text-charcoal">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-earth line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg,#E8614A,#F4A57B)" }}>
                      {discountPct}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm text-earth leading-relaxed mb-6">{product.description}</p>

            {/* Color selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-charcoal font-semibold mb-3">
                  Color: <span className="text-earth font-normal capitalize">{selectedColor || product.colors[0].name}</span>
                </p>
                <div className="flex gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className={`w-10 h-10 rounded-full transition-all ${
                        (selectedColor || product.colors[0].name) === color.name
                          ? "ring-2 ring-coral ring-offset-2 scale-110"
                          : "ring-1 ring-sand hover:ring-earth"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-wider text-charcoal font-semibold">Size</p>
                <div className="flex gap-3">
                  <button onClick={() => setShowFitHelper(true)} className="text-xs text-coral hover:text-coral-dark transition-colors flex items-center gap-1 font-medium">
                    <Sparkles size={11} /> Find Your Fit
                  </button>
                  <button onClick={() => setShowSizeGuide(true)} className="text-xs text-earth hover:text-charcoal transition-colors flex items-center gap-1">
                    <Ruler size={11} /> Size Guide
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    disabled={!size.available}
                    onClick={() => setSelectedSize(size.label)}
                    className={`min-w-[48px] h-11 px-4 text-sm font-medium rounded-lg border-2 transition-all ${
                      selectedSize === size.label
                        ? "text-white border-transparent"
                        : size.available
                        ? "border-sand text-charcoal hover:border-coral hover:text-coral"
                        : "border-sand/40 text-earth/30 cursor-not-allowed line-through"
                    }`}
                    style={selectedSize === size.label ? { background: "linear-gradient(135deg,#E8614A,#F4A57B)", borderColor: "transparent" } : {}}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-semibold mb-3">Quantity</p>
              <div className="inline-flex items-center border-2 border-sand rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-earth hover:text-coral hover:bg-cream transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm font-semibold text-charcoal min-w-[48px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-earth hover:text-coral hover:bg-cream transition-colors">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 text-sm uppercase tracking-widest font-semibold rounded-xl border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                <ShoppingBag size={16} />
                {addedToCart ? "Added ✓" : "Add to Cart"}
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 text-sm uppercase tracking-widest font-semibold rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg,#E8614A,#F4A57B)", boxShadow: "0 4px 20px rgba(232,97,74,0.3)" }}
              >
                <Zap size={16} /> Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`px-4 rounded-xl border-2 transition-all ${wishlisted ? "border-coral bg-coral/5" : "border-sand hover:border-coral"}`}
              >
                <Heart size={18} className={wishlisted ? "fill-coral text-coral" : "text-charcoal"} />
              </button>
            </div>

            {/* Delivery info */}
            <div className="bg-section-ivory rounded-xl p-4 mb-6 flex items-start gap-3 border border-sand/60">
              <Truck size={18} className="text-coral mt-0.5" />
              <div>
                <p className="text-sm text-charcoal font-semibold">Free delivery by {getDeliveryDate(product.deliveryDays)}</p>
                <p className="text-xs text-earth mt-0.5">Free shipping on orders above ₹2,999 · 15-day returns</p>
              </div>
            </div>

            {/* Details tabs */}
            <div className="border-t border-sand pt-6">
              <div className="flex gap-1 mb-5 bg-cream rounded-xl p-1">
                {(["details", "care", "shipping"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-xs uppercase tracking-wider py-2.5 rounded-lg font-medium transition-all ${
                      activeTab === tab ? "bg-white text-charcoal shadow-sm" : "text-earth hover:text-charcoal"
                    }`}
                  >
                    {tab === "details" ? "Fabric" : tab === "care" ? "Care" : "Shipping"}
                  </button>
                ))}
              </div>
              <div className="text-sm text-earth leading-relaxed">
                {activeTab === "details" && <p>{product.fabricDetails}</p>}
                {activeTab === "care" && <p>{product.careInstructions}</p>}
                {activeTab === "shipping" && (
                  <div className="space-y-3">
                    <p className="flex items-center gap-2"><Truck size={14} className="text-coral" /> Estimated delivery: {product.deliveryDays} business days</p>
                    <p className="flex items-center gap-2"><Shield size={14} className="text-sage-green" /> 15-day hassle-free returns</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Reviews ── */}
        {reviews.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="font-serif text-3xl text-charcoal">Customer Reviews</h2>
              <span className="text-xs px-3 py-1 rounded-full font-semibold text-white" style={{ background: "linear-gradient(135deg,#E8614A,#F4A57B)" }}>
                {reviews.length} Reviews
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-sand/60 hover:border-coral/30 transition-colors"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} className={j < review.rating ? "fill-mustard text-mustard" : "text-sand"} />
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-charcoal mb-2">{review.title}</h4>
                  <p className="text-sm text-earth leading-relaxed mb-4">{review.body}</p>
                  {review.photos.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.photos.map((p, pi) => (
                        <img key={pi} src={p} alt="" className="w-16 h-16 object-cover rounded-lg" />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs text-earth pt-3 border-t border-sand">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-charcoal">{review.author}</span>
                      <BadgeCheck size={13} className="text-sage-green fill-sage-green" />
                      <span>· Size {review.size}</span>
                    </div>
                    <button className="flex items-center gap-1 hover:text-coral transition-colors">
                      <ThumbsUp size={12} /> {review.helpful}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand">
            <h2 className="font-serif text-3xl text-charcoal mb-2">
              You May Also <span className="italic gradient-text-coral">Like</span>
            </h2>
            <p className="text-sm text-earth mb-8">Curated picks based on this product</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </section>
        )}

        {/* ── Complete the Look ── */}
        {completeLook.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand pb-16">
            <h2 className="font-serif text-3xl text-charcoal mb-2">
              Complete the <span className="italic gradient-text-festive">Look</span>
            </h2>
            <p className="text-sm text-earth mb-8">Style it with these handpicked pieces</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {completeLook.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </section>
        )}
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {showSizeGuide && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-charcoal/40 z-50" onClick={() => setShowSizeGuide(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[92%] max-w-lg p-6 md:p-8 max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-charcoal">Size Guide</h3>
                <button onClick={() => setShowSizeGuide(false)} className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-sand transition-colors"><X size={16} /></button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-sand">
                      {sizeChart.headers.map((h) => <th key={h} className="py-3 px-3 text-left text-xs uppercase tracking-wider text-earth font-semibold">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.rows.map((row, i) => (
                      <tr key={i} className={`border-b border-sand/50 ${i % 2 === 0 ? "bg-cream/40" : ""}`}>
                        {row.map((cell, j) => <td key={j} className="py-3 px-3 text-sm text-charcoal">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fit Helper Modal */}
      <AnimatePresence>
        {showFitHelper && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-charcoal/40 z-50" onClick={() => { setShowFitHelper(false); setFitStep(0); }} />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[92%] max-w-md p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-charcoal">Find Your Fit</h3>
                <button onClick={() => { setShowFitHelper(false); setFitStep(0); }} className="w-8 h-8 rounded-full bg-cream flex items-center justify-center"><X size={16} /></button>
              </div>
              {fitStep === 0 && (
                <div>
                  <p className="text-sm text-earth mb-5 font-medium">What is your height?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Below 155cm", "155–162cm", "163–170cm", "Above 170cm"].map((h) => (
                      <button key={h} onClick={() => { setFitAnswers({ ...fitAnswers, height: h.includes("Below") ? "150" : h.includes("155") ? "158" : h.includes("163") ? "166" : "175" }); setFitStep(1); }}
                        className="px-4 py-2.5 border-2 border-sand text-sm rounded-xl hover:border-coral hover:text-coral transition-all font-medium">{h}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 1 && (
                <div>
                  <p className="text-sm text-earth mb-5 font-medium">What size do you usually wear?</p>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL"].map((s) => (
                      <button key={s} onClick={() => { setFitAnswers({ ...fitAnswers, usualSize: s }); setFitStep(2); }}
                        className="min-w-[52px] h-12 px-4 border-2 border-sand text-sm rounded-xl hover:border-coral hover:text-coral transition-all font-semibold">{s}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 2 && (
                <div>
                  <p className="text-sm text-earth mb-5 font-medium">How do you prefer the fit?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Snug", "Regular", "Relaxed"].map((f) => (
                      <button key={f} onClick={() => { setFitAnswers({ ...fitAnswers, preference: f }); setFitStep(3); }}
                        className="px-5 py-2.5 border-2 border-sand text-sm rounded-xl hover:border-coral hover:text-coral transition-all font-medium">{f}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 3 && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#E8614A,#F4A57B)" }}>
                    <Sparkles size={28} className="text-white" />
                  </div>
                  <p className="text-sm text-earth mb-2">We recommend</p>
                  <p className="font-serif text-5xl text-charcoal mb-2">Size {getFitRecommendation()}</p>
                  <p className="text-xs text-earth mb-7">Based on your height, usual size & fit preference.</p>
                  <button onClick={() => { setSelectedSize(getFitRecommendation()); setShowFitHelper(false); setFitStep(0); }}
                    className="btn-coral rounded-xl px-8 py-3.5 w-full justify-center">
                    Select This Size
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Buy Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 border-t border-sand bg-white/95 backdrop-blur-md">
        <div className="flex gap-2">
          <button onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal py-3.5 text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-charcoal hover:text-white transition-all">
            <ShoppingBag size={14} /> {addedToCart ? "Added ✓" : "Add to Cart"}
          </button>
          <button onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-xl text-white"
            style={{ background: "linear-gradient(135deg,#E8614A,#F4A57B)" }}>
            <Zap size={14} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

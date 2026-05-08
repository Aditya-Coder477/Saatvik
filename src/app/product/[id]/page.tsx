"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, ShoppingBag, Zap, Ruler, Truck, Shield, Sparkles, ChevronDown, ThumbsUp, Minus, Plus, X } from "lucide-react";
import { getProductById, getRelatedProducts, getCompleteTheLook } from "@/data/products";
import { getReviewsByProductId } from "@/data/reviews";
import { sizeChart } from "@/data/site";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice, getDeliveryDate } from "@/lib/helpers";
import ProductCard from "@/components/product/ProductCard";

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
  const [imageZoomed, setImageZoomed] = useState(false);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-earth">Product not found.</p>
      </div>
    );
  }

  const reviews = getReviewsByProductId(product.id);
  const related = getRelatedProducts(product.id);
  const completeLook = getCompleteTheLook(product.id);
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) { alert("Please select a size"); return; }
    const color = selectedColor || product.colors[0]?.name || "";
    addItem(product, selectedSize, color, quantity);
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-earth mb-6 flex gap-2">
          <a href="/" className="hover:text-gold transition-colors">Home</a>
          <span>/</span>
          <a href={`/category/${product.category}`} className="hover:text-gold transition-colors capitalize">{product.category}</a>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div
              className="relative aspect-[3/4] overflow-hidden bg-sand mb-3 cursor-zoom-in"
              onClick={() => setImageZoomed(!imageZoomed)}
            >
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: imageZoomed ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badges.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {product.badges.map((badge) => (
                    <span key={badge} className={`text-[10px] uppercase tracking-widest px-3 py-1 font-medium ${badge === "best-seller" ? "bg-gold text-white" : "bg-charcoal text-cream"}`}>
                      {badge === "best-seller" ? "Best Seller" : "New"}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedImage(i); setImageZoomed(false); }}
                  className={`aspect-[3/4] overflow-hidden border-2 transition-all ${
                    selectedImage === i ? "border-gold" : "border-transparent hover:border-sand"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{product.subcategory}</p>
              <h1 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-sand"} />
                  ))}
                </div>
                <span className="text-sm text-earth">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-medium text-charcoal">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-earth line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="text-xs bg-blush text-charcoal px-2 py-1 uppercase tracking-wider font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm text-earth leading-relaxed mb-6">{product.description}</p>

            {/* Color selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                  Color: <span className="text-earth font-normal">{selectedColor || product.colors[0].name}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        (selectedColor || product.colors[0].name) === color.name
                          ? "border-charcoal scale-110"
                          : "border-sand hover:border-earth"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-wider text-charcoal font-medium">Size</p>
                <div className="flex gap-3">
                  <button onClick={() => setShowFitHelper(true)} className="text-xs text-gold hover:text-gold-dark transition-colors flex items-center gap-1">
                    <Sparkles size={12} /> Find Your Fit
                  </button>
                  <button onClick={() => setShowSizeGuide(true)} className="text-xs text-gold hover:text-gold-dark transition-colors flex items-center gap-1">
                    <Ruler size={12} /> Size Guide
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    disabled={!size.available}
                    onClick={() => setSelectedSize(size.label)}
                    className={`min-w-[48px] h-11 px-4 text-sm border transition-all ${
                      selectedSize === size.label
                        ? "border-charcoal bg-charcoal text-white"
                        : size.available
                        ? "border-sand text-charcoal hover:border-charcoal"
                        : "border-sand/50 text-earth/30 cursor-not-allowed line-through"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-sand inline-flex">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-earth hover:text-charcoal transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm font-medium text-charcoal">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-earth hover:text-charcoal transition-colors">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-cream py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors"
              >
                <ShoppingBag size={16} /> Add to Cart
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-gold text-white py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors"
              >
                <Zap size={16} /> Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 border transition-colors ${wishlisted ? "border-gold bg-gold/5" : "border-sand hover:border-gold"}`}
              >
                <Heart size={18} className={wishlisted ? "fill-gold text-gold" : "text-charcoal"} />
              </button>
            </div>

            {/* Delivery info */}
            <div className="bg-cream p-4 mb-6 flex items-start gap-3">
              <Truck size={18} className="text-gold mt-0.5" />
              <div>
                <p className="text-sm text-charcoal font-medium">Free delivery by {getDeliveryDate(product.deliveryDays)}</p>
                <p className="text-xs text-earth">Free shipping on orders above ₹2,999</p>
              </div>
            </div>

            {/* Details tabs */}
            <div className="border-t border-sand pt-6">
              <div className="flex gap-6 mb-4">
                {(["details", "care", "shipping"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs uppercase tracking-wider pb-2 border-b-2 transition-colors ${
                      activeTab === tab ? "border-gold text-charcoal" : "border-transparent text-earth hover:text-charcoal"
                    }`}
                  >
                    {tab === "details" ? "Fabric Details" : tab === "care" ? "Care" : "Shipping"}
                  </button>
                ))}
              </div>
              <div className="text-sm text-earth leading-relaxed">
                {activeTab === "details" && <p>{product.fabricDetails}</p>}
                {activeTab === "care" && <p>{product.careInstructions}</p>}
                {activeTab === "shipping" && (
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><Truck size={14} className="text-gold" /> Estimated delivery: {product.deliveryDays} business days</p>
                    <p className="flex items-center gap-2"><Shield size={14} className="text-gold" /> 15-day hassle-free returns</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand">
            <h2 className="font-serif text-2xl text-charcoal mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-cream p-6">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className={i < review.rating ? "fill-gold text-gold" : "text-sand"} />
                    ))}
                  </div>
                  <h4 className="text-sm font-medium text-charcoal mb-1">{review.title}</h4>
                  <p className="text-sm text-earth leading-relaxed mb-3">{review.body}</p>
                  {review.photos.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {review.photos.map((p, i) => (
                        <img key={i} src={p} alt="" className="w-16 h-16 object-cover rounded" />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs text-earth">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-charcoal">{review.author}</span>
                      <span>· Size {review.size}</span>
                      <span>· {review.fitFeedback.replace(/-/g, " ")}</span>
                    </div>
                    <button className="flex items-center gap-1 hover:text-gold transition-colors">
                      <ThumbsUp size={12} /> {review.helpful}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand">
            <h2 className="font-serif text-2xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </section>
        )}

        {/* Complete the Look */}
        {completeLook.length > 0 && (
          <section className="mt-16 pt-12 border-t border-sand pb-12">
            <h2 className="font-serif text-2xl text-charcoal mb-8">Complete the Look</h2>
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
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[90%] max-w-lg p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl text-charcoal">Size Guide</h3>
                <button onClick={() => setShowSizeGuide(false)}><X size={20} /></button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sand">
                      {sizeChart.headers.map((h) => (<th key={h} className="py-2 px-3 text-left text-xs uppercase tracking-wider text-earth font-medium">{h}</th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.rows.map((row, i) => (
                      <tr key={i} className="border-b border-sand/50">
                        {row.map((cell, j) => (<td key={j} className="py-2.5 px-3 text-sm text-charcoal">{cell}</td>))}
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[90%] max-w-md p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl text-charcoal">Find Your Fit</h3>
                <button onClick={() => { setShowFitHelper(false); setFitStep(0); }}><X size={20} /></button>
              </div>

              {fitStep === 0 && (
                <div>
                  <p className="text-sm text-earth mb-4">What is your height?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Below 155cm", "155-162cm", "163-170cm", "Above 170cm"].map((h) => (
                      <button key={h} onClick={() => { setFitAnswers({ ...fitAnswers, height: h.includes("Below") ? "150" : h.includes("155") ? "158" : h.includes("163") ? "166" : "175" }); setFitStep(1); }} className="px-4 py-2 border border-sand text-sm hover:border-gold transition-colors">{h}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 1 && (
                <div>
                  <p className="text-sm text-earth mb-4">What size do you usually wear?</p>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL"].map((s) => (
                      <button key={s} onClick={() => { setFitAnswers({ ...fitAnswers, usualSize: s }); setFitStep(2); }} className="min-w-[48px] h-11 px-4 border border-sand text-sm hover:border-gold transition-colors">{s}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 2 && (
                <div>
                  <p className="text-sm text-earth mb-4">How do you prefer the fit?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Snug", "Regular", "Relaxed"].map((f) => (
                      <button key={f} onClick={() => { setFitAnswers({ ...fitAnswers, preference: f }); setFitStep(3); }} className="px-4 py-2 border border-sand text-sm hover:border-gold transition-colors">{f}</button>
                    ))}
                  </div>
                </div>
              )}
              {fitStep === 3 && (
                <div className="text-center">
                  <Sparkles size={32} className="mx-auto text-gold mb-4" />
                  <p className="text-sm text-earth mb-2">We recommend</p>
                  <p className="font-serif text-3xl text-charcoal mb-4">Size {getFitRecommendation()}</p>
                  <p className="text-xs text-earth mb-6">Based on your height, usual size, and fit preference.</p>
                  <button onClick={() => { setSelectedSize(getFitRecommendation()); setShowFitHelper(false); setFitStep(0); }} className="bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-colors">
                    Select This Size
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Buy Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-sand p-3 z-40 flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-cream py-3 text-xs uppercase tracking-widest font-medium"
        >
          <ShoppingBag size={14} /> Add to Cart
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-gold text-white py-3 text-xs uppercase tracking-widest font-medium"
        >
          <Zap size={14} /> Buy Now
        </button>
      </div>
    </div>
  );
}

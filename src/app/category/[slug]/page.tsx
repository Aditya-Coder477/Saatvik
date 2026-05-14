"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Filter } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import type { SortOption } from "@/types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];
const allFabrics = [
  "Chanderi Silk", "Cotton Mull", "Cotton-Silk", "Organza",
  "Viscose Rayon", "Linen Blend", "Satin", "Cotton-Spandex",
  "Poly-Viscose", "Cotton-Silk / Banarasi",
];
const allOccasions = [
  "Festive", "Wedding", "Ceremony", "Casual", "Office",
  "Brunch", "Beach", "Travel", "Date Night", "Party",
  "Formal", "Cocktail", "Reception", "Sangeet", "Puja", "Evening", "Event",
];

const categoryConfig: Record<string, {
  gradient: string;
  badge: string;
  accentColor: string;
  tagline: string;
}> = {
  "new-arrivals": {
    gradient: "from-[#F4A57B]/75 via-[#E8614A]/45 to-transparent",
    badge: "✨ Just Landed",
    accentColor: "#E8614A",
    tagline: "The latest additions to our curated collection. Fresh, modern, and undeniably Saatvik.",
  },
  "festive-wear": {
    gradient: "from-[#8B3A1A]/75 via-[#C4623A]/45 to-transparent",
    badge: "🪔 Celebrate in Style",
    accentColor: "#C4623A",
    tagline: "Opulent fabrics and rich embellishments for your most special occasions.",
  },
  "kurtas": {
    gradient: "from-[#7FAF8A]/75 via-[#A3C9AD]/45 to-transparent",
    badge: "🌿 Everyday Elegance",
    accentColor: "#7FAF8A",
    tagline: "Versatile, breathable, and effortlessly chic kurtas for the modern wardrobe.",
  },
  "dresses": {
    gradient: "from-[#C4AEDE]/75 via-[#A78BCA]/45 to-transparent",
    badge: "👗 Contemporary Silhouettes",
    accentColor: "#A78BCA",
    tagline: "Fluid forms and premium western wear designed with an Indian soul.",
  },
  "sarees": {
    gradient: "from-[#D4A72C]/75 via-[#E8C05A]/45 to-transparent",
    badge: "👑 Timeless Drapes",
    accentColor: "#D4A72C",
    tagline: "Six yards of pure grace. Handwoven traditions preserved for generations.",
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find((c) => c.slug === slug);
  const config = categoryConfig[slug] || categoryConfig["new-arrivals"];

  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleFilter = (arr: string[], val: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.category === slug);
    if (selectedSizes.length) result = result.filter((p) => p.sizes.some((s) => s.available && selectedSizes.includes(s.label)));
    if (selectedFabrics.length) result = result.filter((p) => selectedFabrics.includes(p.fabric));
    if (selectedOccasions.length) result = result.filter((p) => p.occasion.some((o) => selectedOccasions.includes(o)));

    switch (sortBy) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "newest": return [...result].sort((a, b) => (b.badges.includes("new") ? 1 : 0) - (a.badges.includes("new") ? 1 : 0));
      default: return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, [slug, sortBy, selectedSizes, selectedFabrics, selectedOccasions]);

  const activeFilterCount = selectedSizes.length + selectedFabrics.length + selectedOccasions.length;
  const clearAll = () => { setSelectedSizes([]); setSelectedFabrics([]); setSelectedOccasions([]); };

  const FilterSection = ({
    title, items, selected, toggle,
  }: { title: string; items: string[]; selected: string[]; toggle: (v: string) => void }) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="border-b border-sand pb-4 mb-4">
        <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full mb-3">
          <span className="text-xs uppercase tracking-wider text-charcoal font-semibold">{title}</span>
          <ChevronDown size={14} className={`text-earth transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => toggle(item)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all font-medium ${
                  selected.includes(item)
                    ? "border-transparent text-white"
                    : "border-sand text-earth hover:border-coral/50 hover:text-coral"
                }`}
                style={selected.includes(item) ? {
                  background: `linear-gradient(135deg, ${config.accentColor}, ${config.accentColor}BB)`,
                } : {}}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Category Hero Header */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src={category?.image || ""}
          alt={category?.name || ""}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient}`} />
        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, ${config.accentColor}, transparent)` }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 capitalize">{slug}</span>
          </nav>

          {/* Badge */}
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-semibold px-3.5 py-1.5 rounded-full text-white mb-4"
            style={{ backgroundColor: `${config.accentColor}CC` }}
          >
            {config.badge}
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl text-white mb-4"
          >
            {category?.name || "Collection"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-cream/70 text-sm md:text-base max-w-lg leading-relaxed"
          >
            {config.tagline}
          </motion.p>
        </div>
      </div>

      {/* Quick category switch */}
      <div className="bg-white border-b border-sand sticky top-[calc(2.5rem+5rem)] z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scroll-hidden">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                cat.slug === slug
                  ? "text-white"
                  : "text-earth bg-cream hover:bg-sand"
              }`}
              style={cat.slug === slug ? {
                background: `linear-gradient(135deg, ${config.accentColor}, ${config.accentColor}BB)`,
              } : {}}
            >
              {cat.name.replace(" Collection", "")}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 text-sm text-charcoal font-medium border border-sand px-4 py-2 rounded-full hover:border-coral hover:text-coral transition-all"
            >
              <Filter size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span
                  className="w-5 h-5 text-white text-[10px] rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: config.accentColor }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>
            <p className="text-sm text-earth">
              <span className="font-semibold text-charcoal">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-earth hover:text-coral transition-colors flex items-center gap-1"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-charcoal font-medium border border-sand px-4 py-2 rounded-full hover:border-coral hover:text-coral transition-all"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            {sortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full mt-2 bg-white shadow-xl border border-sand py-2 z-20 min-w-[200px] rounded-xl overflow-hidden"
              >
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${
                      sortBy === opt.value ? "font-semibold" : "text-charcoal"
                    }`}
                    style={sortBy === opt.value ? { color: config.accentColor } : {}}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-36">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider">Filters</h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs hover:opacity-80 transition-opacity font-medium"
                    style={{ color: config.accentColor }}
                  >
                    Clear ({activeFilterCount})
                  </button>
                )}
              </div>
              <FilterSection
                title="Size"
                items={allSizes}
                selected={selectedSizes}
                toggle={(v) => toggleFilter(selectedSizes, v, setSelectedSizes)}
              />
              <FilterSection
                title="Fabric"
                items={allFabrics.filter((f) => products.some((p) => p.category === slug && p.fabric === f))}
                selected={selectedFabrics}
                toggle={(v) => toggleFilter(selectedFabrics, v, setSelectedFabrics)}
              />
              <FilterSection
                title="Occasion"
                items={allOccasions.filter((o) => products.some((p) => p.category === slug && p.occasion.includes(o)))}
                selected={selectedOccasions}
                toggle={(v) => toggleFilter(selectedOccasions, v, setSelectedOccasions)}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-sand mx-auto mb-4 flex items-center justify-center">
                  <Filter size={24} className="text-earth" />
                </div>
                <p className="text-earth mb-2 font-medium">No products match your filters.</p>
                <button
                  onClick={clearAll}
                  className="text-sm font-semibold mt-2 underline-offset-2 underline"
                  style={{ color: config.accentColor }}
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/35 z-50 md:hidden"
              onClick={() => setFilterOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-50 md:hidden max-h-[80vh] overflow-y-auto rounded-t-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-sand sticky top-0 bg-white z-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider">Filters</h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-sand flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-4">
                <FilterSection
                  title="Size"
                  items={allSizes}
                  selected={selectedSizes}
                  toggle={(v) => toggleFilter(selectedSizes, v, setSelectedSizes)}
                />
                <FilterSection
                  title="Fabric"
                  items={allFabrics.filter((f) => products.some((p) => p.category === slug && p.fabric === f))}
                  selected={selectedFabrics}
                  toggle={(v) => toggleFilter(selectedFabrics, v, setSelectedFabrics)}
                />
                <FilterSection
                  title="Occasion"
                  items={allOccasions.filter((o) => products.some((p) => p.category === slug && p.occasion.includes(o)))}
                  selected={selectedOccasions}
                  toggle={(v) => toggleFilter(selectedOccasions, v, setSelectedOccasions)}
                />
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full py-3.5 text-sm uppercase tracking-widest font-semibold text-white rounded-xl mt-4"
                  style={{ background: `linear-gradient(135deg, ${config.accentColor}, ${config.accentColor}BB)` }}
                >
                  Show {filtered.length} Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

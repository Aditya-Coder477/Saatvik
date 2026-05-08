"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/product/ProductCard";
import type { SortOption } from "@/types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];
const allFabrics = ["Chanderi Silk", "Cotton Mull", "Cotton-Silk", "Organza", "Viscose Rayon", "Linen Blend", "Satin", "Cotton-Spandex", "Poly-Viscose", "Cotton-Silk / Banarasi"];
const allOccasions = ["Festive", "Wedding", "Ceremony", "Casual", "Office", "Brunch", "Beach", "Travel", "Date Night", "Party", "Formal", "Cocktail", "Reception", "Sangeet", "Puja", "Evening", "Event"];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find((c) => c.slug === slug);

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

  const FilterSection = ({ title, items, selected, toggle }: { title: string; items: string[]; selected: string[]; toggle: (v: string) => void }) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="border-b border-sand pb-4 mb-4">
        <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full mb-3">
          <span className="text-xs uppercase tracking-wider text-charcoal font-medium">{title}</span>
          <ChevronDown size={14} className={`text-earth transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => toggle(item)}
                className={`px-3 py-1.5 text-xs border transition-all ${
                  selected.includes(item)
                    ? "border-gold bg-gold/10 text-charcoal"
                    : "border-sand text-earth hover:border-gold/50"
                }`}
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
      {/* Category Header */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={category?.image || ""} alt={category?.name || ""} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Curated Collection</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">{category?.name || "Collection"}</h1>
            <p className="text-cream/70 text-sm max-w-md mx-auto">{category?.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
            <p className="text-sm text-earth">{filtered.length} {filtered.length === 1 ? "product" : "products"}</p>
          </div>

          <div className="relative">
            <button onClick={() => setSortOpen(!sortOpen)} className="flex items-center gap-2 text-sm text-charcoal">
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-sand py-1 z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${
                      sortBy === opt.value ? "text-gold font-medium" : "text-charcoal"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-60 flex-shrink-0">
            <h3 className="text-sm font-medium text-charcoal mb-6 uppercase tracking-wider">Filters</h3>
            <FilterSection title="Size" items={allSizes} selected={selectedSizes} toggle={(v) => toggleFilter(selectedSizes, v, setSelectedSizes)} />
            <FilterSection title="Fabric" items={allFabrics.filter((f) => products.some((p) => p.category === slug && p.fabric === f))} selected={selectedFabrics} toggle={(v) => toggleFilter(selectedFabrics, v, setSelectedFabrics)} />
            <FilterSection title="Occasion" items={allOccasions.filter((o) => products.some((p) => p.category === slug && p.occasion.includes(o)))} selected={selectedOccasions} toggle={(v) => toggleFilter(selectedOccasions, v, setSelectedOccasions)} />
            {activeFilterCount > 0 && (
              <button onClick={() => { setSelectedSizes([]); setSelectedFabrics([]); setSelectedOccasions([]); }} className="text-xs text-gold hover:text-gold-dark transition-colors mt-2">
                Clear all filters
              </button>
            )}
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
              <div className="text-center py-20">
                <p className="text-earth mb-2">No products match your filters.</p>
                <button onClick={() => { setSelectedSizes([]); setSelectedFabrics([]); setSelectedOccasions([]); }} className="text-sm text-gold hover:text-gold-dark">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-charcoal/30 z-50 md:hidden" onClick={() => setFilterOpen(false)} />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-50 md:hidden max-h-[80vh] overflow-y-auto rounded-t-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-sand">
                <h3 className="text-sm font-medium uppercase tracking-wider">Filters</h3>
                <button onClick={() => setFilterOpen(false)}><X size={20} /></button>
              </div>
              <div className="p-4">
                <FilterSection title="Size" items={allSizes} selected={selectedSizes} toggle={(v) => toggleFilter(selectedSizes, v, setSelectedSizes)} />
                <FilterSection title="Fabric" items={allFabrics.filter((f) => products.some((p) => p.category === slug && p.fabric === f))} selected={selectedFabrics} toggle={(v) => toggleFilter(selectedFabrics, v, setSelectedFabrics)} />
                <FilterSection title="Occasion" items={allOccasions.filter((o) => products.some((p) => p.category === slug && p.occasion.includes(o)))} selected={selectedOccasions} toggle={(v) => toggleFilter(selectedOccasions, v, setSelectedOccasions)} />
                <button onClick={() => setFilterOpen(false)} className="w-full bg-charcoal text-cream py-3 text-sm uppercase tracking-widest mt-4">
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

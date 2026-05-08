"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Product, WishlistItem } from "@/types";

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  itemCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("saatvik-wishlist");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saatvik-wishlist", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some((i) => i.product.id === product.id)) return prev;
      return [...prev, { product, addedAt: new Date().toISOString() }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => items.some((i) => i.product.id === productId),
    [items]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      if (isInWishlist(product.id)) {
        removeItem(product.id);
      } else {
        addItem(product);
      }
    },
    [isInWishlist, removeItem, addItem]
  );

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist, toggleWishlist, itemCount: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}

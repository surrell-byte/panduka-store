"use client";

import Link from "next/link";
import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div
      className="group relative rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-3"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
      }}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

        {/* TOP BADGES */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          {/* NEW BADGE */}
          <div
            className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-bold"
            style={{
              backgroundColor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(12px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            New Drop
          </div>

          {/* FAVORITE */}
          <button
            className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
            }}
          >
            <Heart size={18} />
          </button>
        </div>

        {/* FLOATING QUICK VIEW */}
        <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Link
            href="/shop"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(18px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Quick View

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-7">
        {/* CATEGORY */}
        <p
          className="text-xs uppercase tracking-[0.3em] mb-3"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Premium Streetwear
        </p>

        {/* PRODUCT NAME */}
        <h3
          className="text-2xl font-black mb-3 leading-tight"
          style={{
            color: "var(--text)",
            fontFamily: "var(--font-syne)",
          }}
        >
          {name}
        </h3>

        {/* PRICE + STATUS */}
        <div className="flex items-center justify-between mb-7">
          <p
            className="text-2xl font-bold"
            style={{
              color: "var(--accent)",
            }}
          >
            {price}
          </p>

          <div className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                backgroundColor: "#22c55e",
              }}
            />

            <span
              className="text-sm"
              style={{
                color: "var(--text-muted)",
              }}
            >
              In Stock
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          {/* ADD TO CART */}
          <button
            className="group/cart flex-1 flex items-center justify-center gap-3 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000",
            }}
          >
            <ShoppingBag
              size={18}
              className="transition-transform duration-300 group-hover/cart:scale-110"
            />

            Add To Cart
          </button>

          {/* SECONDARY ACTION */}
          <button
            className="flex items-center justify-center w-14 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text)",
            }}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* HOVER BORDER GLOW */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
        style={{
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 0 60px rgba(255,255,255,0.04)",
        }}
      />
    </div>
  );
}
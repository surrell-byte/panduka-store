"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { products, type ProductCategory } from "@/lib/products";

const filters = ["All", "Hoodies", "T-Shirts"] as const;

export default function ShopPage() {
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | ProductCategory
  >("All");
  const [cartCount, setCartCount] = useState(0);

  const visibleProducts = useMemo(() => {
    if (selectedFilter === "All") return products;
    return products.filter((product) => product.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <main
      className="min-h-screen px-5 sm:px-10 py-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg), rgba(255,255,255,0.02))",
        color: "var(--text)",
      }}
    >
      <section className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              New Collection
            </p>

            <h1
              className="mb-6 w-full max-w-full font-black leading-[0.85]"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.5rem, 9vw, 7rem)",
                letterSpacing: "-0.07em",
                overflowWrap: "anywhere",
              }}
            >
              PREMIUM
              <br />
              STREETWEAR
            </h1>

            <p
              className="max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Elevate your wardrobe with performance-driven essentials shaped by
              culture, identity, and everyday confidence.
            </p>
          </div>

          <div
            className="inline-flex items-center gap-3 self-start rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Cart {cartCount}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000",
            }}
          >
            Shop Now
          </button>

          <button
            className="px-8 py-4 rounded-2xl border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            Explore
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((item) => {
            const isActive = selectedFilter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedFilter(item)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "rgba(255,255,255,0.05)",
                  color: isActive ? "#000" : "var(--text)",
                  border: isActive
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Showing {visibleProducts.length} styles
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-4xl transition-all duration-500 hover:-translate-y-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="relative h-70 overflow-hidden sm:h-90 lg:h-105">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                  }}
                >
                  {product.tag}
                </span>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                  }}
                  aria-label={`Save ${product.name}`}
                >
                  ♥
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {product.category}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
                </div>

                <span
                  className="text-lg font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  ${product.price}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setCartCount((count) => count + 1)}
                className="w-full rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000",
                }}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
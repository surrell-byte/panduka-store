import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Tribal Oversized Tee",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Earthtone Hoodie",
      price: "$75",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "PANDUKA Jacket",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-5 sm:px-10 py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 35%), var(--bg-alt)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "var(--accent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              Hand-picked for you
            </p>

            <h2
              className="font-black leading-none"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.5rem, 9vw, 7rem)",
              }}
            >
              FEATURED
              <br />
              PRODUCTS
            </h2>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            href="/shop"
            className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:translate-x-1"
            style={{
              color: "var(--accent)",
            }}
          >
            View All Products

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="group transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Elevated Afro-inspired essentials crafted with premium materials,
            oversized silhouettes, and modern luxury aesthetics.
          </p>

          <Link
            href="/collections"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000",
            }}
          >
            Explore Collections

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Shadow Hoodie",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Minimal Tee",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Street Cargo",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main
      className="min-h-screen px-5 sm:px-10 py-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg), rgba(255,255,255,0.02))",
        color: "var(--text)",
      }}
    >
      {/* HERO */}
      <section className="max-w-7xl mx-auto mb-20">
        <p
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ color: "var(--accent)" }}
        >
          New Collection
        </p>

        <h1
          className="font-black leading-none mb-6"
          style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 9vw, 7rem)" }}
        >
          PREMIUM
          <br />
          STREETWEAR
        </h1>

        <p
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Elevate your wardrobe with premium essentials designed for modern
          culture.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
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

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto mb-10 flex flex-wrap gap-3">
        {["All", "Hoodies", "T-Shirts", "Pants"].map((item) => (
          <button
            key={item}
            className="px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {item}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-[280px] sm:h-[360px] lg:h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>

                <span
                  className="text-lg font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {product.price}
                </span>
              </div>

              <button
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
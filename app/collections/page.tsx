export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      title: "Midnight Drop",
      subtitle: "Luxury streetwear essentials",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Neo Tokyo",
      subtitle: "Futuristic oversized silhouettes",
      image:
        "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Desert Utility",
      subtitle: "Earth tones & tactical fits",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 40%), var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* HERO */}
      <section className="relative px-5 sm:px-10 pt-24 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-5"
            style={{ color: "var(--accent)" }}
          >
            Curated Drops
          </p>

          <h1
            className="font-black leading-none mb-8"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 8vw, 8rem)" }}
          >
            COLLECTIONS
          </h1>

          <p
            className="max-w-2xl text-lg sm:text-xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Discover premium seasonal edits inspired by global street culture,
            modern minimalism, and luxury fashion aesthetics.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              Explore Collections
            </button>

            <button
              className="px-8 py-4 rounded-2xl border transition-all duration-300 hover:bg-white/5"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              View Lookbook
            </button>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] blur-3xl opacity-20 rounded-full pointer-events-none"
          style={{ background: "var(--accent)" }}
        />
      </section>

      {/* FEATURED COLLECTION */}
      <section className="px-5 sm:px-10 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] group"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600&auto=format&fit=crop"
              alt="Featured Collection"
              className="w-full h-[360px] sm:h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14">
              <p
                className="uppercase tracking-[0.3em] text-xs mb-4"
                style={{ color: "var(--accent)" }}
              >
                Featured Drop
              </p>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-5">
                BLACK LABEL
              </h2>

              <p
                className="max-w-xl text-base sm:text-lg mb-6 sm:mb-8 hidden sm:block"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Elevated essentials designed with premium fabrics, oversized
                silhouettes, and luxury streetwear energy.
              </p>

              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--accent)", color: "#000" }}
              >
                Shop The Drop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section className="px-5 sm:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl sm:text-4xl font-black">Latest Collections</h3>

            <button
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-[2rem] cursor-pointer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-[360px] sm:h-[440px] lg:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <h4 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3">
                    {collection.title}
                  </h4>

                  <p className="mb-5 sm:mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {collection.subtitle}
                  </p>

                  <button
                    className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section
        className="py-6 overflow-hidden border-y"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex gap-16 sm:gap-20 whitespace-nowrap animate-pulse text-xl sm:text-2xl font-bold uppercase">
          <span>Luxury Streetwear</span>
          <span>·</span>
          <span>Premium Quality</span>
          <span>·</span>
          <span>Limited Drops</span>
          <span>·</span>
          <span>Worldwide Shipping</span>
          <span>·</span>
          <span>Luxury Streetwear</span>
          <span>·</span>
          <span>Premium Quality</span>
        </div>
      </section>
    </main>
  );
}
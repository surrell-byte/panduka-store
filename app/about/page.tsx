export default function AboutPage() {
  const values = [
    {
      title: "Culture",
      description:
        "Every collection is inspired by African identity, movement, music, and modern youth culture.",
    },
    {
      title: "Luxury",
      description:
        "Premium fabrics, elevated silhouettes, and timeless craftsmanship built to last.",
    },
    {
      title: "Future",
      description:
        "PANDUKA represents the next generation of African fashion on a global stage.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 30%), var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* HERO */}
      <section className="relative px-5 sm:px-10 pt-24 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="min-w-0">
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </p>

            <h1
              className="font-black leading-none mb-8"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.5rem, 4.5vw, 5.5rem)" }}
            >
              BUILT
              <br />
              FROM
              <br />
              CULTURE
            </h1>

            <p
              className="max-w-2xl text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              PANDUKA is premium Afro-inspired streetwear blending heritage,
              identity, and modern luxury. Rooted in African creativity and
              designed for a new global generation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--accent)", color: "#000" }}
              >
                Explore Collections
              </button>

              <button
                className="px-8 py-4 rounded-2xl border transition-all duration-300 hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Our Vision
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "var(--accent)" }}
            />

            <div
              className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
                alt="PANDUKA"
                className="w-full h-[420px] sm:h-[560px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="px-5 sm:px-10 pb-16 sm:pb-24">
        <div
          className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p
            className="uppercase tracking-[0.3em] text-xs mb-6"
            style={{ color: "var(--accent)" }}
          >
            The Vision
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight mb-8 max-w-5xl">
            We are building a luxury African streetwear brand that merges
            fashion, culture, storytelling, and identity into one movement.
          </h2>

          <p
            className="max-w-3xl text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Inspired by the energy of African cities, music, art, and youth
            culture, PANDUKA exists to create pieces that feel timeless,
            elevated, and globally relevant while remaining deeply connected to
            its roots.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 sm:px-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <p
              className="uppercase tracking-[0.3em] text-xs mb-4"
              style={{ color: "var(--accent)" }}
            >
              Core Values
            </p>

            <h3 className="text-3xl sm:text-5xl font-black">What We Stand For</h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-[2rem] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-black mb-6"
                  style={{ backgroundColor: "var(--accent)", color: "#000" }}
                >
                  0{index + 1}
                </div>

                <h4 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-5">{value.title}</h4>

                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="relative h-[400px] sm:h-[550px] lg:h-[700px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop"
          alt="Fashion Campaign"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p
              className="uppercase tracking-[0.35em] text-xs mb-6"
              style={{ color: "var(--accent)" }}
            >
              Rooted In Africa
            </p>

            <h2
              className="font-black leading-tight max-w-5xl"
              style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
            >
              CREATED FOR
              <br />
              THE NEXT
              <br />
              GENERATION
            </h2>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="uppercase tracking-[0.3em] text-xs mb-5"
            style={{ color: "var(--accent)" }}
          >
            Join The Movement
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            More Than Fashion.
            <br />
            A Statement.
          </h2>

          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Discover elevated Afro-luxury streetwear designed to inspire
            confidence, identity, and expression.
          </p>

          <button
            className="px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Shop PANDUKA
          </button>
        </div>
      </section>
    </main>
  );
}
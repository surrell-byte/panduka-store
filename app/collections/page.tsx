import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      title: "Midnight Drop",
      subtitle: "Luxury streetwear essentials",
      image: "/africa-black.png",
    },
    {
      id: 2,
      title: "Neo Tokyo",
      subtitle: "Futuristic oversized silhouettes",
      image: "/vavengi.png",
    },
    {
      id: 3,
      title: "Desert Utility",
      subtitle: "Earth tones & tactical fits",
      image: "/made-in-the-miz.png",
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
      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10" style={{ backgroundColor: "var(--accent)" }} />
            <p
              className="text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm"
              style={{ color: "var(--accent)" }}
            >
              Curated Drops
            </p>
          </div>

          <h1
            className="mb-6 max-w-full font-black leading-[0.82] tracking-[-0.07em]"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 7vw, 6.5rem)",
            }}
          >
            COLLECTIONS
          </h1>

          <p
            className="max-w-160 text-base leading-relaxed sm:text-lg lg:text-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Discover premium seasonal edits inspired by global street culture,
            modern minimalism, and luxury fashion aesthetics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="#latest-collections"
              className="rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-base"
              style={{ backgroundColor: "var(--accent)", color: "#000" }}
            >
              Explore Collections
            </a>

            <a
              href="#featured-drop"
              className="rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/5 sm:px-8 sm:py-4 sm:text-base"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              View Lookbook
            </a>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-15 blur-3xl sm:h-120 sm:w-120"
          style={{ background: "var(--accent)" }}
        />
      </section>

      {/* FEATURED COLLECTION */}
      <section id="featured-drop" className="mb-16 px-5 sm:mb-20 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="group relative isolate min-h-105 overflow-hidden rounded-4xl sm:min-h-130 sm:rounded-[2.5rem] lg:min-h-160"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Image
              src="/dont-save-her.png"
              alt="Featured Collection"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />

            <div className="absolute inset-0 flex items-end justify-end p-6 sm:p-10 lg:p-14">
              <div className="max-w-136 text-right">
                <p
                  className="mb-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--accent)" }}
                >
                  Featured Drop
                </p>

                <h2 className="mb-4 text-3xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:mb-5 sm:text-5xl lg:text-6xl">
                  BLACK LABEL
                </h2>

                <p
                  className="mb-6 ml-auto max-w-xl text-sm leading-relaxed sm:mb-8 sm:text-lg"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Elevated essentials designed with premium fabrics, oversized
                  silhouettes, and luxury streetwear energy.
                </p>

                <Link
                  href="/shop"
                  className="inline-flex rounded-full px-6 py-3 font-semibold transition-transform hover:scale-[1.02] sm:px-8 sm:py-4"
                  style={{ backgroundColor: "var(--accent)", color: "#000" }}
                >
                  Shop The Drop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section id="latest-collections" className="px-5 pb-20 sm:px-10 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                Made to move
              </p>
              <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                Latest Collections
              </h3>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.18em] transition-transform hover:translate-x-1 sm:self-auto"
              style={{ color: "var(--accent)" }}
            >
              Shop all pieces <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection) => (
              <article
                key={collection.id}
                className="group relative isolate min-h-95 overflow-hidden rounded-4xl sm:min-h-110 lg:min-h-125"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                    Collection 0{collection.id}
                  </p>
                  <h4 className="mb-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                    {collection.title}
                  </h4>

                  <p className="mb-5 text-sm leading-relaxed sm:mb-6 sm:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {collection.subtitle}
                  </p>

                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform group-hover:translate-x-1"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Explore collection <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section
        className="py-6 overflow-hidden border-y"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex w-max gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.15em] sm:gap-16 sm:text-xl sm:tracking-normal">
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
"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden flex items-center px-5 sm:px-10 lg:px-16 pt-24"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 30%), var(--bg)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-[-200px] right-[-120px] w-[550px] h-[550px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "var(--accent)",
        }}
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* LABEL */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-[1px]"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              />

              <p
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em]"
                style={{ color: "var(--accent)" }}
              >
                New Collection 2026
              </p>
            </div>

            {/* HEADLINE */}
            <h1
              className="font-black leading-[0.88] tracking-[-0.04em] mb-8"
              style={{
                fontSize: "clamp(1.8rem, 11vw, 9rem)",
                color: "var(--text)",
                fontFamily: "var(--font-syne)",
              }}
            >
              ROOTED
              <br />
              IN
              <br />
              CULTURE.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Premium Afro-inspired streetwear blending heritage,
              storytelling, identity, and modern luxury into one
              movement.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5">
              {/* PRIMARY CTA */}
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000",
                }}
              >
                Shop Now

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/collections"
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full border font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  borderColor: "rgba(255,255,255,0.14)",
                  color: "var(--text)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Play size={16} fill="currentColor" />

                New Collection
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 sm:mt-20">
              {[
                { value: "2026", label: "Founded" },
                { value: "12+", label: "Collections" },
                { value: "Global", label: "Vision" },
              ].map((item) => (
                <div key={item.label}>
                  <h3
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{
                      color: "var(--text)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="text-sm uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            {/* MAIN CARD */}
            <div
              className="relative aspect-[0.8] rounded-[2.5rem] overflow-hidden border"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop"
                alt="PANDUKA Fashion"
                className="w-full h-full object-cover"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* FLOATING INFO CARD */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-3xl p-6"
                style={{
                  backgroundColor: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] mb-3"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Featured Drop
                </p>

                <h3
                  className="text-2xl font-black mb-3"
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  PANDUKA Essentials
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Elevated silhouettes inspired by African youth
                  culture, music, art, and identity.
                </p>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div
              className="absolute -top-6 -left-6 px-6 py-5 rounded-3xl"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
              }}
            >
              <p className="text-xs uppercase tracking-[0.25em] font-bold mb-1">
                Limited
              </p>

              <h4
                className="text-2xl font-black"
                style={{
                  fontFamily: "var(--font-syne)",
                }}
              >
                DROP
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
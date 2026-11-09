"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:flex lg:min-h-svh lg:items-center lg:px-16 lg:py-28"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 30%), var(--bg)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="pointer-events-none absolute -top-50 -right-30 h-137.5 w-137.5 rounded-full opacity-20 blur-3xl"
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="min-w-0 text-left">
            {/* LABEL */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="h-px w-12"
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
              className="mb-8 w-full max-w-full text-left font-black leading-[0.82] tracking-[-0.07em]"
              style={{
                fontSize: "clamp(2rem, 5vw, 5rem)",
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
              className="mb-10 max-w-152 text-left text-base leading-relaxed sm:mb-12 sm:text-lg lg:text-xl"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Premium Afro-inspired streetwear blending heritage,
              storytelling, identity, and modern luxury into one
              movement.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-5">
              {/* PRIMARY CTA */}
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-8 sm:py-4 sm:text-base"
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
                className="group inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-8 sm:py-4 sm:text-base"
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
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-6 sm:mt-14 sm:gap-x-12">
              {[
                { value: "2026", label: "Founded" },
                { value: "12+", label: "Collections" },
                { value: "Global", label: "Vision" },
              ].map((item) => (
                <div key={item.label} className="min-w-20">
                  <h3
                    className="mb-1 text-2xl font-black sm:text-3xl"
                    style={{
                      color: "var(--text)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em]"
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
          <div className="relative mx-auto w-full max-w-136 lg:mx-0 lg:max-w-none">
            {/* MAIN CARD */}
            <div
              className="relative aspect-[0.92] overflow-hidden rounded-4xl border sm:aspect-[1.15] sm:rounded-[2.5rem] lg:aspect-[0.82]"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Image
                src="/africa-black.png"
                alt="PANDUKA Fashion"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* FLOATING INFO CARD */}
              <div
                className="absolute bottom-3 left-3 right-3 rounded-2xl p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-3xl sm:p-6"
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
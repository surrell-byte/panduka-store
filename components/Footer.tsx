"use client";

import Link from "next/link";

/* ─── Inline SVG icons (avoids lucide-react barrel optimiser bug) ─── */
function IconInstagram({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconTikTok({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function IconX({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconArrowUpRight({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-5 sm:px-10 pt-24 pb-10"
      style={{
        background: "linear-gradient(to bottom, var(--bg-alt), var(--footer-bg))",
        color: "var(--footer-text)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">

          {/* BRAND */}
          <div className="max-w-2xl min-w-0">
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Rooted in Culture
            </p>

            <h2
              className="font-black leading-none mb-8"
              style={{ color: "var(--footer-text)", fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem, 8vw, 5rem)" }}
            >
              PANDUKA
            </h2>

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--footer-muted)" }}
            >
              Premium Afro-inspired streetwear blending heritage, storytelling,
              identity, and modern luxury into one movement.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-10">
              <p
                className="text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--footer-muted)" }}
              >
                Join The Movement
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--footer-text)",
                  }}
                />
                <button
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "var(--accent)", color: "#000" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">

            {/* NAVIGATION */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.3em] mb-8"
                style={{ color: "var(--footer-muted)" }}
              >
                Navigation
              </h3>

              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between text-lg font-semibold transition-all duration-300 hover:translate-x-1"
                    style={{ color: "var(--footer-text)" }}
                  >
                    <span>{link.label}</span>
                    <IconArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.3em] mb-8"
                style={{ color: "var(--footer-muted)" }}
              >
                Follow Us
              </h3>

              <div className="flex flex-col gap-5">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-lg font-semibold transition-all duration-300 hover:translate-x-1"
                  style={{ color: "var(--footer-text)" }}
                >
                  <div className="flex items-center gap-3">
                    <IconInstagram size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Instagram</span>
                  </div>
                  <IconArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-lg font-semibold transition-all duration-300 hover:translate-x-1"
                  style={{ color: "var(--footer-text)" }}
                >
                  <div className="flex items-center gap-3">
                    <IconTikTok size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>TikTok</span>
                  </div>
                  <IconArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-lg font-semibold transition-all duration-300 hover:translate-x-1"
                  style={{ color: "var(--footer-text)" }}
                >
                  <div className="flex items-center gap-3">
                    <IconX size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>X / Twitter</span>
                  </div>
                  <IconArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>

              </div>

              {/* CONTACT CARD */}
              <div
                className="mt-12 p-6 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Headquarters
                </p>
                <h4
                  className="text-2xl font-black mb-2"
                  style={{ color: "var(--footer-text)", fontFamily: "var(--font-syne)" }}
                >
                  Harare
                </h4>
                <p className="leading-relaxed" style={{ color: "var(--footer-muted)" }}>
                  Building the future of African luxury fashion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="h-px w-full mb-10"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm mb-2" style={{ color: "var(--footer-text)" }}>
              © 2026 PANDUKA. All Rights Reserved.
            </p>
            <p className="text-sm" style={{ color: "var(--footer-muted)" }}>
              Designed for the next generation of African luxury.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-sm transition-all duration-300 hover:opacity-100"
                style={{ color: "var(--footer-muted)", opacity: 0.8 }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme, THEMES, type ThemeConfig } from "@/components/ThemeProvider";

import {
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: "rgba(10,10,10,0.72)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.25)"
            : "none",
        }}
      >
        {/* TOP GRADIENT LINE */}
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="relative group flex items-center gap-3"
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              className="text-2xl sm:text-3xl font-black tracking-[0.25em] transition-all duration-300"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-syne)",
              }}
            >
              PANDUKA
            </span>

            <span
              className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm uppercase tracking-[0.18em] font-semibold group transition-all duration-300"
                  style={{
                    color: isActive
                      ? "var(--accent)"
                      : "var(--text)",
                  }}
                >
                  {link.label}

                  {/* ACTIVE LINE */}
                  <span
                    className="absolute left-0 -bottom-2 h-[2px] transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: "var(--accent)",
                    }}
                  />

                  {/* HOVER LINE */}
                  <span
                    className="absolute left-0 -bottom-2 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            {/* THEME SWITCHER */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {THEMES.map((t: ThemeConfig) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={t.label}
                  className="relative w-6 h-6 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: t.swatch,
                    transform:
                      theme === t.id
                        ? "scale(1.15)"
                        : "scale(1)",
                    boxShadow:
                      theme === t.id
                        ? `0 0 0 2px var(--accent)`
                        : `0 0 0 1px rgba(255,255,255,0.12)`,
                  }}
                >
                  {theme === t.id && (
                    <span
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        backgroundColor: t.swatch,
                        opacity: 0.4,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CART BUTTON */}
            <button
              className="group flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <ShoppingBag size={18} />

              <span>Cart (0)</span>

              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* MOBILE */}
          <div className="flex lg:hidden items-center gap-3">
            {/* MOBILE CART */}
            <button
              className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <ShoppingBag
                size={18}
                style={{ color: "var(--text)" }}
              />
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--text)",
              }}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(22px)",
        }}
      >
        {/* BACKGROUND GLOW */}
        <div
          className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--accent)",
          }}
        />

        <div className="relative z-10 pt-28 px-8 h-full flex flex-col">
          {/* MOBILE NAV LINKS */}
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-b pb-5 transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="text-3xl font-black"
                    style={{
                      color: isActive
                        ? "var(--accent)"
                        : "var(--text)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {link.label}
                  </span>

                  <ChevronRight
                    size={24}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    style={{
                      color: "var(--accent)",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* MOBILE THEMES */}
          <div className="mt-16">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-5"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Select Theme
            </p>

            <div className="flex gap-5 flex-wrap">
              {THEMES.map((t: ThemeConfig) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: t.swatch,
                      boxShadow:
                        theme === t.id
                          ? `0 0 0 3px var(--accent)`
                          : `0 0 0 1px rgba(255,255,255,0.12)`,
                    }}
                  />

                  <span
                    className="text-sm font-medium"
                    style={{
                      color:
                        theme === t.id
                          ? "var(--accent)"
                          : "var(--text-muted)",
                    }}
                  >
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* MOBILE FOOTER */}
          <div className="pb-10">
            <div
              className="flex items-center justify-between pt-6 border-t"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-sm"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Premium Afro-Luxury Streetwear
              </p>

              <p
                className="text-sm font-semibold"
                style={{
                  color: "var(--accent)",
                }}
              >
                EST. 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE OFFSET */}
      <div className="h-20" />
    </>
  );
}
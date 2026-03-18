"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Custom Design", href: "/custom-designs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      
      {/* Decorative sparkle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-3 left-[12%] w-1 h-1 rounded-full bg-[#C9A84C] opacity-60"></span>
        <span className="absolute top-6 left-[8%] w-0.5 h-0.5 rounded-full bg-[#C9A84C] opacity-40"></span>
        <span className="absolute top-2 left-[18%] w-0.5 h-0.5 rounded-full bg-white opacity-30"></span>
        <span className="absolute top-5 right-[20%] w-1 h-1 rounded-full bg-[#C9A84C] opacity-50"></span>
        <span className="absolute top-2 right-[14%] w-0.5 h-0.5 rounded-full bg-white opacity-30"></span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none">
          <span
            className="text-3xl font-bold italic"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#C9A84C",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            PS
          </span>

          <div className="flex flex-col items-center -mt-0.5">
            <span
              className="text-[9px] font-bold tracking-[0.25em] text-white uppercase"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "0.28em" }}
            >
              Fashion
            </span>

            <span
              className="text-[7px] font-normal tracking-[0.35em] text-white uppercase"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "0.4em" }}
            >
              Designer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors duration-200 font-light tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart + Mobile menu */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <button className="relative text-white hover:text-[#C9A84C] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13H5.4M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#C9A84C] text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-[#C9A84C]/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-white/90 hover:text-[#C9A84C]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
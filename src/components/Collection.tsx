"use client";

import { useState } from "react";
import Link from "next/link";

const collections = [
  {
    id: 1,
    title: "Bridal Couture",
    subtitle: "Eternal Elegance",
    pieces: 24,
    tag: "New Season",
    color: "from-amber-900/60 to-stone-900/90",
    accent: "#C9A84C",
    description: "Handcrafted bridal gowns woven with dreams and golden threads.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: 2,
    title: "Evening Soirée",
    subtitle: "Midnight Glamour",
    pieces: 18,
    tag: "Bestseller",
    color: "from-slate-900/70 to-zinc-900/90",
    accent: "#D4AF37",
    description: "Statement silhouettes designed to own every room you enter.",
    image: "https://images.unsplash.com/photo-1566479179817-e15c77c95af5?w=600&q=80",
  },
  {
    id: 3,
    title: "Festive Edit",
    subtitle: "Celebratory Luxe",
    pieces: 31,
    tag: "Trending",
    color: "from-rose-900/60 to-stone-900/90",
    accent: "#E8C87A",
    description: "Rich fabrics and embroidery for every celebration worth remembering.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
  },
  {
    id: 4,
    title: "Contemporary Edge",
    subtitle: "Modern Minimalism",
    pieces: 15,
    tag: "Exclusive",
    color: "from-neutral-900/70 to-stone-800/90",
    accent: "#BFA76F",
    description: "Clean lines and quiet luxury for the woman who leads.",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80",
  },
  {
    id: 5,
    title: "Resort Bloom",
    subtitle: "Sunlit Dreams",
    pieces: 22,
    tag: "Limited",
    color: "from-teal-900/60 to-stone-900/90",
    accent: "#C9A84C",
    description: "Flowing silhouettes kissed by the warmth of far-off shores.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqbxdwBy5dM3FEPAETuUX9tTWoCUfY6MNTQ6jVw5CFhjp4nMtnqk_CxhnHbQHzA7oExG0UNkVkqwVzQGup7R6ijtSylxDYhuRCVWfKggZaRRJVYN4NE45K&usqp=CAc",
  },
  {
    id: 6,
    title: "Power Suiting",
    subtitle: "Boardroom Couture",
    pieces: 12,
    tag: "New Arrival",
    color: "from-stone-900/70 to-zinc-900/90",
    accent: "#D4AF37",
    description: "Tailored excellence for the woman who commands every space.",
    image: "https://elchic.in/cdn/shop/files/1_bf17a323-eb2e-4f99-91f1-9a5328bdc663_765x.progressive.jpg?v=1753435936",
  },
];

const filters = ["All", "New Season", "Bestseller", "Trending", "Exclusive", "Limited", "New Arrival"];

function CollectionCard({
  col,
  hovered,
  setHovered,
  className = "",
}: {
  col: (typeof collections)[0];
  hovered: number | null;
  setHovered: (id: number | null) => void;
  className?: string;
}) {
  const isHovered = hovered === col.id;
  return (
    <div
      className={`relative cursor-pointer overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(col.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src={col.image}
        alt={col.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: isHovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${col.color}`}
        style={{ opacity: isHovered ? 0.93 : 0.6, transition: "opacity 0.4s ease" }}
      />

      {/* Tag */}
      <div className="absolute top-3 right-3">
        <span
          className="text-[9px] tracking-[0.3em] uppercase px-2.5 py-1"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: `1px solid ${col.accent}55`,
            color: col.accent,
          }}
        >
          {col.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="text-[9px] tracking-[0.45em] uppercase mb-1" style={{ color: col.accent }}>
          {col.subtitle}
        </p>
        <h3 className="text-xl font-light text-white leading-tight">{col.title}</h3>

        <div
          style={{
            maxHeight: isHovered ? "56px" : "0px",
            opacity: isHovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease, opacity 0.35s ease",
          }}
        >
          <p className="text-stone-300 text-xs leading-relaxed mt-2">{col.description}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-stone-500 text-[10px] tracking-widest">{col.pieces} Pieces</span>
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{
              color: col.accent,
              opacity: isHovered ? 1 : 0.6,
              transition: "opacity 0.3s",
            }}
          >
            View All{" "}
            <span
              style={{
                display: "inline-block",
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            >
              →
            </span>
          </span>
        </div>

        {/* Bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            background: `linear-gradient(to right, transparent, ${col.accent}, transparent)`,
            width: isHovered ? "100%" : "0%",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? collections
      : collections.filter((c) => c.tag === activeFilter);

  return (
    <div className="min-h-screen bg-[#0c0b09] text-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* ── Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: "rgba(12,11,9,0.94)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div>
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
        </div>
        <nav>
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-200"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
        </nav>
        <button className="text-stone-400 hover:text-amber-400 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </header>

      {/* ── Page Title (tight, no extra space) ── */}
      <section className="px-16">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb — flush to navbar */}
          <div className="flex items-center gap-4 pt-1 mb-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">Home</span>
            <span className="text-stone-700 text-xs">›</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">Collections</span>
          </div>

          {/* Title row */}
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-2"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
          >
            <div className="flex items-end gap-4">
              <h1 className="text-4xl md:text-[2.8rem] font-light leading-none tracking-tight">
                Our{" "}
                <em
                  style={{
                    fontFamily: "'Palatino Linotype','Book Antiqua',serif",
                    color: "#C9A84C",
                    fontStyle: "italic",
                  }}
                >
                  Collections
                </em>
              </h1>
              <span className="text-[10px] tracking-[0.35em] uppercase text-stone-600 mb-1 hidden md:block">
                {collections.length} Series
              </span>
            </div>
            <p className="text-stone-500 text-[13px] max-w-xs leading-relaxed">
              Exclusively crafted for the woman who dresses with intention.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div
        className="sticky top-[61px] z-40 px-8 py-3"
        style={{
          background: "rgba(12,11,9,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(201,168,76,0.07)",
        }}
      >
        <div
          className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="whitespace-nowrap text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 border transition-all duration-200 flex-shrink-0"
              style={{
                borderColor: activeFilter === f ? "#C9A84C" : "rgba(201,168,76,0.18)",
                color: activeFilter === f ? "#C9A84C" : "#5a554f",
                background: activeFilter === f ? "rgba(201,168,76,0.07)" : "transparent",
              }}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[10px] tracking-widest text-stone-700 flex-shrink-0 hidden md:block pl-4">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <section className="px-8 py-6">
        <div className="max-w-6xl mx-auto space-y-4">

          {/* Row 1: Wide left + 2 stacked right */}
          {filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CollectionCard
                col={filtered[0]}
                hovered={hovered}
                setHovered={setHovered}
                className="md:col-span-2 h-[440px]"
              />
              <div className="flex flex-col gap-4">
                {filtered.slice(1, 3).map((col) => (
                  <CollectionCard
                    key={col.id}
                    col={col}
                    hovered={hovered}
                    setHovered={setHovered}
                    className="h-[210px]"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Row 2: 2 stacked left + Wide right */}
          {filtered.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                {filtered.slice(3, 5).map((col) => (
                  <CollectionCard
                    key={col.id}
                    col={col}
                    hovered={hovered}
                    setHovered={setHovered}
                    className="h-[210px]"
                  />
                ))}
              </div>
              <CollectionCard
                col={filtered[5] ?? filtered[filtered.length - 1]}
                hovered={hovered}
                setHovered={setHovered}
                className="md:col-span-2 h-[440px]"
              />
            </div>
          )}

          {/* Overflow cards */}
          {filtered.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filtered.slice(6).map((col) => (
                <CollectionCard
                  key={col.id}
                  col={col}
                  hovered={hovered}
                  setHovered={setHovered}
                  className="h-[300px]"
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-700 tracking-widest text-xs uppercase">
              No collections found
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-8 pb-14">
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-9 relative overflow-hidden"
          style={{
            border: "1px solid rgba(201,168,76,0.18)",
            background: "rgba(201,168,76,0.025)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
          />
          <div>
            <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-2">
              Bespoke Experience
            </p>
            <h2 className="text-2xl md:text-3xl font-light">
              Can&apos;t find what you&apos;re imagining?
            </h2>
            <p className="text-stone-500 mt-1.5 text-sm max-w-sm leading-relaxed">
              Your vision, our artistry — every dream deserves an exclusive canvas.
            </p>
          </div>
          <button
            className="flex-shrink-0 text-[11px] tracking-[0.4em] uppercase px-8 py-3.5 transition-all duration-300 hover:bg-amber-500/10"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
          >
            Start Custom Design
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-8 py-7 border-t border-stone-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-500 uppercase">PS Fashion Designer</p>
            <p className="text-[10px] text-stone-700 mt-0.5 tracking-widest">© 2025 All Rights Reserved</p>
          </div>
          <div className="flex gap-6 text-[10px] tracking-widest text-stone-600 uppercase">
            {["Instagram", "Pinterest", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="hover:text-amber-400 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

const milestones = [
  { year: "2008", title: "The Beginning", desc: "Started as a small atelier in Indore, stitching dreams for local brides with just a needle, thread, and an unshakeable vision." },
  { year: "2012", title: "First Showcase", desc: "Debuted at the Madhya Pradesh Fashion Week — the collection sold out before the show ended. The world started paying attention." },
  { year: "2016", title: "Bridal Couture Launch", desc: "Launched our exclusive bridal line — hand-embroidered lehengas that blended tradition with contemporary silhouettes." },
  { year: "2019", title: "Celebrity Clientele", desc: "Dressed prominent personalities for award nights, weddings, and editorial spreads. Every piece, a conversation." },
  { year: "2022", title: "Studio Expansion", desc: "Opened a 3,000 sq ft design studio dedicated entirely to custom couture — every client gets their own fitting suite." },
  { year: "2024", title: "PS Digital", desc: "Brought the atelier experience online — so your dream outfit is just a conversation away, wherever you are." },
];

const values = [
  { icon: "✦", title: "Artistry First", desc: "Every stitch is intentional. We treat fabric the way a sculptor treats marble — with reverence and precision." },
  { icon: "◈", title: "Exclusivity", desc: "No two pieces are ever the same. You don't wear our fashion — you wear your story." },
  { icon: "❋", title: "Handcrafted Excellence", desc: "Machines finish garments. Hands finish ours. Each piece passes through at least 12 skilled artisans." },
  { icon: "◇", title: "Timeless Design", desc: "Trends pass. We design for the woman you'll be in ten years — poised, confident, unforgettable." },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    note: "15+ years in luxury couture. Trained in Paris, rooted in India.",
    initials: "PS",
  },
  {
    name: "Ananya Mehta",
    role: "Head of Bridal Design",
    note: "Specialist in hand embroidery and traditional weave techniques.",
    initials: "AM",
  },
  {
    name: "Rohan Verma",
    role: "Lead Pattern Master",
    note: "Expert in draping, silhouettes, and precision tailoring for couture.",
    initials: "RV",
  },
  {
    name: "Kavita Joshi",
    role: "Fabric Curator",
    note: "Sources rare textiles from across India and international ateliers.",
    initials: "KJ",
  },
];

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState<string | null>(null);

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
        <Link href="/" className="flex flex-col items-center leading-none">
          <span
            className="text-3xl font-bold italic"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#C9A84C", lineHeight: 1 }}
          >
            PS
          </span>
          <div className="flex flex-col items-center -mt-0.5">
            <span className="text-[9px] font-bold tracking-[0.25em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>
              Fashion
            </span>
            <span className="text-[7px] font-normal tracking-[0.35em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>
              Designer
            </span>
          </div>
        </Link>

        <nav>
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-200"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* ── Hero ── */}
      <section className="relative pt-[61px] overflow-hidden">
        {/* Background texture lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 80px)",
        }} />

        <div className="max-w-6xl mx-auto px-8 md:px-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-4 pt-2 mb-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">Home</span>
            <span className="text-stone-700 text-xs">›</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">About</span>
          </div>

          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-3 mb-12"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
          >
            <h1 className="text-4xl md:text-[2.8rem] font-light leading-none tracking-tight">
              Our{" "}
              <em style={{ fontFamily: "'Palatino Linotype','Book Antiqua',serif", color: "#C9A84C", fontStyle: "italic" }}>
                Story
              </em>
            </h1>
            <p className="text-stone-500 text-[13px] max-w-xs leading-relaxed">
              Couture born from passion, perfected through craft.
            </p>
          </div>

          {/* Asymmetric intro block */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
            <div className="md:col-span-3 space-y-5">
              <p className="text-stone-200 text-lg font-light leading-relaxed" style={{ fontFamily: "'Palatino Linotype', serif" }}>
                "Fashion is not just clothing — it is the language a woman speaks before she says a word."
              </p>
              <p className="text-stone-400 text-sm leading-loose">
                PS Fashion Designer was born from a single, unwavering belief: every woman deserves to be dressed in something made entirely for her. Not off a rack. Not mass-produced. But conceived, designed, and crafted with her alone in mind.
              </p>
              <p className="text-stone-500 text-sm leading-loose">
                For over sixteen years, our atelier has been a quiet sanctuary where fabric becomes sculpture, where tradition meets contemporary vision, and where each client leaves not just with a garment — but with a piece of wearable art that tells her story.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-px w-10 bg-amber-600/50" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-amber-600">Indore, Madhya Pradesh</span>
              </div>
            </div>

            {/* Stats column */}
            <div className="md:col-span-2 flex flex-col justify-center gap-6">
              {[
                { num: "16+", label: "Years of Couture" },
                { num: "2,400+", label: "Bespoke Pieces Created" },
                { num: "12", label: "Artisans per Garment" },
                { num: "100%", label: "Hand Finished" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-5 group">
                  <div
                    className="flex-shrink-0 w-px self-stretch"
                    style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }}
                  />
                  <div>
                    <p
                      className="text-3xl font-light"
                      style={{ fontFamily: "'Palatino Linotype', serif", color: "#C9A84C" }}
                    >
                      {s.num}
                    </p>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-8 md:px-16 py-14" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-amber-600/50" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500">What We Stand For</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 group hover:border-amber-600/40 transition-all duration-300 relative overflow-hidden"
                style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.02)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.06), transparent 70%)" }}
                />
                <span className="text-xl mb-4 block" style={{ color: "#C9A84C" }}>{v.icon}</span>
                <p className="text-[11px] tracking-[0.35em] uppercase text-white mb-2">{v.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-8 md:px-16 py-14" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-amber-600/50" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500">Our Journey</p>
          </div>

          <div className="relative">
            {/* Vertical spine */}
            <div
              className="absolute left-[60px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }}
            />

            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="group flex gap-6 md:gap-10 cursor-pointer"
                  onClick={() => setActiveYear(activeYear === m.year ? null : m.year)}
                >
                  {/* Year */}
                  <div className="flex-shrink-0 w-[60px] flex flex-col items-center gap-2 pt-4">
                    <span
                      className="text-[11px] tracking-widest font-light transition-colors duration-200"
                      style={{ color: activeYear === m.year ? "#C9A84C" : "#5a554f" }}
                    >
                      {m.year}
                    </span>
                    {/* Dot on spine */}
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300 hidden md:block"
                      style={{
                        background: activeYear === m.year ? "#C9A84C" : "rgba(201,168,76,0.25)",
                        boxShadow: activeYear === m.year ? "0 0 8px rgba(201,168,76,0.5)" : "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 px-5 py-4 transition-all duration-300"
                    style={{
                      border: `1px solid ${activeYear === m.year ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.1)"}`,
                      background: activeYear === m.year ? "rgba(201,168,76,0.04)" : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className="text-[11px] tracking-[0.3em] uppercase transition-colors duration-200"
                        style={{ color: activeYear === m.year ? "#C9A84C" : "#d6d0c8" }}
                      >
                        {m.title}
                      </p>
                      <span
                        className="text-[10px] transition-transform duration-300"
                        style={{
                          color: "#C9A84C",
                          transform: activeYear === m.year ? "rotate(45deg)" : "rotate(0deg)",
                          display: "inline-block",
                        }}
                      >
                        ✦
                      </span>
                    </div>

                    <div
                      style={{
                        maxHeight: activeYear === m.year ? "80px" : "0px",
                        opacity: activeYear === m.year ? 1 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.4s ease, opacity 0.3s ease",
                      }}
                    >
                      <p className="text-stone-400 text-xs leading-relaxed mt-2">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-8 md:px-16 py-14" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-amber-600/50" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500">The Hands Behind the Magic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-5 hover:border-amber-600/30 transition-all duration-300 relative"
                style={{ border: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.01)" }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-amber-500/50"
                  style={{
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.06)",
                  }}
                >
                  <span
                    className="text-sm font-light tracking-widest"
                    style={{ color: "#C9A84C", fontFamily: "'Palatino Linotype', serif" }}
                  >
                    {member.initials}
                  </span>
                </div>

                <p className="text-white text-[13px] tracking-wide mb-0.5">{member.name}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#C9A84C" }}>
                  {member.role}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed">{member.note}</p>

                {/* Bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[1px] transition-all duration-500"
                  style={{
                    background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
                    width: "0%",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.parentElement;
                    if (!parent) return;
                    parent.addEventListener("mouseenter", () => { el.style.width = "100%"; });
                    parent.addEventListener("mouseleave", () => { el.style.width = "0%"; });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 md:px-16 pb-16 pt-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10 relative overflow-hidden"
            style={{ border: "1px solid rgba(201,168,76,0.18)", background: "rgba(201,168,76,0.025)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
            />
            <div>
              <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-2">Begin Your Journey</p>
              <h2 className="text-2xl md:text-3xl font-light">
                Ready to wear your story?
              </h2>
              <p className="text-stone-500 mt-1.5 text-sm max-w-sm leading-relaxed">
                Let's create something exclusively for you — one stitch at a time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/collections"
                className="text-[11px] tracking-[0.4em] uppercase px-7 py-3.5 text-center transition-all duration-300 hover:bg-stone-800"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#a8924a" }}
              >
                View Collections
              </Link>
              <Link
                href="/custom-design"
                className="text-[11px] tracking-[0.4em] uppercase px-7 py-3.5 text-center transition-all duration-300 hover:bg-amber-600"
                style={{ background: "#C9A84C", color: "#0c0b09" }}
              >
                Custom Design
              </Link>
            </div>
          </div>
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
              <a key={s} href="#" className="hover:text-amber-400 transition-colors">{s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
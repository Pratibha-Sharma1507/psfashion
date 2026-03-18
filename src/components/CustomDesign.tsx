"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { num: "01", label: "Your Vision" },
  { num: "02", label: "Measurements" },
  { num: "03", label: "Fabric & Finish" },
  { num: "04", label: "Confirm" },
];

const occasions = [
  { id: "bridal", label: "Bridal", icon: "✦" },
  { id: "evening", label: "Evening", icon: "◈" },
  { id: "festive", label: "Festive", icon: "❋" },
  { id: "casual", label: "Casual Luxe", icon: "◇" },
  { id: "office", label: "Office Wear", icon: "▣" },
  { id: "party", label: "Party", icon: "◉" },
];

const fabrics = [
  { id: "silk", label: "Silk", desc: "Fluid & luminous" },
  { id: "chiffon", label: "Chiffon", desc: "Light & ethereal" },
  { id: "velvet", label: "Velvet", desc: "Rich & dramatic" },
  { id: "crepe", label: "Crepe", desc: "Structured & matte" },
  { id: "organza", label: "Organza", desc: "Crisp & sheer" },
  { id: "brocade", label: "Brocade", desc: "Embellished & bold" },
];

const embellishments = [
  "Hand Embroidery", "Zari Work", "Sequins", "Mirror Work",
  "Thread Work", "Beading", "Lace Trim", "Plain (No Embellishment)",
];

type FormData = {
  occasion: string;
  description: string;
  budget: string;
  timeline: string;
  bust: string;
  waist: string;
  hips: string;
  height: string;
  fabric: string;
  color: string;
  embellishment: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export default function CustomDesignPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    occasion: "",
    description: "",
    budget: "",
    timeline: "",
    bust: "",
    waist: "",
    hips: "",
    height: "",
    fabric: "",
    color: "",
    embellishment: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canProceed = () => {
    if (currentStep === 0) return form.occasion && form.description && form.budget && form.timeline;
    if (currentStep === 1) return form.bust && form.waist && form.hips && form.height;
    if (currentStep === 2) return form.fabric && form.color && form.embellishment;
    if (currentStep === 3) return form.name && form.email && form.phone;
    return false;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0c0b09] flex items-center justify-center px-8" style={{ fontFamily: "'Georgia', serif" }}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ border: "1px solid #C9A84C" }}>
            <span style={{ color: "#C9A84C", fontSize: "24px" }}>✦</span>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 mb-3">Request Received</p>
          <h2 className="text-3xl font-light text-white mb-4">
            Your design journey<br />
            <em style={{ fontFamily: "'Palatino Linotype', serif", color: "#C9A84C", fontStyle: "italic" }}>begins now</em>
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-8">
            Our designer will review your requirements and reach out within <strong className="text-stone-300">48 hours</strong> to begin crafting your exclusive piece.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase px-8 py-3.5 transition-all duration-300 hover:bg-amber-500/10"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
          <span className="text-3xl font-bold italic" style={{ fontFamily: "'Dancing Script', cursive", color: "#C9A84C", lineHeight: 1 }}>
            PS
          </span>
          <div className="flex flex-col items-center -mt-0.5">
            <span className="text-[9px] font-bold tracking-[0.25em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>Fashion</span>
            <span className="text-[7px] font-normal tracking-[0.35em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>Designer</span>
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

        {/* Cart */}
        <button className="text-stone-400 hover:text-amber-400 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </header>

      {/* ── Page Header ── */}
      <section className="pt-[61px] px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 pt-2 mb-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">Home</span>
            <span className="text-stone-700 text-xs">›</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">Custom Design</span>
          </div>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-3"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
          >
            <h1 className="text-4xl md:text-[2.8rem] font-light leading-none tracking-tight">
              Custom{" "}
              <em style={{ fontFamily: "'Palatino Linotype','Book Antiqua',serif", color: "#C9A84C", fontStyle: "italic" }}>
                Design
              </em>
            </h1>
            <p className="text-stone-500 text-[13px] max-w-xs leading-relaxed">
              Tell us your dream — we'll craft it exclusively for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stepper ── */}
      <section className="px-8 md:px-16 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-0 mb-8">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                {/* Step circle */}
                <button
                  onClick={() => i < currentStep && setCurrentStep(i)}
                  className="flex flex-col items-center gap-1 group flex-shrink-0"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center text-[10px] tracking-widest transition-all duration-300"
                    style={{
                      border: `1px solid ${i <= currentStep ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                      background: i === currentStep ? "rgba(201,168,76,0.12)" : i < currentStep ? "rgba(201,168,76,0.08)" : "transparent",
                      color: i <= currentStep ? "#C9A84C" : "#5a554f",
                    }}
                  >
                    {i < currentStep ? "✓" : s.num}
                  </div>
                  <span
                    className="text-[9px] tracking-[0.3em] uppercase hidden md:block"
                    style={{ color: i === currentStep ? "#C9A84C" : i < currentStep ? "#a8924a" : "#5a554f" }}
                  >
                    {s.label}
                  </span>
                </button>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 h-px mx-2 transition-all duration-500"
                    style={{ background: i < currentStep ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.12)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Step Panels ── */}
          <div
            className="p-8 relative overflow-hidden"
            style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, rgba(201,168,76,0.05), transparent 70%)" }} />

            {/* STEP 1 — Your Vision */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500 mb-4">Choose Occasion</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {occasions.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => set("occasion", o.id)}
                        className="flex items-center gap-3 px-4 py-3 text-left transition-all duration-200"
                        style={{
                          border: `1px solid ${form.occasion === o.id ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                          background: form.occasion === o.id ? "rgba(201,168,76,0.08)" : "transparent",
                          color: form.occasion === o.id ? "#C9A84C" : "#8a8480",
                        }}
                      >
                        <span style={{ color: "#C9A84C", fontSize: "12px" }}>{o.icon}</span>
                        <span className="text-[11px] tracking-widest uppercase">{o.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">
                    Describe Your Dream Outfit
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Eg: A floor-length evening gown with a plunging back, deep emerald green, with delicate hand embroidery along the neckline..."
                    rows={4}
                    className="w-full bg-transparent text-stone-300 text-sm leading-relaxed resize-none outline-none placeholder:text-stone-700"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "12px 14px" }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className="w-full bg-[#0c0b09] text-stone-300 text-sm outline-none cursor-pointer"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "10px 14px", color: form.budget ? "#d6d0c8" : "#5a554f" }}
                    >
                      <option value="" disabled>Select budget</option>
                      <option value="5k-10k">₹5,000 – ₹10,000</option>
                      <option value="10k-25k">₹10,000 – ₹25,000</option>
                      <option value="25k-50k">₹25,000 – ₹50,000</option>
                      <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                      <option value="1l+">₹1,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={(e) => set("timeline", e.target.value)}
                      className="w-full bg-[#0c0b09] text-stone-300 text-sm outline-none cursor-pointer"
                      style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "10px 14px", color: form.timeline ? "#d6d0c8" : "#5a554f" }}
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="rush">Rush — Under 2 weeks</option>
                      <option value="standard">Standard — 3–4 weeks</option>
                      <option value="relaxed">Relaxed — 5–8 weeks</option>
                      <option value="flexible">Flexible — No rush</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 — Measurements */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500">Your Measurements (in inches)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: "bust", label: "Bust", hint: "e.g. 34" },
                    { key: "waist", label: "Waist", hint: "e.g. 28" },
                    { key: "hips", label: "Hips", hint: "e.g. 36" },
                    { key: "height", label: "Height", hint: "e.g. 64" },
                  ].map(({ key, label, hint }) => (
                    <div key={key}>
                      <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">{label}</label>
                      <input
                        type="number"
                        value={form[key as keyof FormData]}
                        onChange={(e) => set(key as keyof FormData, e.target.value)}
                        placeholder={hint}
                        className="w-full bg-transparent text-stone-200 text-sm outline-none placeholder:text-stone-700"
                        style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "10px 14px" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Measurement guide */}
                <div
                  className="flex gap-4 p-4"
                  style={{ border: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.03)" }}
                >
                  <span style={{ color: "#C9A84C", fontSize: "18px", flexShrink: 0 }}>ℹ</span>
                  <div>
                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      Measure over your undergarments. For bust — measure around the fullest part. For waist — measure at the narrowest point. For hips — measure around the fullest part, about 8 inches below the waist.
                    </p>
                    <p className="text-[10px] text-amber-600 mt-2 tracking-wide">
                      Not sure? Our designer will guide you during consultation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Fabric & Finish */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500 mb-4">Choose Fabric</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {fabrics.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => set("fabric", f.id)}
                        className="text-left px-4 py-3 transition-all duration-200"
                        style={{
                          border: `1px solid ${form.fabric === f.id ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                          background: form.fabric === f.id ? "rgba(201,168,76,0.08)" : "transparent",
                        }}
                      >
                        <p className="text-[11px] tracking-widest uppercase" style={{ color: form.fabric === f.id ? "#C9A84C" : "#d6d0c8" }}>
                          {f.label}
                        </p>
                        <p className="text-[10px] text-stone-600 mt-0.5">{f.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">
                    Preferred Color / Shade
                  </label>
                  <input
                    type="text"
                    value={form.color}
                    onChange={(e) => set("color", e.target.value)}
                    placeholder="e.g. Deep Emerald, Dusty Rose, Ivory, Midnight Black..."
                    className="w-full bg-transparent text-stone-300 text-sm outline-none placeholder:text-stone-700"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500 mb-3">Embellishment</p>
                  <div className="flex flex-wrap gap-2">
                    {embellishments.map((e) => (
                      <button
                        key={e}
                        onClick={() => set("embellishment", e)}
                        className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 transition-all duration-200"
                        style={{
                          border: `1px solid ${form.embellishment === e ? "#C9A84C" : "rgba(201,168,76,0.18)"}`,
                          color: form.embellishment === e ? "#C9A84C" : "#6b6560",
                          background: form.embellishment === e ? "rgba(201,168,76,0.07)" : "transparent",
                        }}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 — Confirm */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500">Contact Details</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                    { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                    { key: "phone", label: "Phone", placeholder: "+91 98765 43210", type: "tel" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">{label}</label>
                      <input
                        type={type}
                        value={form[key as keyof FormData]}
                        onChange={(e) => set(key as keyof FormData, e.target.value)}
                        placeholder={placeholder}
                        className="w-full bg-transparent text-stone-200 text-sm outline-none placeholder:text-stone-700"
                        style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "10px 14px" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">
                    Any Additional Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Reference images, inspiration, special requirements..."
                    rows={3}
                    className="w-full bg-transparent text-stone-300 text-sm leading-relaxed resize-none outline-none placeholder:text-stone-700"
                    style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "12px 14px" }}
                  />
                </div>

                {/* Summary */}
                <div
                  className="p-5 space-y-2"
                  style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.03)" }}
                >
                  <p className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-3">Order Summary</p>
                  {[
                    ["Occasion", occasions.find(o => o.id === form.occasion)?.label || "—"],
                    ["Budget", form.budget || "—"],
                    ["Timeline", form.timeline || "—"],
                    ["Measurements", `B:${form.bust}" W:${form.waist}" H:${form.hips}" Ht:${form.height}"`],
                    ["Fabric", fabrics.find(f => f.id === form.fabric)?.label || "—"],
                    ["Color", form.color || "—"],
                    ["Embellishment", form.embellishment || "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-[11px]">
                      <span className="text-stone-600 tracking-wider uppercase">{k}</span>
                      <span className="text-stone-300">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Navigation Buttons ── */}
            <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
              <button
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase transition-all duration-200"
                style={{ color: currentStep === 0 ? "#3a3630" : "#8a8480" }}
                disabled={currentStep === 0}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => canProceed() && setCurrentStep((s) => s + 1)}
                  className="flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase px-8 py-3 transition-all duration-300"
                  style={{
                    border: `1px solid ${canProceed() ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                    color: canProceed() ? "#C9A84C" : "#5a554f",
                    background: canProceed() ? "rgba(201,168,76,0.07)" : "transparent",
                    cursor: canProceed() ? "pointer" : "not-allowed",
                  }}
                >
                  Continue
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => canProceed() && setSubmitted(true)}
                  className="flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase px-8 py-3 transition-all duration-300"
                  style={{
                    border: `1px solid ${canProceed() ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                    color: canProceed() ? "#0c0b09" : "#5a554f",
                    background: canProceed() ? "#C9A84C" : "transparent",
                    cursor: canProceed() ? "pointer" : "not-allowed",
                  }}
                >
                  Submit Request ✦
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Custom ── */}
      <section className="px-8 md:px-16 py-10 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "✦", title: "100% Exclusive", desc: "Every piece is one-of-a-kind, made only for you." },
              { icon: "◈", title: "Master Crafted", desc: "Decades of expertise in couture tailoring." },
              { icon: "❋", title: "Perfect Fit", desc: "Tailored precisely to your measurements." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 relative overflow-hidden"
                style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.02)" }}
              >
                <span className="text-2xl mb-4 block" style={{ color: "#C9A84C" }}>{item.icon}</span>
                <p className="text-[11px] tracking-[0.35em] uppercase text-white mb-2">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-8 py-7 border-t border-stone-800/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-500 uppercase">PS Fashion Designer</p>
            <p className="text-[10px] text-stone-700 mt-0.5 tracking-widest">© 2025 All Rights Reserved</p>
          </div>
          <div className="flex gap-6 text-[10px] tracking-widest text-stone-600 uppercase">
            {["Instagram", "Pinterest", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="hover:text-amber-400 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
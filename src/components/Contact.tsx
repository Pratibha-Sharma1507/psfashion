"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Kolar, Bhopal",
    sub: "Madhya Pradesh",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 9999999999",
    sub: "Mon – Sat, 10am – 7pm",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@psfashion.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Studio Hours",
    value: "Mon – Sat: 10am – 7pm",
    sub: "Sunday by appointment only",
  },
];

const subjects = [
  "General Enquiry",
  "Custom Design",
  "Bridal Consultation",
  "Order Status",
  "Collaboration",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canSubmit = form.name && form.email && form.subject && form.message;

  if (submitted) {
    return (
      <div
        className="min-h-screen bg-[#0c0b09] flex items-center justify-center px-8"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <div className="text-center max-w-md">
          <div
            className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
            style={{ border: "1px solid #C9A84C" }}
          >
            <span style={{ color: "#C9A84C", fontSize: "22px" }}>✦</span>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 mb-3">Message Sent</p>
          <h2 className="text-3xl font-light text-white mb-4">
            Thank you,{" "}
            <em
              style={{
                fontFamily: "'Palatino Linotype', serif",
                color: "#C9A84C",
                fontStyle: "italic",
              }}
            >
              {form.name.split(" ")[0]}
            </em>
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-8">
            We've received your message and will get back to you within{" "}
            <span className="text-stone-300">24 hours</span>. Looking forward to connecting with you.
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
    <div
      className="min-h-screen bg-[#0c0b09] text-white"
      style={{ fontFamily: "'Georgia', serif" }}
    >
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
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#C9A84C",
              lineHeight: 1,
            }}
          >
            PS
          </span>
          <div className="flex flex-col items-center -mt-0.5">
            <span
              className="text-[9px] font-bold tracking-[0.25em] text-white uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Fashion
            </span>
            <span
              className="text-[7px] font-normal tracking-[0.35em] text-white uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Designer
            </span>
          </div>
        </Link>

        <nav>
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 12H5M5 12l7-7M5 12l7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
        </nav>

        <button className="text-stone-400 hover:text-amber-400 transition-colors">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </header>

      {/* ── Page Header ── */}
      <section className="pt-[61px] px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 pt-2 mb-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">Home</span>
            <span className="text-stone-700 text-xs">›</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500">Contact</span>
          </div>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-3"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
          >
            <h1 className="text-4xl md:text-[2.8rem] font-light leading-none tracking-tight">
              Get in{" "}
              <em
                style={{
                  fontFamily: "'Palatino Linotype','Book Antiqua',serif",
                  color: "#C9A84C",
                  fontStyle: "italic",
                }}
              >
                Touch
              </em>
            </h1>
            <p className="text-stone-500 text-[13px] max-w-xs leading-relaxed">
              A conversation is where every great piece begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="px-8 md:px-16 py-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 group hover:border-amber-600/30 transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,168,76,0.1)",
                  background: "rgba(201,168,76,0.015)",
                }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                  style={{
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#C9A84C",
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-1">
                    {info.label}
                  </p>
                  <p className="text-stone-200 text-sm">{info.value}</p>
                  <p className="text-stone-600 text-xs mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="p-5"
              style={{
                border: "1px solid rgba(201,168,76,0.1)",
                background: "rgba(201,168,76,0.015)",
              }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-4">
                Follow Us
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Instagram",
                    handle: "@psfashiondesigner",
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    name: "Pinterest",
                    handle: "PS Fashion Designer",
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.135-1.867 3.135-4.56 0-2.385-1.714-4.052-4.161-4.052-2.834 0-4.496 2.126-4.496 4.324 0 .856.33 1.773.741 2.274a.3.3 0 01.069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.336.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z" />
                      </svg>
                    ),
                  },
                  {
                    name: "WhatsApp",
                    handle: "+91 98765 43210",
                    icon: (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.659 1.438 5.168L2 22l4.975-1.306A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    className="flex items-center gap-3 group/social"
                  >
                    <span
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover/social:border-amber-500/50"
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#C9A84C",
                      }}
                    >
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500">{s.name}</p>
                      <p className="text-stone-400 text-xs group-hover/social:text-amber-400 transition-colors duration-200">
                        {s.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div
            className="lg:col-span-3 p-8 relative overflow-hidden"
            style={{
              border: "1px solid rgba(201,168,76,0.15)",
              background: "rgba(201,168,76,0.02)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(201,168,76,0.05), transparent 70%)",
              }}
            />

            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 mb-6">
              Send a Message
            </p>

            <div className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "phone", label: "Phone (Optional)", placeholder: "+91 99999999999", type: "tel" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      value={form[key as keyof FormData]}
                      onChange={(e) => set(key as keyof FormData, e.target.value)}
                      onFocus={() => setFocused(key)}
                      onBlur={() => setFocused(null)}
                      placeholder={placeholder}
                      className="w-full bg-transparent text-stone-200 text-sm outline-none placeholder:text-stone-700 transition-all duration-200"
                      style={{
                        border: `1px solid ${focused === key ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)"}`,
                        padding: "10px 14px",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-stone-200 text-sm outline-none placeholder:text-stone-700 transition-all duration-200"
                  style={{
                    border: `1px solid ${focused === "email" ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)"}`,
                    padding: "10px 14px",
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">
                  Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <button
                      key={s}
                      onClick={() => set("subject", s)}
                      className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 transition-all duration-200"
                      style={{
                        border: `1px solid ${form.subject === s ? "#C9A84C" : "rgba(201,168,76,0.18)"}`,
                        color: form.subject === s ? "#C9A84C" : "#6b6560",
                        background: form.subject === s ? "rgba(201,168,76,0.07)" : "transparent",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] tracking-[0.35em] uppercase text-stone-500 block mb-2">
                  Your Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="w-full bg-transparent text-stone-300 text-sm leading-relaxed resize-none outline-none placeholder:text-stone-700 transition-all duration-200"
                  style={{
                    border: `1px solid ${focused === "message" ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)"}`,
                    padding: "12px 14px",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] text-stone-700 tracking-wide">
                  We reply within 24 hours
                </p>
                <button
                  onClick={() => canSubmit && setSubmitted(true)}
                  className="flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase px-8 py-3.5 transition-all duration-300"
                  style={{
                    border: `1px solid ${canSubmit ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                    color: canSubmit ? "#0c0b09" : "#5a554f",
                    background: canSubmit ? "#C9A84C" : "transparent",
                    cursor: canSubmit ? "pointer" : "not-allowed",
                  }}
                >
                  Send Message
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Map Placeholder ── */}
        <div className="max-w-6xl mx-auto mt-6">
          <div
            className="w-full h-48 flex items-center justify-center relative overflow-hidden"
            style={{
              border: "1px solid rgba(201,168,76,0.12)",
              background: "rgba(201,168,76,0.02)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,rgba(201,168,76,0.04) 0px,rgba(201,168,76,0.04) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(201,168,76,0.04) 0px,rgba(201,168,76,0.04) 1px,transparent 1px,transparent 40px)",
              }}
            />
            <div className="text-center z-10">
              <div
                className="w-10 h-10 mx-auto mb-3 flex items-center justify-center"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-stone-500">Kolar, Bhopal</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-700 mt-0.5">Bhopal, MP</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-[10px] tracking-[0.35em] uppercase transition-colors duration-200 hover:text-amber-400"
                style={{ color: "#C9A84C" }}
              >
                Open in Maps →
              </a>
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
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#C9A84C]/20">
      {/* Top newsletter bar */}
      <div className="bg-[#0d0d0d] border-b border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-white text-sm font-light tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Subscribe & Get{" "}
              <span className="text-[#C9A84C] italic" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.15em" }}>
                Exclusive Offers
              </span>
            </p>
            <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "Georgia, serif" }}>
              New collections, bridal lookbooks & bespoke offers — direct to your inbox.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 bg-white/5 border border-white/15 border-r-0 text-white text-xs px-4 py-3 outline-none placeholder:text-white/30 focus:border-[#C9A84C]/60 transition-colors duration-200"
              style={{ fontFamily: "Georgia, serif" }}
            />
            <button
              type="submit"
              className="bg-[#C9A84C] text-black text-xs font-bold tracking-[0.18em] uppercase px-6 py-3 hover:bg-[#E3C56E] transition-colors duration-300 whitespace-nowrap"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          {/* Logo */}
          <div className="flex flex-col items-start mb-5">
            <span
              className="text-4xl font-bold italic leading-none"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#C9A84C" }}
            >
              PS
            </span>
            <span
              className="text-[9px] font-bold tracking-[0.28em] text-white uppercase -mt-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Fashion
            </span>
            <span
              className="text-[7px] tracking-[0.4em] text-white/60 uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Designer
            </span>
          </div>
          <p
            className="text-white/45 text-xs leading-relaxed font-light mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Exclusive bridal lehengas, designer sarees &amp; wedding collections
            crafted with centuries-old artisanship and modern elegance.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { label: "Pinterest", path: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
              { label: "YouTube", path: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center border border-white/15 text-white/40 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4
            className="text-white text-xs tracking-[0.25em] uppercase mb-5 pb-3 border-b border-white/10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Collections
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Bridal Lehengas", href: "/bridal-lehengas" },
              { label: "Designer Sarees", href: "#" },
              { label: "Wedding Collections", href: "#" },
              { label: "Anarkali Gowns", href: "#" },
              { label: "Sharara Sets", href: "#" },
              { label: "Custom Design", href: "#" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white/45 text-xs font-light hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <span className="w-3 h-px bg-[#C9A84C]/30 group-hover:w-5 group-hover:bg-[#C9A84C] transition-all duration-300" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white text-xs tracking-[0.25em] uppercase mb-5 pb-3 border-b border-white/10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Services
          </h4>
          <ul className="space-y-3">
            {[
              "Bespoke Tailoring",
              "Bridal Consultation",
              "Home Delivery",
              "Alterations",
              "Fabric Sourcing",
              "Bulk Orders",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white/45 text-xs font-light hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <span className="w-3 h-px bg-[#C9A84C]/30 group-hover:w-5 group-hover:bg-[#C9A84C] transition-all duration-300" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white text-xs tracking-[0.25em] uppercase mb-5 pb-3 border-b border-white/10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contact Us
          </h4>
          <ul className="space-y-4">
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "12, Bridal Lane, Chandni Chowk\nNew Delhi – 110006",
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "+91 98765 43210\n+91 11 2345 6789",
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "hello@psfashion.in\nbespoke@psfashion.in",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                text: "Mon – Sat: 10am – 7pm\nSunday: By Appointment",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <svg
                  className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <p
                  className="text-white/45 text-xs font-light leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-white/25 text-[11px] tracking-wider"
            style={{ fontFamily: "Georgia, serif" }}
          >
            © 2026 PS Fashion Designer. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Shipping Policy", "Refund Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/25 text-[11px] hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontFamily: "Georgia, serif" }}
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

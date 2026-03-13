import Link from "next/link";

const sarees = [
  {
    id: 1,
    name: "White Kanjivaram Saree",
    fabric: "Pure Kanjivaram Silk",
    embroidery: "Zari & Temple Border Weave",
    price: "₹1,85,000",
    tag: "Best Seller",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-P-PR-SR-40063-BL_C-XS-1.avif?v=1762506979",
  },
  {
    id: 2,
    name: "Ivory Pearl Saree",
    fabric: "Soft Net & Organza",
    embroidery: "Pearl & Sequin Embroidery",
    price: "₹2,40,000",
    tag: "New Arrival",
    image:
      "https://utsarees.in/cdn/shop/files/shopping.webp?v=1738907222&width=1080",
  },
  {
    id: 3,
    name: "Royal Velvet Banarasi Saree",
    fabric: "Italian Velvet & Banarasi",
    embroidery: "Gota Patti & Thread Work",
    price: "₹3,10,000",
    tag: "Exclusive",
    image:
      "https://clothsvilla.com/cdn/shop/articles/25_73d06c7b-a9e7-454f-a25d-d9772f0b8886_770x500.jpg?v=1763199262",
  },
  {
    id: 4,
    name: "White Georgette Saree",
    fabric: "Georgette",
    embroidery: "3D Floral Threadwork",
    price: "₹1,45,000",
    tag: "Trending",
    image:
      "https://getethnic.com/wp-content/uploads/2019/11/14-2.jpg",
  },
  {
    id: 5,
    name: "Midnight Blue Chanderi Saree",
    fabric: "Raw Silk & Chanderi",
    embroidery: "Mirror & Resham Work",
    price: "₹1,60,000",
    tag: "New Arrival",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-PR-SR-76954-BL_C-XS-1.jpg?v=1765530942&width=533",
  },
  {
    id: 6,
    name: "Golden Zari Bridal Saree",
    fabric: "Katan Silk",
    embroidery: "Real Zari Gold Weave",
    price: "₹4,20,000",
    tag: "Couture",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-PR-SR-51283-PTT-BL_C-XS_1.png?v=1758365635&width=533",
  },
  {
    id: 7,
    name: "Sage Green Tissue Saree",
    fabric: "Tissue Silk",
    embroidery: "Kundan & Meenakari",
    price: "₹1,20,000",
    tag: "Bestseller",
    image:
      "https://s-media-cache-ak0.pinimg.com/originals/2d/49/b7/2d49b7530607f68af6ab5189fcaf6b77.jpg",
  },
  {
    id: 8,
    name: "Coral Embellished Saree",
    fabric: "Pure Crepe",
    embroidery: "Aari & Cutdana Work",
    price: "₹1,75,000",
    tag: "Limited Edition",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-Curated_This_Season-Banner-01.webp?v=1754918347&width=1920",
  },
];

const tagColors: Record<string, string> = {
  "Best Seller": "bg-[#C9A84C] text-black",
  "New Arrival": "bg-white text-black",
  Exclusive: "bg-black text-[#C9A84C] border border-[#C9A84C]",
  Trending: "bg-[#C9A84C] text-black",
  Couture: "bg-black text-[#C9A84C] border border-[#C9A84C]",
  Bestseller: "bg-[#C9A84C] text-black",
  "Limited Edition": "bg-white text-black",
};

export default function SareePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* ── Fixed Navbar ── */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
              <span className="text-[9px] font-bold tracking-[0.28em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>
                Fashion
              </span>
              <span className="text-[7px] tracking-[0.4em] text-white uppercase" style={{ fontFamily: "Georgia, serif" }}>
                Designer
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {["Home", "Collections", "Custom Design", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : "#"}
                  className="text-sm text-white/80 hover:text-[#C9A84C] transition-colors duration-200 font-light tracking-wide"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="flex items-center gap-2 text-[#C9A84C] text-xs tracking-widest hover:text-white transition-colors duration-200"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "320px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://manishmalhotra.in/cdn/shop/files/MM-PR-SR-76965_C-XS-1.png?v=1758398347')`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundColor: "#200a0a",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Heritage · Craftsmanship · Couture
          </p>
          <h1
            className="text-white text-4xl md:text-6xl font-light mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bridal{" "}
            <span
              className="italic"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#C9A84C", fontSize: "1.15em" }}
            >
              Sarees
            </span>
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#C9A84C]/50" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
            <span className="w-12 h-px bg-[#C9A84C]/50" />
          </div>
          <p
            className="text-white/60 text-sm font-light max-w-md"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hand-woven with zari, gota patti &amp; real gold thread on the finest Kanjivaram &amp; Banarasi silks
          </p>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="border-b border-white/8 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-3">
          <span
            className="text-white/40 text-xs tracking-widest uppercase mr-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Filter:
          </span>
          {["All", "New Arrivals", "Best Sellers", "Exclusive", "Under ₹2L", "Above ₹2L"].map(
            (f, i) => (
              <button
                key={f}
                className={`px-4 py-1.5 text-xs tracking-wider transition-all duration-200 ${
                  i === 0
                    ? "bg-[#C9A84C] text-black font-semibold"
                    : "border border-white/20 text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
                style={{ fontFamily: "Georgia, serif" }}
              >
                {f}
              </button>
            )
          )}
          <span className="ml-auto text-white/30 text-xs" style={{ fontFamily: "Georgia, serif" }}>
            {sarees.length} Designs
          </span>
        </div>
      </div>

      {/* ── Collection Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sarees.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "420px" }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundColor: "#1a0808",
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 ${
                      tagColors[item.tag] ?? "bg-[#C9A84C] text-black"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Wishlist button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C9A84C]/80">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Book Now on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <button className="w-full py-2.5 bg-[#C9A84C] text-black text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#E3C56E] transition-colors duration-200">
                    Book Appointment
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="pt-4 pb-2">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-white text-sm font-light leading-snug group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.name}
                  </h3>
                  <span className="text-[#C9A84C] text-sm font-medium whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-white/35 text-[11px] font-light" style={{ fontFamily: "Georgia, serif" }}>
                  {item.fabric} · {item.embroidery}
                </p>
                <div className="mt-2 w-0 group-hover:w-full h-px bg-[#C9A84C]/40 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Custom Order CTA ── */}
      <div className="bg-[#0a0505] border-t border-[#C9A84C]/20 py-16 px-6 text-center">
        <p
          className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Can&apos;t find your dream design?
        </p>
        <h2
          className="text-white text-3xl md:text-4xl font-light mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Create a{" "}
          <span
            className="italic text-[#C9A84C]"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.2em" }}
          >
            Custom Saree
          </span>
        </h2>
        <p
          className="text-white/50 text-sm font-light max-w-md mx-auto mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Work directly with our master designers to create your perfect bespoke
          bridal saree from scratch.
        </p>
        <Link
          href="#"
          className="inline-block px-10 py-3.5 bg-[#C9A84C] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E3C56E] transition-all duration-300"
        >
          Start Custom Design
        </Link>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-black border-t border-white/8 py-8 text-center">
        <p className="text-white/25 text-xs tracking-widest" style={{ fontFamily: "Georgia, serif" }}>
          © 2026 PS Fashion Designer · All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
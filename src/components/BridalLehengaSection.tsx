import Link from "next/link";

const LEHENGA_IMG =
  "https://www.ajmerafashion.com/uploaded-files/product-images/thumbs/Manish-Malhotra-Bridal-Lehenga-New-Collection-%E2%80%93-Luxurious-Bridal-Couture-by-Ajmera-Fashion-Limited-1-thumbs-600X825.jpg";

const pieces = [
  { name: "Crimson Bridal Lehenga", price: "₹1,85,000", tag: "Best Seller" },
  { name: "Zardozi Embroidered Set", price: "₹2,40,000", tag: "New Arrival" },
  { name: "Royal Velvet Lehenga", price: "₹3,10,000", tag: "Exclusive" },
];

export default function BridalLehengaSection() {
  return (
    <section className="w-full bg-[#0a0505]">
      {/* Section header */}
      <div className="text-center py-12 px-6">
        <p
          className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Heritage · Craftsmanship · Couture
        </p>
        <h2
          className="text-white text-3xl md:text-5xl font-light"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Bridal{" "}
          <span
            className="italic text-[#C9A84C]"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "3.2rem" }}
          >
            Lehengas
          </span>
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="w-16 h-px bg-[#C9A84C]/40"></span>
          <span className="w-2 h-2 rotate-45 bg-[#C9A84C]"></span>
          <span className="w-16 h-px bg-[#C9A84C]/40"></span>
        </div>
        <p
          className="text-white/50 text-sm mt-4 max-w-lg mx-auto font-light leading-relaxed"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Hand-crafted with centuries-old zardozi and gota patti embroidery on
          the finest Banarasi silks and georgettes.
        </p>
      </div>

      {/* Main split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
        {/* Left: large hero image */}
        <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url('${LEHENGA_IMG}')`,
              backgroundPosition: "center top",
              backgroundColor: "#200a0a",
            }}
          />
          {/* Gold border inset */}
          <div className="absolute inset-4 border border-[#C9A84C]/20 pointer-events-none" />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0505] to-transparent" />

          {/* Floating badge */}
          <div className="absolute top-6 left-6 bg-[#C9A84C] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
            2026 Bridal Edit
          </div>
        </div>

        {/* Right: info + pieces list */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#080303]">
          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Signature Collection
          </p>

          {/* Piece list */}
          <div className="space-y-6 mb-10">
            {pieces.map((p, i) => (
              <div
                key={i}
                className="group flex items-center justify-between border-b border-white/8 pb-5 cursor-pointer"
              >
                <div>
                  <span
                    className="text-white text-base font-light group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {p.name}
                  </span>
                  <span className="ml-3 text-[10px] text-[#C9A84C] tracking-widest uppercase border border-[#C9A84C]/50 px-2 py-0.5">
                    {p.tag}
                  </span>
                  <p className="text-white/40 text-xs mt-1 font-light">
                    Starting at {p.price}
                  </p>
                </div>
                <svg
                  className="h-4 w-4 text-white/30 group-hover:text-[#C9A84C] transition-colors duration-300 flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>

          <Link
            href="/bridal-lehengas"
            className="self-start px-8 py-3 bg-[#C9A84C] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E3C56E] transition-all duration-300"
          >
            Explore Bridal Lehengas
          </Link>
        </div>
      </div>
    </section>
  );
}

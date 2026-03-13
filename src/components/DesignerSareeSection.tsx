import Link from "next/link";

const SAREE_IMG =
  "https://assets0.mirraw.com/images/10985760/ACU8047_zoom.jpg?1670480332";

const sareeTypes = [
  {
    name: "Kanjivaram Silk Saree",
    desc: "Pure silk with traditional temple border",
    price: "₹85,000",
  },
  {
    name: "Banarasi Brocade",
    desc: "Woven with real zari gold thread",
    price: "₹65,000",
  },
  {
    name: "Chanderi Embroidered",
    desc: "Lightweight with hand-block prints",
    price: "₹38,000",
  },
  {
    name: "Georgette Designer Drape",
    desc: "Contemporary cuts with sequin work",
    price: "₹52,000",
  },
];

export default function DesignerSareeSection() {
  return (
    <section className="w-full bg-[#050808]">
      {/* Section header */}
      <div className="text-center py-12 px-6">
        <p
          className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Six Yards of Grace
        </p>
        <h2
          className="text-white text-3xl md:text-5xl font-light"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Designer{" "}
          <span
            className="italic text-[#C9A84C]"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "3.2rem",
            }}
          >
            Sarees
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
          From timeless Kanjivaram silks to contemporary georgette drapes — each
          saree tells a story of unmatched artisanship.
        </p>
      </div>

      {/* Flipped layout — image on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
        {/* Left: saree types grid */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-12 bg-[#030508] order-2 lg:order-1">
          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Curated Styles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {sareeTypes.map((s, i) => (
              <div
                key={i}
                className="group p-4 border border-white/8 hover:border-[#C9A84C]/40 cursor-pointer transition-all duration-300"
              >
                <div className="w-6 h-px bg-[#C9A84C] mb-3 group-hover:w-10 transition-all duration-300" />
                <h3
                  className="text-white text-sm font-light mb-1 group-hover:text-[#C9A84C] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.name}
                </h3>
                <p className="text-white/40 text-[11px] font-light mb-2">
                  {s.desc}
                </p>
                <p className="text-[#C9A84C] text-xs font-medium">{s.price}</p>
              </div>
            ))}
          </div>

          <Link
            href="/saree"
            className="self-start px-8 py-3 border border-[#C9A84C] text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
          >
            Browse All Sarees
          </Link>
        </div>

        {/* Right: image */}
        <div
          className="relative overflow-hidden order-1 lg:order-2"
          style={{ minHeight: "500px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url('${SAREE_IMG}')`,
              backgroundPosition: "center top",
              backgroundColor: "#080a10",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#030508]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050808] via-transparent to-transparent opacity-60" />

          {/* Gold corner accents */}
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#C9A84C]/50 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-[#C9A84C]/50 pointer-events-none" />

          {/* Floating label */}
          <div className="absolute bottom-10 right-6 text-right">
            <p
              className="text-white/70 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Handwoven
            </p>
            <p
              className="text-[#C9A84C] text-xl italic"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Pure Silk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

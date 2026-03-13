import Link from "next/link";

export default function LookbookBanner() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
        {/* Left — image collage */}
        <div className="relative overflow-hidden">
          {/* Main large image – bridal saree model */}
         <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://www.avikalp.com/cdn/shop/products/MWZ3561_wallpaper3.jpg?v=1746037675')",
    backgroundColor: "#120a0a",
  }}
/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/50" />

          {/* Small inset image bottom-right – lehenga close-up */}
          <div className="absolute bottom-6 right-6 w-32 h-40 overflow-hidden border-2 border-[#C9A84C]/60 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('data:image/jpeg;base64,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')",
                backgroundColor: "#1a0808",
              }}
            />
          </div>

          {/* Gold accent corner */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]" />
          <div className="absolute bottom-28 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]" />
        </div>

        {/* Right — text content */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-[#0a0a0a]">
          <p
            className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Spring / Summer 2026
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-light leading-snug mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The New{" "}
            <span
              className="italic text-[#C9A84C]"
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2.4rem" }}
            >
              Lookbook
            </span>{" "}
            <br />
            is Here
          </h2>
          <p
            className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs font-light"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Discover our most enchanting bridal and occasion wear — where
            centuries-old zardozi embroidery meets contemporary silhouettes.
            Each lehenga, saree and anarkali is hand-finished by our master
            artisans using the finest silks and organzas.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">
            {[
              { num: "120+", label: "Designs" },
              { num: "18", label: "Fabrics" },
              { num: "100%", label: "Bespoke" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-[#C9A84C] text-2xl font-light"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.num}
                </p>
                <p className="text-white/50 text-[10px] tracking-widest uppercase mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="self-start px-8 py-3 bg-[#C9A84C] text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E3C56E] transition-all duration-300"
          >
            Explore Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}

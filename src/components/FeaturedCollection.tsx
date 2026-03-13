const dresses = [
  {
    id: 1,
    name: "Bridal Red Lehenga",
    category: "Bridal Lehenga",
    price: "₹1,85,000",
    image:
      "https://i.pinimg.com/originals/6f/0d/0e/6f0d0e626aa95fe4ea54cde72bdb3af7.jpg",
  },
  {
    id: 2,
    name: "Royal Silk Saree",
    category: "Designer Saree",
    price: "₹48,000",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-Curated_This_Season-Banner-01.webp?v=1754918347&width=1920",
  },
  {
    id: 3,
    name: "Ivory Wedding Lehenga",
    category: "Wedding",
    price: "₹2,40,000",
    image:
      "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-art-silk-lehenga-in-rust-v1-lqy3066.jpg",
  },
  {
    id: 4,
    name: "Embroidered Anarkali",
    category: "Anarkali Gown",
    price: "₹75,000",
    image:
      "https://manishmalhotra.in/cdn/shop/files/MM-P-PR-GW-60372_C-XS-1.png?v=1762159511",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="w-full bg-[#080808] py-16 px-6 md:px-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Handcrafted with Heritage
        </p>
        <h2
          className="text-white text-3xl md:text-4xl font-light tracking-wide"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Featured Collection
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-[#C9A84C]/40"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]"></span>
          <span className="w-12 h-px bg-[#C9A84C]/40"></span>
        </div>
      </div>

      {/* 4-card grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dresses.map((dress) => (
          <div key={dress.id} className="group cursor-pointer">
            {/* Image container */}
            <div className="relative overflow-hidden" style={{ height: "380px" }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${dress.image}')`,
                  backgroundColor: "#1a1008",
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

              {/* Quick view on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <button className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/60 text-white text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-black transition-all duration-300">
                  View Details
                </button>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#C9A84C]/90 text-black text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  {dress.category}
                </span>
              </div>
            </div>

            {/* Card info */}
            <div className="pt-4 pb-2 border-b border-white/10">
              <h3
                className="text-white text-sm font-light tracking-wide mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {dress.name}
              </h3>
              <p className="text-[#C9A84C] text-sm font-medium">{dress.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <div className="text-center mt-10">
        <button className="px-10 py-3 border border-[#C9A84C]/60 text-[#C9A84C] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300">
          View All Designs
        </button>
      </div>
    </section>
  );
}

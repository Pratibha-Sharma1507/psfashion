const editorialImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/7e/d0/7d/7ed07dd0533c0e6e1ae94b82f9c0e233.jpg",
    label: "Bridal Lehenga",
    tall: true,
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/stylish-woman-white-casual-sweater-sunglasses-hat-red-pink-wall_343596-5426.jpg?semt=ais_rp_50_assets&w=740&q=80",
    label: "Silk Sarees",
    tall: false,
  },
  {
    id: 3,
    src: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Fashion-Wallpaper-HD-Download.jpg",
    label: "Wedding Lehengas",
    tall: false,
  },
  {
    id: 4,
    src: "https://t4.ftcdn.net/jpg/01/27/15/49/360_F_127154936_1zPSMtnW4Vtr4Whoe7xNCWwZ6Ay7mkBd.jpg",
    label: "Anarkali Gowns",
    tall: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=320&q=85&fit=crop&crop=top",
    label: "Designer Sarees",
    tall: false,
  },
];

export default function EditorialStrip() {
  return (
    <section className="w-full bg-[#050505] py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p
          className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Tradition Meets Couture
        </p>
        <h2
          className="text-white text-3xl md:text-4xl font-light"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Editorial Inspirations
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-[#C9A84C]/40"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]"></span>
          <span className="w-12 h-px bg-[#C9A84C]/40"></span>
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-start">
        {editorialImages.map((img) => (
          <div
            key={img.id}
            className="group relative overflow-hidden cursor-pointer"
            style={{ height: img.tall ? "380px" : "240px" }}
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundColor: "#111",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p
                className="text-white text-xs tracking-[0.15em] uppercase text-center"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {img.label}
              </p>
            </div>

            {/* Gold border on hover */}
            <div className="absolute inset-0 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

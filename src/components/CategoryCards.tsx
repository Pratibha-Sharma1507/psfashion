const categories = [
  {
    id: 1,
    title: "Latest Collection",
    // Glamorous gold-dress model – matches reference card 1
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=280&q=88&fit=crop&crop=top",
    fallbackBg: "#1a1008",
  },
  {
    id: 2,
    title: "Trending Dresses",
    // Elegant dark-on-dark fashion editorial – matches reference card 2
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=280&q=88&fit=crop&crop=top",
    fallbackBg: "#0d0a06",
  },
  {
    id: 3,
    title: "Custom Made Designs",
    // Designer sketching on paper – matches reference card 3
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=280&q=88&fit=crop&crop=center",
    fallbackBg: "#111208",
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative group cursor-pointer overflow-hidden"
            style={{ height: "200px" }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${cat.image}')`,
                backgroundColor: cat.fallbackBg,
              }}
            />

            {/* Bottom dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-all duration-500" />

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <span
                className="text-white text-sm font-light tracking-widest uppercase"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "0.15em" }}
              >
                {cat.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

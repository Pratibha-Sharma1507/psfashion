import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "540px" }}>
      {/* Hero background – glamorous sequin dress fashion model */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-photo/interior-dressing-room-mannequin-shelf-260nw-2545694759.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundColor: "#1a1008",
        }}
      />

      {/* Left-to-right dark gradient so model stays visible on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      {/* Top/bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      {/* Content – left side */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-16 lg:px-24 max-w-[560px]">

        {/* Headline */}
        <h1 className="mb-3 leading-tight">
          <span
            className="block text-white font-light tracking-wide"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Design Your Style
          </span>
          <span
            className="block italic font-medium"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              color: "#C9A84C",
              lineHeight: 1.15,
            }}
          >
            With Elegance
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 text-sm md:text-[15px] mb-8 tracking-wide font-light"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Exclusive designer dresses crafted just for you.
        </p>

        {/* CTA Buttons – match the reference exactly */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#"
            className="px-6 py-2.5 border border-[#C9A84C] text-white text-sm font-light tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.06em" }}
          >
            Shop Collection
          </Link>
          <Link
            href="#"
            className="px-6 py-2.5 border border-white/50 text-white text-sm font-light tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.06em" }}
          >
            Custom Design
          </Link>
        </div>
      </div>
    </section>
  );
}

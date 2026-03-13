const features = [
  {
    id: 1,
    label: "Free Shipping",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Quality Fabrics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Secure Payment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Bespoke Tailoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm2.122-8.485a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
  },
];

export default function FeaturesBar() {
  return (
    <section className="w-full bg-[#0d0d0d] border-t border-[#C9A84C]/20">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-0">
        {features.map((feature, index) => (
          <div key={feature.id} className="flex items-center">
            {/* Feature item */}
            <div className="flex items-center gap-2 px-6 py-1">
              <span className="text-[#C9A84C]">{feature.icon}</span>
              <span
                className="text-white/80 text-xs tracking-wider font-light"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "0.08em" }}
              >
                {feature.label}
              </span>
            </div>

            {/* Divider */}
            {index < features.length - 1 && (
              <span className="text-white/30 text-sm font-thin">|</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

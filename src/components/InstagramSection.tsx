import Link from "next/link";

export default function InstagramSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1380px] mx-auto px-8">
        {/* Section title */}
        <h2 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-center text-black mb-14">
          INSTAGRAM
        </h2>

        {/* Instagram grid - placeholder images */}
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href="#"
              className="block aspect-square bg-kokkiri-gray-dark hover:opacity-80 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

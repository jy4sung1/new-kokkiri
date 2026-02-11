import Image from "next/image";

const featureImages = [
  "/images/menu/ramen-feature-1.png",
  "/images/menu/ramen-feature-2.png",
  "/images/menu/ramen-feature-3.png",
  "/images/menu/ramen-feature-4.png",
];

export default function KoreanRamenBarPage() {
  return (
    <div className="py-16">
      {/* Section title */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-12 italic">
        KOREAN RAMEN BAR
      </h2>

      {/* Top gallery row - single banner image */}
      <div className="relative w-full h-[356px] mb-2">
        <Image
          src="/images/menu/ramen-gallery.png"
          alt="Korean Ramen Bar Gallery"
          fill
          className="object-cover"
        />
      </div>

      {/* Feature images - 2x2 grid */}
      <div className="grid grid-cols-2 gap-2 px-2">
        {featureImages.map((img, i) => (
          <div key={i} className="relative h-[500px] overflow-hidden">
            <Image
              src={img}
              alt={`Ramen feature ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

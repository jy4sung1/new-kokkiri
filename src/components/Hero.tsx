import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-banner.png"
        alt="Kokkiri Ricedog"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col justify-end pb-[120px] h-full">
          <h1 className="text-white font-extrabold text-[96px] leading-[1.2] tracking-[-5.76px]">
            KOKKIRI RICEDOG
          </h1>
          <p className="text-kokkiri-yellow font-extrabold text-[48px] leading-[1.2] tracking-[-0.96px] mt-2">
            THE BEST KOREAN STREET FOOD
          </p>
          <Link
            href="/order"
            className="inline-flex items-center justify-center mt-10 bg-kokkiri-yellow text-black font-bold text-2xl w-[340px] h-[70px] rounded-full hover:bg-yellow-400 transition-colors"
          >
            ORDER NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

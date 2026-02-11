import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[120px] max-w-[1200px] mx-auto px-8">
        {/* Page header */}
        <div className="text-center pt-16 pb-12">
          <h1 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-black">
            INSTGRAM
          </h1>
        </div>

        {/* Instagram grid - 3x3 */}
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-kokkiri-gray-dark"
            />
          ))}
        </div>

        {/* Read More button */}
        <div className="flex justify-center mt-12 pb-20">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-black text-white font-bold text-xl w-[340px] h-[60px] rounded-full hover:bg-zinc-800 transition-colors"
          >
            READ MORE
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

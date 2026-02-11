import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[120px] max-w-[1200px] mx-auto px-8">
        {/* Page header */}
        <div className="text-center pt-16 pb-12">
          <p className="font-display font-black text-[24px] text-kokkiri-yellow tracking-wide">
            OUR STORY
          </p>
          <h1 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-black italic">
            ABOUT US
          </h1>
        </div>

        {/* About content */}
        <div className="flex flex-col items-center gap-12 pb-20">
          {/* Logo */}
          <Image
            src="/images/logo-icon.png"
            alt="Kokkiri"
            width={200}
            height={193}
            className="object-contain"
          />

          <div className="max-w-[700px] text-center space-y-6">
            <p className="text-[18px] leading-[28px] text-black">
              Kokkiri Ricedog brings the authentic taste of Korean street food to
              your neighborhood. Our signature rice dogs are made with premium
              rice batter, creating a unique crispy texture that sets us apart.
            </p>
            <p className="text-[18px] leading-[28px] text-black">
              From our original rice dogs to Korean fried chicken and the Korean
              ramen bar experience, every item on our menu is crafted with care
              using traditional Korean recipes and fresh ingredients.
            </p>
            <p className="text-[18px] leading-[28px] text-black">
              Visit us today and discover why Kokkiri Ricedog is the best Korean
              street food experience.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

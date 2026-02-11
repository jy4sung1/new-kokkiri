import Image from "next/image";
import Link from "next/link";

const chickenItems = [
  {
    name: "SWEET & SPICY",
    description:
      "Korean Fried Chicken made with rice batter, Sweet & spicy sauce",
    image: "/images/menu/chicken-sweet-spicy.png",
  },
  {
    name: "SOY GARLIC",
    description:
      "Korean Fried Chicken made with rice batter, Soy garlic sauce",
    image: "/images/menu/chicken-soy-garlic.png",
  },
  {
    name: "SNOW CHEDDAR",
    description:
      "Korean Fried Chicken made with rice batter, Cheddar cheese powder",
    image: "/images/menu/chicken-snow-cheddar.png",
  },
  {
    name: "KICK'N HOT",
    description:
      "Korean Fried Chicken made with rice batter, Extra Spicy sauce",
    image: "/images/menu/chicken-kickn-hot.png",
  },
];

export default function ChickenPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* Section title */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-16 italic">
        KOREA FRIED CHICKEN
      </h2>

      {/* Chicken items - 2x2 grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-16">
        {chickenItems.map((item) => (
          <div key={item.name} className="flex items-start gap-6">
            {/* Product image */}
            <div className="w-[283px] h-[341px] relative flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product info */}
            <div className="pt-4">
              <h3 className="font-display font-black text-[24px] leading-[28px] text-kokkiri-yellow">
                {item.name}
              </h3>
              <p className="font-display font-bold text-[20px] leading-[24px] text-white mt-3 max-w-[250px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Now button */}
      <div className="flex justify-center mt-16">
        <Link
          href="/order"
          className="inline-flex items-center justify-center border-2 border-kokkiri-yellow text-kokkiri-yellow font-bold text-2xl w-[340px] h-[70px] rounded-full hover:bg-kokkiri-yellow hover:text-black transition-colors"
        >
          ORDER NOW
        </Link>
      </div>
    </div>
  );
}

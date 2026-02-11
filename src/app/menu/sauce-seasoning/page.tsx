import Image from "next/image";
import Link from "next/link";

const sauces = [
  { name: "BBQ", image: "/images/menu/sauce-bbq.png" },
  { name: "Burger Sauce", image: "/images/menu/sauce-burger.png" },
  { name: "Honey Mustard", image: "/images/menu/sauce-honey-mustard.png" },
  { name: "Mayo", image: "/images/menu/sauce-mayo.png" },
  { name: "Ketchup", image: "/images/menu/sauce-ketchup.png" },
  { name: "Garlic Mayo", image: "/images/menu/sauce-garlic-mayo.png" },
  { name: "Hot Sauce", image: "/images/menu/sauce-hot.png" },
  { name: "Teriyaki", image: "/images/menu/sauce-teriyaki.png" },
  { name: "Sweet Chili", image: "/images/menu/sauce-sweet-chili.png" },
];

const seasonings = [
  { name: "Cheddar Cheese", image: "/images/menu/seasoning-cheddar.png" },
  { name: "Honey Butter", image: "/images/menu/seasoning-honey-butter.png" },
  { name: "Garlic Butter", image: "/images/menu/seasoning-garlic-butter.png" },
];

function SauceItem({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h3 className="font-display font-black text-[20px] text-kokkiri-yellow mt-4 text-center">
        {name}
      </h3>
    </div>
  );
}

export default function SauceSeasoningPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* Sauce section */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-16 italic">
        SAUCE
      </h2>

      <div className="grid grid-cols-3 gap-12 justify-items-center">
        {sauces.map((item) => (
          <SauceItem key={item.name} {...item} />
        ))}
      </div>

      {/* Seasoning section */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mt-24 mb-16 italic">
        SESONGING
      </h2>

      <div className="grid grid-cols-3 gap-12 justify-items-center">
        {seasonings.map((item) => (
          <SauceItem key={item.name} {...item} />
        ))}
      </div>

      {/* More Menu button */}
      <div className="flex justify-center mt-16">
        <Link
          href="/order"
          className="inline-flex items-center justify-center bg-kokkiri-yellow text-black font-bold text-2xl w-[340px] h-[70px] rounded-full hover:bg-yellow-400 transition-colors"
        >
          MORE MENU
        </Link>
      </div>
    </div>
  );
}

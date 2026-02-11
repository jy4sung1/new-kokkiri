import MenuItem from "@/components/MenuItem";
import Link from "next/link";

const drinkItems = [
  {
    name: "YUZU LEMONADE",
    description: "Lemonade with yuzu",
    image: "/images/menu/drink-yuzu-lemonade.png",
  },
  {
    name: "PINK GRAPEFRUIT YUZU",
    description: "",
    image: "/images/menu/drink-pink-grapefruit.png",
  },
];

export default function DrinksPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* Section title */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-16 italic">
        DRINKS
      </h2>

      {/* Drink items - 2 columns */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        {drinkItems.map((item) => (
          <MenuItem key={item.name} {...item} />
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

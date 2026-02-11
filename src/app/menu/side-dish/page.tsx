import MenuItem from "@/components/MenuItem";
import Link from "next/link";

const sideDishItems = [
  {
    name: "CHEESE BALLS (3pcs)",
    description: "Crispy Mozzarella cheese-filled balls",
    image: "/images/menu/side-cheese-balls.png",
  },
  {
    name: "CHICKEN NUGGETS (8pcs)",
    description: "Crispy chicken nuggets",
    image: "/images/menu/side-chicken-nuggets.png",
  },
  {
    name: "FRIES",
    description: "Crispy potato chips",
    image: "/images/menu/side-fries.png",
  },
  {
    name: "K-FRIES",
    description: "Crispy fries with sauce topping",
    image: "/images/menu/side-k-fries.png",
  },
  {
    name: "POUTINE",
    description: "Fries with gravy and cheese",
    image: "/images/menu/side-poutine.png",
  },
  {
    name: "SWEET POTATO FRIES",
    description: "Crispy sweet potato fries",
    image: "/images/menu/side-sweet-potato-fries.png",
  },
  {
    name: "SWEET POTATO K-FRIES",
    description: "Sweet potato fries with sauce topping",
    image: "/images/menu/side-sweet-potato-k-fries.png",
  },
  {
    name: "WAFFLE FRIES",
    description: "Waffle-cut crispy fries",
    image: "/images/menu/side-waffle-fries.png",
  },
];

export default function SideDishPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* Section title */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-16 italic">
        SIDE DISH
      </h2>

      {/* Menu items grid - 2 columns */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        {sideDishItems.map((item) => (
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

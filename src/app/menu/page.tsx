import MenuItem from "@/components/MenuItem";
import Link from "next/link";

const riceDogs = [
  {
    name: "KOKKIRI ORIGINAL RICEDOG",
    description: "Rice batter, Beef sausage",
    image: "/images/menu/ricedog-original.png",
  },
  {
    name: "POTATO RICEDOG",
    description: "Rice batter, Potato coating, Beef sausage",
    image: "/images/menu/ricedog-potato.png",
  },
  {
    name: "SWEET POTATO RICEDOG",
    description: "Rice batter, Sweet potato coating, Beef sausage",
    image: "/images/menu/ricedog-sweet-potato.png",
  },
  {
    name: "FLAKE RICEDOG",
    description: "Rice batter, Corn flakes coating, Beef sausage",
    image: "/images/menu/ricedog-flake.png",
  },
  {
    name: "WHOLE MOZZARELLA RICEDOG",
    description: "Rice batter, Mozzarella cheese",
    image: "/images/menu/ricedog-mozzarella.png",
  },
  {
    name: "BEEF & MOZZARELLA RICEDOG",
    description: "Rice batter, Beef sausage, Mozzarella cheese",
    image: "/images/menu/ricedog-beef-mozzarella.png",
  },
  {
    name: "CHEDDAR CHEESE RICEDOG",
    description: "Rice batter, Beef sausage, Cheddar cheese",
    image: "/images/menu/ricedog-cheddar.png",
  },
  {
    name: "DOUBLE CHEESE RICEDOG",
    description: "Rice batter, Beef sausage, Mozzarella and cheddar cheese",
    image: "/images/menu/ricedog-double-cheese.png",
  },
  {
    name: "RAMEN CHIP RICEDOG",
    description: "Rice batter, Ramen chip coating, Beef sausage",
    image: "/images/menu/ricedog-ramen-chip.png",
  },
  {
    name: "TURKEY RICEDOG",
    description: "Rice batter, Turkey sausage",
    image: "/images/menu/ricedog-turkey.png",
  },
  {
    name: "TURKEY & MOZZARELLA RICEDOG",
    description: "Rice batter, Turkey sausage, Mozzarella cheese",
    image: "/images/menu/ricedog-turkey-mozzarella.png",
  },
  {
    name: "CHICKEN NUGGET RICEDOG",
    description: "Rice batter, Beef sausage, Chicken nugget coating",
    image: "/images/menu/ricedog-chicken-nugget.png",
  },
  {
    name: "CHOCOLATE RICEDOG",
    description: "Rice batter, Chocolate filling",
    image: "/images/menu/ricedog-chocolate.png",
  },
];

export default function RiceDogsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      {/* Section title */}
      <h2 className="font-display font-black text-[64px] leading-[75px] text-kokkiri-yellow text-center mb-16 italic">
        RICE DOGS
      </h2>

      {/* Menu items grid - 2 columns */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        {riceDogs.map((item) => (
          <MenuItem key={item.name} {...item} />
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

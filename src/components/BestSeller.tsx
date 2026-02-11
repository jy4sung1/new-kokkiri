import Image from "next/image";
import Link from "next/link";

const bestSellerItems = [
  {
    name: "SWEET & SPICY CHICKEN",
    description:
      "Korean Fried Chicken made with rice batter, Sweet & spicy sauce",
    image: "/images/sweet-spicy-chicken.png",
  },
  {
    name: "SWEET POTATO RICEDOG",
    description: "Rice batter, Sweet potato coating, Beef sausage",
    image: "/images/sweet-potato-ricedog.png",
  },
  {
    name: "WHOLE MOZZARELLA RICEDOG",
    description: "Rice batter, Mozzarella cheese",
    image: "/images/mozzarella-ricedog.png",
  },
  {
    name: "SNOW CHEDDAR CHICKEN",
    description:
      "Korean Fried Chicken made with rice batter, Cheddar cheese powder",
    image: "/images/snow-cheddar-chicken.png",
  },
];

export default function BestSeller() {
  return (
    <section>
      {/* Title above gray section */}
      <div className="pt-16 pb-8">
        <h2 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-center text-black">
          BEST SELLER
        </h2>
      </div>

      {/* Gray section with cards */}
      <div className="bg-kokkiri-gray pb-20">
        <div className="max-w-[1380px] mx-auto px-8">
          {/* Product cards */}
          <div className="grid grid-cols-4 gap-8 pt-12">
            {bestSellerItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[23px] overflow-hidden flex flex-col"
              >
                {/* Product image */}
                <div className="w-full h-[320px] relative overflow-hidden rounded-t-[23px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product info */}
                <div className="px-4 pt-4 pb-5">
                  <h3 className="font-extrabold text-[24px] leading-[29px] tracking-[-1.2px] text-black">
                    {item.name}
                  </h3>
                  <p className="font-thin text-[15px] leading-[18px] tracking-[-0.3px] text-black mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Menu button */}
          <div className="flex justify-center mt-14">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-kokkiri-yellow text-black font-bold text-2xl w-[340px] h-[70px] rounded-full hover:bg-yellow-400 transition-colors"
            >
              MORE MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

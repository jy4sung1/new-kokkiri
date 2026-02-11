"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuCategories = [
  { label: "RICE DOGS", href: "/menu" },
  { label: "KOREAN FRIED CHICKEN", href: "/menu/chicken" },
  { label: "SIDE DISH", href: "/menu/side-dish" },
  { label: "DRINKS", href: "/menu/drinks" },
  { label: "SAUCE & SEASONING", href: "/menu/sauce-seasoning" },
  { label: "KOREAN RAMEN BAR", href: "/menu/korean-ramen-bar" },
];

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black">
      {/* Menu hero section */}
      <div className="pt-[120px] pb-8 text-center">
        <h1 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-white italic mt-8">
          KOKKIRI MENU
        </h1>
        <p className="font-display font-semibold text-[28px] text-white mt-2">
          Korean Street Eats
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex justify-center gap-6 px-8 pb-8">
        {menuCategories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <Link
              key={cat.href}
              href={cat.href}
              className={`text-[18px] font-bold px-4 py-2 rounded-[5px] transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-kokkiri-yellow text-black"
                  : "text-white hover:text-kokkiri-yellow"
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      {/* Separator line */}
      <div className="w-full h-px bg-white/20" />

      {/* Page content */}
      {children}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { label: "ABOUT", href: "/about" },
  { label: "LOCATION", href: "/location" },
  { label: "MENU", href: "/menu" },
  { label: "INSTGRAM", href: "/instagram" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/menu") return pathname.startsWith("/menu");
    return pathname === href;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top bar - Navy */}
      <div className="h-[60px] bg-kokkiri-navy flex items-center justify-between px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-header.png"
            alt="Kokkiri Ricedog"
            width={186}
            height={80}
            className="object-contain h-[55px] w-auto"
            priority
          />
        </Link>

        {/* Social icons */}
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/icon-instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/icon-facebook.svg"
              alt="Facebook"
              width={13}
              height={24}
            />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/icon-youtube.svg"
              alt="YouTube"
              width={30}
              height={24}
            />
          </Link>
        </div>
      </div>

      {/* Bottom bar - Yellow with navigation */}
      <div className="h-[60px] bg-kokkiri-yellow flex items-center justify-center px-8">
        <nav className="flex items-center gap-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-black font-bold text-[18px] tracking-normal hover:opacity-70 transition-opacity ${
                isActive(item.href) ? "underline underline-offset-4" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-white text-black font-bold text-[18px] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors ml-2"
          >
            ORDER NOW
          </Link>
        </nav>
      </div>
    </header>
  );
}

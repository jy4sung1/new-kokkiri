import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-kokkiri-yellow">
      <div className="max-w-[1440px] mx-auto px-16 py-20">
        <div className="flex items-start">
          {/* Logo & Social */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo-icon.png"
              alt="Kokkiri"
              width={148}
              height={143}
              className="object-contain"
            />
            <div className="flex items-center gap-6 mt-8">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/images/icon-instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="[filter:brightness(0)]"
                />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/images/icon-facebook.svg"
                  alt="Facebook"
                  width={13}
                  height={24}
                  className="[filter:brightness(0)]"
                />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/images/icon-youtube.svg"
                  alt="YouTube"
                  width={30}
                  height={24}
                  className="[filter:brightness(0)]"
                />
              </Link>
            </div>
          </div>

          {/* Footer link columns */}
          <div className="flex gap-28 ml-auto mt-4">
            {/* About column */}
            <div>
              <h3 className="font-bold text-[22px] text-black mb-5">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Our /brand
                  </Link>
                </li>
              </ul>
            </div>

            {/* Learn column */}
            <div>
              <h3 className="font-bold text-[22px] text-black mb-5">Learn</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/menu"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instagram"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            {/* More column */}
            <div>
              <h3 className="font-bold text-[22px] text-black mb-5">More</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/menu"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="text-black text-[18px] hover:opacity-70 transition-opacity"
                  >
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

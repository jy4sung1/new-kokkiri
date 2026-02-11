import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const stores = [
  {
    name: "Store 1",
    hours: [
      { day: "MON", open: "12:00PM", close: "9:30PM" },
      { day: "TUE", open: "12:00PM", close: "9:30PM" },
      { day: "WED", open: "12:00PM", close: "9:30PM" },
      { day: "THUR", open: "12:00PM", close: "9:30PM" },
      { day: "FRI", open: "12:00PM", close: "10:00PM" },
      { day: "SAT", open: "12:00PM", close: "10:00PM" },
      { day: "SUN", open: "12:00PM", close: "9:30PM" },
    ],
  },
  {
    name: "Store 2",
    hours: [
      { day: "MON", open: "11:30PM", close: "9:30PM" },
      { day: "TUE", open: "11:30PM", close: "9:30PM" },
      { day: "WED", open: "11:30PM", close: "9:30PM" },
      { day: "THUR", open: "11:30PM", close: "9:30PM" },
      { day: "FRI", open: "11:30PM", close: "10:00PM" },
      { day: "SAT", open: "12:30PM", close: "10:00PM" },
      { day: "SUN", open: "12:30PM", close: "9:30PM" },
    ],
  },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[120px] max-w-[1200px] mx-auto px-8">
        {/* Page header */}
        <div className="text-center pt-16 pb-12">
          <p className="font-display font-black text-[24px] text-kokkiri-yellow tracking-wide">
            VISIT US
          </p>
          <h1 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-black italic">
            STORE LOCATIONS
          </h1>
        </div>

        {/* Store cards */}
        <div className="space-y-20 pb-20">
          {stores.map((store, idx) => (
            <div key={idx}>
              <div className="flex gap-12">
                {/* Map placeholder */}
                <div className="w-[538px] h-[527px] bg-kokkiri-gray-dark flex-shrink-0" />

                {/* Store info */}
                <div className="flex-1 pt-4">
                  {/* Yellow bars (store name/address placeholders) */}
                  <div className="h-[42px] bg-kokkiri-yellow rounded-sm mb-2 max-w-[500px]" />
                  <div className="h-[42px] bg-kokkiri-yellow rounded-sm mb-8 max-w-[300px]" />

                  {/* Business hours */}
                  <h3 className="font-bold text-[16px] text-black mb-4">
                    BUSINESS HOUR
                  </h3>

                  <div className="space-y-2">
                    {store.hours.map((h) => (
                      <div key={h.day} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-black flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-bold text-[14px] text-black w-[50px]">
                          {h.day}
                        </span>
                        <span className="text-[14px] text-black">
                          {h.open} &nbsp;- &nbsp;{h.close}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Online button */}
              <div className="flex justify-center mt-10">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center bg-black text-white font-bold text-xl w-[340px] h-[60px] rounded-full hover:bg-zinc-800 transition-colors"
                >
                  ORDER ONLINE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

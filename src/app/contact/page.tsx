import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="pt-[120px] max-w-[1200px] mx-auto px-8">
        {/* Page header */}
        <div className="text-center pt-16 pb-12">
          <h1 className="font-display font-black text-[84px] leading-[98px] tracking-[-4.2px] text-kokkiri-yellow italic">
            CONTACT
          </h1>
        </div>

        {/* Contact form */}
        <div className="max-w-[510px] mx-auto pb-20">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block">
                <span className="font-extrabold text-[24px] text-white">
                  Name{" "}
                </span>
                <span className="font-thin text-[15px] text-white">
                  (required)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="font-display font-bold text-[20px] text-white block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-[33px] bg-transparent border-b border-white/50 text-white focus:border-kokkiri-yellow focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display font-bold text-[20px] text-white block mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-[33px] bg-transparent border-b border-white/50 text-white focus:border-kokkiri-yellow focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block">
                <span className="font-extrabold text-[24px] text-white">
                  Email{" "}
                </span>
                <span className="font-thin text-[15px] text-white">
                  (required)
                </span>
              </label>
              <input
                type="email"
                required
                className="w-full h-[33px] bg-transparent border-b border-white/50 text-white mt-2 focus:border-kokkiri-yellow focus:outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block">
                <span className="font-extrabold text-[24px] text-white">
                  Phone
                </span>
              </label>
              <input
                type="tel"
                className="w-full h-[33px] bg-transparent border-b border-white/50 text-white mt-2 focus:border-kokkiri-yellow focus:outline-none transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block">
                <span className="font-extrabold text-[24px] text-white">
                  Subject{" "}
                </span>
                <span className="font-thin text-[15px] text-white">
                  (required)
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full h-[33px] bg-transparent border-b border-white/50 text-white mt-2 focus:border-kokkiri-yellow focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block">
                <span className="font-extrabold text-[24px] text-white">
                  Message{" "}
                </span>
                <span className="font-thin text-[15px] text-white">
                  (required)
                </span>
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border border-white/50 text-white mt-2 p-2 focus:border-kokkiri-yellow focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-kokkiri-yellow text-black font-bold text-xl w-full h-[50px] rounded-full hover:bg-yellow-400 transition-colors"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

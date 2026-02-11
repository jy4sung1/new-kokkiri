import Header from "@/components/Header";
import MenuLayout from "@/components/MenuLayout";
import Footer from "@/components/Footer";

export default function MenuPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <MenuLayout>{children}</MenuLayout>
      <Footer />
    </>
  );
}

import Header from "@/components/Structure/Header";
import Footer from "@/components/Structure/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

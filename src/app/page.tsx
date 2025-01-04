import Categories from "@/components/global/Categories";
import Experience from "@/components/global/experience";
import Footer from "@/components/global/footer";
import Hero from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import NewStock from "@/components/global/new-stock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <NewStock />
      <div className="flex flex-col gap-24">
        <Experience />
        <Categories />
        <Footer />
      </div>
    </main>
  );
}

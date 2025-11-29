import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveVR from "@/components/InteractiveVR";
import OurCreations from "@/components/OurCreations";

export default function Home() {
  return (
    <main className="">
      <section className="h-[650px] bg-[url('/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/desktop/image-hero.jpg')]">
        <Header />
        <Hero />
      </section>
      <InteractiveVR />
      <OurCreations />
    </main>
  );
}

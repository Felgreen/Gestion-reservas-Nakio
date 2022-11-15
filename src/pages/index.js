import Navbar from "components/ui/Navbar";
import Hero from "components/ui/Hero";





export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <Navbar />
      <section id="top">
        <Hero />
       
      </section>
      {/* quiero poner un icono aca */}
    </div>
  );
}

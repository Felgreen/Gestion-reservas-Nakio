import Navbar from "components/ui/Navbar";
import Hero from "components/ui/Hero";





export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <Navbar />
      <section id="top">
        <Hero />
        <div className=" flex  flex-1 p-4 justify-end"><a href="#top"><button class=" bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-full">
          Return</button></a></div>
      </section>
      {/* Boton horrible basico quiero poner un icono aca pero react-icons no funciona con next.js */}
     
    </div>
  );
}

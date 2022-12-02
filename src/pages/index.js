import Navbar from "components/ui/Navbar";
import Hero from "components/ui/Hero";
import Image from 'next/image'; 
import arrow from './../public/assets/arrow.svg'; 



export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <Navbar />
      
      <section id="top">
        <Hero />
      
        <div className="flex flex-1 p-6 justify-end"><a href="#top"><button class=" bg-[#d4b48d]  hover:bg-orange-300 text-black font-bold py-3 px-4 rounded-full">
          <Image 
          src={arrow}
          alt='arrow'
          className=""></Image></button></a></div>
      </section>
      {/* Boton horrible basico quiero poner un icono aca pero react-icons no funciona con next.js */}
     
    </div>
  );
}

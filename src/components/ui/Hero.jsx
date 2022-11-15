import { useState } from "react";
import Services from "components/ui/Services";

const Hero = () => {
  const [option, setOption] = useState(null)

  const handleOptions = (e) => {
    setOption(e)
  }

  return (
    <>
    <section className="w-full bg-[#3B3C40]" id="top">
      <div className="mr-auto mt-3 px-6 flex flex-col justify-center h-full">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-6xl font-bold text-[#F36E21]">
            Arreglo autos y motos
          </h1>
          <p className="text-2xl sm:text-4xl font-bold text-white max-w-[700px]">
            {" "}
            Tambien surfeo.
          </p>
          <div className="border-transparent  rounded flex flex-row flex-wrap md:justify-evenly items-center">
           <a href="#bottom">
            <div className="w-32 md:w-72  rounded overflow-hidden shadow group shadow-slate-900 p-2 md:p-4 m-4 hover:rounded-[50px] hover:shadow-slate-900  hover:scale-105  hover:bg-orange-400 hover:text-black ease-in duration-300 max-w-[300px] h-[210px] flex flex-col justify-between" name="basic" onClick={() =>{handleOptions('basic');}}>
                {/* <Image src={Background} alt="card" /> */}
                <div className="px-2 py-2 pb-5">
                  <div className="font-bold text-sm md:text-xl mb-2 mt-3 w-40 md:w-60 ">
                     <h2 className= "text-lg md:text-2xl lg:text-4xl">Basic</h2>
                  </div>
                </div>
                <div className="px-2 pt-1 pb-1">
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-orange-500 group-hover:text-black mr-2 mb-2">
                    Filters replacements
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-orange-500 group-hover:text-black mr-2 mb-2">
                    Visual inspection
                  </span>
                </div>
              </div>
           </a>
           <a href="#bottom">
            <div className=" w-32 md:w-72  rounded overflow-hidden shadow shadow-slate-900 p-2 md:p-4 m-4 hover:rounded-[50px] hover:shadow-slate-900  hover:scale-105  hover:bg-orange-400 group hover:text-black ease-in duration-300 max-w-[300px] h-[210px] flex flex-col justify-between" name="extend" onClick={() => handleOptions('extend')}>
                {/* <Image src={Background} alt="card" /> */}
                <div className="px-2 py-2">
                  <div className="font-bold text-xl mb-2">
                    <h2 className="text-lg md:text-2xl lg:text-4xl" >Extend car life</h2>
                  </div>
                </div>
                <div className="px-2 pb-1">
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Basic +
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Deeper inspection
                  </span>
                </div>
              </div>
           </a>
            <a href="#bottom">
              <div className=" w-32 md:w-72  rounded overflow-hidden shadow shadow-slate-900 p-2 md:p-4 m-4 hover:rounded-[50px] hover:shadow-slate-900  hover:scale-105  hover:bg-orange-400 group hover:text-black ease-in duration-300 max-w-[300px] h-[210px] flex flex-col justify-between"  name="presell" onClick={() => handleOptions('presell')}>
                {/* <Image src={Background} alt="card" /> */}
                <div className="px-2 py-2">
                  <div className="font-bold text-xl mb-2">
                    <h2 className="text-lg md:text-2xl lg:text-4xl" >Pre sell</h2>
                  </div>
                </div>
                <div className="px-2 pb-1">
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Buyers portfolio
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Deep wash
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Roadside assitance
                  </span>
                </div>
              </div>
            </a>
           <a href="#bottom">
            <div className="w-32 md:w-72  rounded overflow-hidden shadow shadow-slate-900  p-2 md:p-4 m-4 hover:rounded-[50px] group hover:shadow-slate-900  hover:scale-105  hover:bg-orange-400 hover:text-black ease-in duration-300 max-w-[300px] h-[210px] flex flex-col justify-between" name="4wd" onClick={() => handleOptions('4wd')}>
                {/* <Image src={Background} alt="card" /> */}
                <div className="px-2 py-2">
                  <div className="font-bold text-xl">
                    <h2 className="text-lg md:text-2xl lg:text-4xl" >4wd upgrade</h2>
                  </div>
                </div>
                <div className="px-2 pb-1">
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1  text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Lift kits
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Solar panels
                  </span>
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    Water storage
                  </span>
                </div>
              </div>
           </a>
           <a href="#bottom">
            <div className=" w-32 md:w-72  rounded overflow-hidden shadow shadow-slate-900 p-2 md:p-4 m-4 hover:rounded-[50px] group hover:shadow-slate-900  hover:scale-105  hover:bg-orange-400 hover:text-black ease-in duration-300 max-w-[300px] h-[210px] flex flex-col justify-between" name="noise" onClick={() => handleOptions('noise')}>
                {/* <Image src={Background} alt="card" /> */}
                <div className="px-2 py-2">
                  <div className="font-bold text-xl mb-2">
                    <h2 className="text-lg md:text-2xl lg:text-4xl">What´s that noise?</h2>
                  </div>
                </div>
                <div className="px-2 pb-1">
                  <span className="inline-block sm:text-xs bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold group-hover:text-black text-orange-500 mr-2 mb-2">
                    SOS fix
                  </span>
                </div>
              </div>
           </a>
            
          </div>
        </div>
      </div>
    </section>
    {
      option ? <Services option={option} /> : <Services option={'ejemplo1'}/>
    }
    </>
  );
};

export default Hero;

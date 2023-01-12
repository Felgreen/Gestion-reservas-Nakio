import React from "react";


const Services = ({option}) => {
    console.log(option)

    switch(option) {
        case 'basic':
            return (
                <section className="mb-4 bg-[#187ea973] sm:max-w-[100px]" id="bottom">
                     <a href="#top"><i class="fa fa-arrow-circle-up fixed text-7xl z-50 right-5 bottom-5 cursor-pointer text-white"></i></a>
                     <div className="flex flex-col justify-center w-full px-10 py-4 items-center space-y-3">
                        <div className="inline-flex justify-center items-center w-full">
                            <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <h1 className="text-4xl sm:text-6xl drop-shadow-lg shadow-black">Basic service</h1>
                            <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className="flex flex-col max-w-[700px]">
                            <p className="text-xl sm:text-2xl max-w-[700px] drop-shadow-xl">
                            This service includes all the primary care your vehicle needs to keep you on the move and avoid expensive unwanted surprises. 
                            </p>
                            <br></br>
                            <ul className="list-disc">
                                <li>Oil / oil filter change</li>
                                <li>Replace Air Filter</li>
                                <li>Replace Fuel Filter</li>
                                <li>Visual Inspection of breaks, steering components, suspension and liquid levels.</li>
                            </ul>
                        </div>
                        <br></br>
                        <div className="animate-bounce">
                            <a href="https://calendly.com/nacho-coppa/basic-service" className="pointer-events-auto rounded-md bg-indigo-600 py-4 px-3 text-[1.5rem] font-semibold leading-5 text-white hover:bg-indigo-500">Book now!</a>
                        </div>
                    </div>
                </section>
               );
        case 'extend':
            return (
                <section className="mb-4 bg-[#187ea973]" id="bottom">
                    <div className="flex flex-col justify-center w-full px-10 py-4 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className= "text-4xl sm:text-6xl">Extend my car life service:</h1>
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex flex-col max-w-[700px] ">
                        <p className="text-xl sm:text-2xl max-w-[700px]">
                            Want to maximize the life of your trustworthy motor vehicle? We can help. This service includes all of the Basic Service package  and adds on the following maintenance services: 
                        </p>
                        <br></br>
                        <ul className="list-disc">
                            <li>Basic Service Package</li>
                            <li>Fuel Injector Cleaning Service</li>
                            <li>Oil Flush</li>
                            <li>Tire pressure</li>
                            <li>ACC check</li>
                            <li>Belt check</li>
                        </ul>
                    </div>
                    <br></br>
                    <div className=" animate-bounce">
                        <a href="https://calendly.com/nacho-coppa/extend-my-life-car" className="pointer-events-auto rounded-md bg-indigo-600 py-4 px-3 text-[1.5rem] leading-5 text-white hover:bg-indigo-500">Book now!</a>
                    </div>
                </div>
                </section>
            );
        case 'presell':
            return (
                <section className="mb-4 bg-[#187ea973]" id="bottom">
                    <div className="flex flex-col justify-center w-full px-10 py-4 items-center space-y-3">
                    <div className="inline-flex justify-center align-center items-center w-full">
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-4xl sm:text-6xl">Pre sell service</h1>
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex flex-col max-w-[700px] ">
                        <p className="text-xl sm:text-2xl ">
                            Avoid getting scammed and get a trustworthy opinion on the suspension, steering, leaks, tires, transmission and basic state of a vehicle. 
                        </p>
                        <br></br>
                        <ul className="list-disc">
                            <li>Engine bay wash</li>
                            <li>Dent removal</li>
                            <li>List the sale to my network of contacts.</li>
                        </ul>
                        <br></br>
                        <p className="text-xlsm:text-2xl  max-w-[700px]">
                            Deep inspection available!
                        </p>
                        <br></br>
                        <p>
                            To continue reducing the risk of buying an overpriced , problem generating day ruining motor vehicle use this service to check the oil, gearbox and reduction gear.
                        </p>
                    </div>
                    <br></br>
                    <div className=" animate-bounce">
                        <a href="https://calendly.com/nacho-coppa/pre-sell-service" className="pointer-events-auto rounded-md bg-indigo-600 py-4 px-3 text-[1.5rem] leading-5 text-white hover:bg-indigo-500">Book now!</a>
                    </div>
                </div>
                </section>
                
            );
        case '4wd':
            return (
                <section className="mb-4 bg-[#187ea973]" id="bottom">
                    <div className="flex flex-col justify-center w-full px-10 py-4 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-4xl sm:text-6xl ">4wd upgrade</h1>
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex flex-col max-w-[700px] ">
                        <p className= "text-xl sm:text-2xl max-w-[700px]">
                            Lets get that car ready for any terrain. Ask for a quote on component upgrade and installation. 
                        </p>
                        <br></br>
                        <ul className="list-disc">
                            <li>Awnings</li>
                            <li>Solar Panels</li>
                            <li>External battery</li>
                            <li>Water storage</li>
                            <li>Lift kits</li>
                            <li>Suspensino for heavy duty work</li>
                            <li>Off road tires and more!</li>
                        </ul>
                    </div>
                    <br></br>
                    <div className=" animate-bounce">
                        <a href="https://calendly.com/nacho-coppa/4wd-upgrade" className="pointer-events-auto rounded-md bg-indigo-600 py-4 px-3 text-[1.5rem] leading-5 text-white hover:bg-indigo-500">Book now!</a>
                    </div>
                </div>
                </section>
                
            );
        case 'noise':
            return (
                <section className="mb-4 bg-[#187ea973]" id="bottom">
                    <div className="flex flex-col justify-center w-full px-10 py-4 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-4xl sm:text-6xl">Whats that noise?</h1>
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex ">
                        <p className="text-xl sm:text-2xl max-w-[700px]">
                            “Is it supposed to make this noise?” If you don't know what´s going on with you car and want to get it inspected? Reserve an inspection!"
                        </p>
                    </div>
                    <br></br>
                    <div className=" animate-bounce">
                        <a href="https://calendly.com/nacho-coppa/whats-that-noise" className="pointer-events-auto rounded-md bg-indigo-600 py-4 px-3 text-[1.5rem] font-semibold leading-5 text-white hover:bg-indigo-500">Book now!</a>
                    </div>
                </div>
                </section>
                
            );
        default: return (
            <section className="mb-4 bg-[#187ea973] services" id="bottom">
                <div className="flex flex-col justify-center w-full items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-4xl sm:text-6xl ">Basic service</h1>
                        <hr className="my-8 sm:w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex flex-col max-w-[700px] ">
                        <p className="text-xl sm:text-2xl max-w-[700px]">
                        This service includes all the primary care your vehicle needs to keep you on the move and avoid expensive unwanted surprises. 
                        </p>
                        <br></br>
                        <ul className="list-disc">
                            <li>Oil / oil filter change</li>
                            <li>Replace Air Filter</li>
                            <li>Replace Fuel Filter</li>
                            <li>Visual Inspection of breaks, steering components, suspension and liquid levels.</li>
                        </ul>
                    </div>
                    <br></br>
                    <div className=" animate-pulse ">
                        <a href="https://calendly.com/nacho-coppa/basic-service" className="pointer-events-auto rounded-md bg-sky-600 py-4 px-3 text-[1.5rem] font-semibold leading-5 text-white hover:bg-sky-500">Book now!</a>
                    </div>
                </div>
            </section>
        );
    };
  
};

export default Services;



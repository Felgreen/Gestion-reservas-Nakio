import React from "react";

const Services = ({option}) => {
    console.log(option)

    switch(option) {
        case 'ejemplo1':
            return (
                <div className="flex flex-col justify-center w-full p-10 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-2xl sm:text-6xl font-bold text-[#F36E21]">Basic service</h1>
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex">
                        <p className="text-2xl sm:text-2xl font-bold text-white max-w-[700px]">
                            Replace of: oil, oil filter, fuel filter, air filter <br></br>
                            Visual inspection of: breaks, steering components, suspension, liquid levels
                        </p>
                    </div>
                    <div>
                        <button className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Reservar turno</button>
                    </div>
                </div>
            )
        break;
        case 'ejemplo2':
            return (
                <div className="flex flex-col justify-center w-full p-10 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-2xl sm:text-6xl font-bold text-[#F36E21]">Extend my car life service:</h1>
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex">
                        <p className="text-2xl sm:text-2xl font-bold text-white max-w-[700px]">
                            Basic service + injector cleaner, oil flush, tire pressure, acc belt.
                        </p>
                    </div>
                    <div>
                        <button className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Reservar turno</button>
                    </div>
                </div>
            )
        break;
        case 'ejemplo3':
            return (
                <div className="flex flex-col justify-center w-full p-10 items-center space-y-3">
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h1 className="text-2xl sm:text-6xl font-bold text-[#F36E21]">Titulo ejemplo 3</h1>
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="flex">
                        <p className="text-2xl sm:text-4xl font-bold text-white max-w-[700px]">
                            Subtitulo.
                        </p>
                    </div>
                    <div>
                        <button className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Reservar turno</button>
                    </div>
                </div>
            )
        break
        default: null;
    }
  
};

export default Services;



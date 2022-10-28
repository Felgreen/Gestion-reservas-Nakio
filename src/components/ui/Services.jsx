import React from 'react'

const Services = () => {
  return (
    <div className='flex pt-32 flex-col justify-center w-full p-10 items-center'>
        
        <div className="inline-flex justify-center items-center w-full">
            <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">Reserve now</span>
            <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
           <div className='flex'>
            <div className="inline-flex space-x-8">
                    <button className="bg-gray-300  text-white font-bold py-2 px-4 ">
                        opcion1
                    </button>
                    <button className="bg-gray-300 text-white font-bold py-2 px-4 ">
                        opcion2
                    </button>
                    <button className="bg-gray-300  text-white font-bold py-2 px-4 ">
                        opcion4
                    </button>
                </div>
           </div>
           {/* este div seria para mostrar la info con los botones que tenias antes. **/}
           <div>

           </div>
       
                    
    </div>
  )
}

export default Services
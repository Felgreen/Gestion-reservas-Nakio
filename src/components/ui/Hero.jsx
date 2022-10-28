import Image from 'next/image';
import React from 'react';

import Background from '../../public/assets/Background.png'; 


const Hero = () => {
  return (
    <section className='w-full h-screen bg-[#3B3C40] '>
      
      <div className='max-w-[1000px] mr-auto px-8 flex flex-col justify-center h-full'>
        <div className='absolute inset-x-5 top-40 space-y-3'>
          <p className='text-4xl text-[#F36E21]'>Hola Soy Nacho</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#F36E21]'>Arreglo autos y motos</h1>
          <p className='text-4xl sm:text-7xl font-bold text-white max-w-[700px]'> Tambien surfeo.</p>
          <div className='border-black border-2 rounded flex flex-row justify-center'>
            <div className='max-w-sm rounded  overflow-hidden shadow-lg p-10 hover:scale-105 ease-in duration-300'>
                <Image 
                    src={Background}
                    alt="card"
              
                  />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Ejemplo servicios 1</div>
                  <p className='text-white text-base'>
                    Lorem ipsum dolor sit amet
                  </p>

                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>SOS fix</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>4 x 4 SOS</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>Roadside assitance</span>
                </div>
              </div>

              <div className='max-w-sm rounded  overflow-hidden shadow-lg p-10 hover:scale-105 ease-in duration-300'>
                <Image 
                    src={Background}
                    alt="card"
              
                  />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Ejemplo servicios 2</div>
                  <p className='text-white text-base'>
                    Lorem ipsum dolor sit amet
                  </p>

                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>SOS fix</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>4 x 4 SOS</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>Roadside assitance</span>
                </div>
              </div>

              <div className='max-w-sm rounded  overflow-hidden shadow-lg p-10 hover:scale-105 ease-in duration-300'>
                <Image 
                    src={Background}
                    alt="card"
              
                  />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>Ejemplo servicios 3</div>
                  <p className='text-white text-base'>
                    Lorem ipsum dolor sit amet
                  </p>

                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>SOS fix</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>4 x 4 SOS</span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2'>Roadside assitance</span>
                </div>
              </div>

              
            </div>

            
            
        </div>
      </div>
    
      
    </section>
  )
}

export default Hero
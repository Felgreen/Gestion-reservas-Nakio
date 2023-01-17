import Navbar from 'components/ui/Navbar'
import Hero from 'components/ui/Hero'
import Image from 'next/image'
import arrow from './../public/assets/arrow.svg'
import mechanic from '../public/assets/mechanic.webp'
import beach from '../public/assets/beach.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

export default function Home() {
  const [width, setWidth] = useState(false)

  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth < 500) setWidth(true)
  })
  return (
    // <div className="flex flex-col scroll-smooth">
    //   <Navbar />

    <section id="top">
      {/* <Hero /> */}

      <div className="">
        <section id="home" className="">
          <nav className="flex justify-between items-center py-6 bg-[#5a98c7] shadow-xl rounded-b-md">
            <div className="container px-4 mx-auto max-w-7xl flex">
              <a className="uppercase font-extrabold py-2 rounded-full text-[#00182Bff] text-xl" href="#">
                Nacho's <span className="font-light">mechanic house</span>
              </a>
              <ul className="hidden lg:flex ml-auto mr-32 items-center w-auto space-x-12">
                <li>
                  <a className="text-md hover:text-[#005C76ff] font-medium" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-md hover:text-[#005C76ff] font-medium" href="#pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center -mx-4 mt-10 lg:my-10 md:pb-10 lg:pb-16 flex-col-reverse md:flex-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                <h1 className="max-w-sm uppercase mb-8 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight font-bold text-[#00182Bff]">Hi, I'm Nacho</h1>
                <p className="max-w-lg mb-8 text-lg lg:text-2xl leading-loose lg:leading-loose text-gray-500">
                  Argentinian living in Australia, love surfing and above all fixing and upgrading your car.
                </p>
                <div>
                  <a
                    className="block lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-base lg:text-xl leading-loose lg:leading-loose text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white hover:text-white rounded-full transition duration-200"
                    href="#"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    className="block lg:inline-block px-5 py-3  text-base lg:text-xl leading-loose lg:leading-loose text-center text-[#424B54] hover:bg-[#424B54] border border-[#424B54] hover:text-white rounded-full transition duration-200"
                    href="#"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>
              <div className="flex md:flex-col w-10/12 md:w-2/5 mb-2">
                <div className="w-full mr-2">
                  <Image className="object-cover h-80 md:h-auto md:w-full rounded-2xl" src={mechanic} alt="/" />
                </div>
                <div className="w-full ml-2">
                  <Image className="object-cover h-80 md:h-auto md:w-full rounded-2xl" src={beach} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="">
          <h2 className="mb-10 text-center text-6xl md:text-7xl xl:text-10xl font-bold font-heading leading-none mx-auto">Book your service</h2>
          <div className="flex flex-row container px-4 mx-auto">
            <Swiper
              slidesPerView={width ? 1 : 3}
              spaceBetween={30}
              slidesPerGroup={width ? 1 : 3}
              loop={false}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="md:max-w-4xl mx-auto">
                  <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-96 p-5">
                      <div className="bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-xl">
                        <div className="border-b border-blueGray-100">
                          <div className="py-7 px-9">
                            <h3 className="mb-3 text-2xl text-[#005C76ff] font-bold leading-snug">Basic</h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">
                              This service includes all the primary care your vehicle needs to keep you on the move and avoid expensive unwanted surprises.
                            </p>
                          </div>
                        </div>
                        <div className="pt-8 pb-9 px-9">
                          <p className="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
                          <ul className="mb-4">
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Oil & Oil filter change</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Air filter replacement</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Fuel filter replacement</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Visual Inspection</p>
                            </li>
                          </ul>
                          <p className="mb-3 text-xl text-gray-500 font-semibold leading-normal">
                            <span>Starting from</span>
                            <span className="text-gray-900"> $49</span>
                          </p>
                          <a className="block w-full px-5 py-3 text-sm text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white font-semibold border border-[#5a98c7] hover:border-[#005C76ff] rounded-full transition duration-200">
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:max-w-4xl mx-auto">
                  <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-96 p-5">
                      <div className="bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-2xl">
                        <div className="border-b border-blueGray-100">
                          <div className="py-7 px-9">
                            <h3 className="mb-3 text-2xl text-[#005C76ff] font-bold leading-snug">Extend my car life</h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">Want to maximize the life of your trustworthy motor vehicle? We can help.</p>
                          </div>
                        </div>
                        <div className="pt-8 pb-9 px-9">
                          <p className="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
                          <ul className="mb-4">
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Basic service</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Fuel injector cleaning</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Oil flush</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Tire pressure</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Belt check</p>
                            </li>
                            <li className="flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">ACC check</p>
                            </li>
                          </ul>
                          <p className="mb-3 text-xl text-gray-500 font-semibold leading-normal">
                            <span>Starting from</span>
                            <span className="text-gray-900"> $49</span>
                          </p>
                          <a className="block w-full px-5 py-3 text-sm text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white font-semibold border border-[#5a98c7] hover:border-[#005C76ff] rounded-full transition duration-200">
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:max-w-4xl mx-auto">
                  <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-96 p-5">
                      <div className="bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-2xl">
                        <div className="border-b border-blueGray-100">
                          <div className="py-7 px-9">
                            <h3 className="mb-3 text-2xl text-[#005C76ff] font-bold leading-snug">Pre sell service</h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">
                              Avoid getting scammed and get a trustworthy opinion on the suspension, steering, leaks, tires, transmission and basic state of a vehicle.
                            </p>
                          </div>
                        </div>
                        <div className="pt-8 pb-9 px-9">
                          <p className="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
                          <ul className="mb-4">
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Engine bay wash</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Dent removal</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Easier sale</p>
                            </li>
                          </ul>
                          <p className="mb-3 text-xl text-gray-500 font-semibold leading-normal">
                            <span>Starting from</span>
                            <span className="text-gray-900"> $49</span>
                          </p>
                          <a className="block w-full px-5 py-3 text-sm text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white font-semibold border border-[#5a98c7] hover:border-[#005C76ff] rounded-full transition duration-200">
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:max-w-4xl mx-auto">
                  <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-96 p-5">
                      <div className="bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-xl">
                        <div className="border-b border-blueGray-100">
                          <div className="py-7 px-9">
                            <h3 className="mb-3 text-2xl text-[#005C76ff] font-bold leading-snug">4wd upgrade</h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">Lets get that car ready for any terrain. Ask for a quote on component upgrade and installation.</p>
                          </div>
                        </div>
                        <div className="pt-8 pb-9 px-9">
                          <p className="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
                          <ul className="mb-4">
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Awnings</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Solar panels</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">External battery</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Water storage</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Lift kits</p>
                            </li>
                            <li className="mb-4 flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Heavy duty suspension</p>
                            </li>
                            <li className="flex items-center">
                              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                  stroke="#4F46E5"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              <p className="font-semibold leading-normal">Off road tires</p>
                            </li>
                          </ul>
                          <p className="mb-3 text-xl text-gray-500 font-semibold leading-normal">
                            <span>Starting from</span>
                            <span className="text-gray-900"> $49</span>
                          </p>
                          <a className="block w-full px-5 py-3 text-sm text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white font-semibold border border-[#5a98c7] hover:border-[#005C76ff] rounded-full transition duration-200">
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:max-w-4xl mx-auto">
                  <div className="flex flex-wrap -m-5">
                    <div className="w-full md:w-96 p-5">
                      <div className="bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-xl min-h-24">
                        <div className="border-b border-blueGray-100">
                          <div className="py-7 px-9">
                            <h3 className="mb-3 text-2xl text-[#005C76ff] font-bold leading-snug">Whats that noise?</h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">Don't know what's going on with your car?</p>
                          </div>
                        </div>
                        <div className="pt-8 pb-9 px-9">
                          <p className="mb-3 text-xl text-gray-500 font-semibold leading-normal">
                            <span>Starting from</span>
                            <span className="text-gray-900"> $49</span>
                          </p>
                          <a className="block w-full px-5 py-3 text-sm text-center bg-[#5a98c7] hover:bg-[#005C76ff] text-white font-semibold border border-[#5a98c7] hover:border-[#005C76ff] rounded-full transition duration-200">
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  )
}

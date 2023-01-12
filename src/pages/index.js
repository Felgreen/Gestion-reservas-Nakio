import Navbar from 'components/ui/Navbar'
import Hero from 'components/ui/Hero'
import Image from 'next/image'
import arrow from './../public/assets/arrow.svg'
import mechanic from "../public/assets/mechanic.webp";
import beach from "../public/assets/beach.jpg";


export default function Home() {
  return (
    // <div className="flex flex-col scroll-smooth">
    //   <Navbar />

      <section id="top">
        {/* <Hero /> */}

        <div className="">
          <section id="home" className="bg-transparent">
            <div className="container px-4 mx-auto max-w-7xl">
              <nav class="flex justify-between items-center py-8">
                <a class="uppercase font-extrabold text-base py-2 rounded-full text-black" href="#">
                  Nacho's <span class="font-light">mechanic house</span>
                </a>
                <div class="lg:hidden">
                  <button className="block navbar-burger text-[#E1CE7A] hover:text-[#BFAB52] focus:outline-none">
                    <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </button>
                </div>
                <ul class="hidden lg:flex ml-auto mr-32 items-center w-auto space-x-12">
                  <li>
                    <a class="text-sm hover:text-[#BFAB52] font-medium" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="text-sm hover:text-[#BFAB52] font-medium" href="#pricing">
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-wrap items-center -mx-4 mt-10 lg:my-10 pb-10 lg:pb-16 flex-col-reverse md:flex-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                  <h1 className="max-w-sm uppercase mb-8 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight font-bold text-black">Hi, I'm Nacho</h1>
                  <p className="max-w-lg mb-8 text-lg lg:text-2xl leading-loose lg:leading-loose text-gray-500">
                    Argentinian living in Australia, love surfing and above all fixing and upgrading your car.
                  </p>
                  <div>
                    <a
                      className="block lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-base lg:text-xl leading-loose lg:leading-loose text-center bg-[#E1CE7A] hover:bg-[#BFAB52] text-white hover:text-white rounded-full transition duration-200"
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
                <div className="w-full md:w-2/5 px-4 mb-12 md:mb-0">
                  <Image className="object-cover w-full h-80 md:h-auto md:w-full rounded-2xl" src={mechanic} alt="/" />
                  <Image className="object-cover w-full h-80 md:h-auto md:w-full rounded-2xl" src={beach} alt="/" />
                </div>
              </div>
            </div>

          </section>
          
          
          <section id="pricing" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="max-w-xl lg:max-w-2xl mx-auto mb-12 text-center">
                <h2 className="mb-4 text-2xl leading-tight md:text-3xl md:leading-tight lg:text-6xl lg:leading-tight font-bold text-black uppercase">Book your service</h2>
                <p className="mb-9 text-lg lg:text-2xl leading-loose lg:leading-loose text-gray-500">
                  This are all the services i provide. You can see the detail of each service and the minimum price. Choosse the one that fits your needs.
                </p>
              </div>
              <div className="flex flex-wrap items-center -mx-4 -mb-6 lg:mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                  <div className="p-6 md:p-12 bg-gray-50 rounded lg:text-center">
                    <h3 className="text-2xl font-bold text-[#E1CE7A]">Basic</h3>
                    <span className="inline-block mb-6 text-4xl md:text-6xl font-bold font-heading">$34,99</span>
                    <ul className="mb-6 text-left text-lg">
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>Complete documentation</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>Working materials in Figma</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>100GB cloud storage</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>500 team members</p>
                      </li>
                    </ul>
                    <a
                      className="block w-full px-5 py-3 text-sm text-center bg-[#E1CE7A] hover:bg-[#BFAB52] text-white font-semibold border border-[#E1CE7A] hover:border-[#BFAB52] rounded-full transition duration-200"
                      href="#"
                    >
                      Action
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                  <div className="p-6 md:p-12 bg-transparent rounded-{border-radius} shadow-lg border-2 border-[#E1CE7A] lg:text-center">
                    <h3 className="text-2xl font-bold text-[#E1CE7A]">Basic pro</h3>
                    <span className="inline-block mb-6 text-4xl md:text-6xl font-bold">$65,99</span>
                    <ul className="mb-6 text-left text-lg">
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-lg">Complete documentation</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-lg">Working materials in Figma</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-lg">100GB cloud storage</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-lg">500 team members</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-lg">Premium support</p>
                      </li>
                    </ul>
                    <a
                      className="block w-full px-5 py-3 text-sm text-center bg-[#E1CE7A] hover:bg-[#BFAB52] text-white font-semibold border border-[#E1CE7A] hover:border-[#BFAB52] rounded-full transition duration-200"
                      href="#"
                    >
                      Action
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                  <div className="p-6 md:p-12 bg-gray-50 rounded lg:text-center">
                    <h3 className="text-2xl font-bold text-[#E1CE7A]">Extend car life</h3>
                    <span className="inline-block mb-6 text-4xl md:text-6xl font-bold font-heading">$99,99</span>
                    <ul className="mb-6 text-left text-lg">
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>Complete documentation</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>Working materials in Figma</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>100GB cloud storage</p>
                      </li>
                      <li className="mb-2 flex items-center">
                        <svg className="mr-2 w-6 h-6 text-[#E1CE7A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>500 team members</p>
                      </li>
                    </ul>
                    <a
                      className="block w-full px-5 py-3 text-sm text-center bg-[#E1CE7A] hover:bg-[#BFAB52] text-white font-semibold border border-[#E1CE7A] hover:border-[#BFAB52] rounded-full transition duration-200"
                      href="#"
                    >
                      Action
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
  )
}

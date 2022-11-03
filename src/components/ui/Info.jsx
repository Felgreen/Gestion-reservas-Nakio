import React from "react";
import Image from "next/image";
import Background from "../../public/assets/Background.png";

const Info = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p>Skills</p>
        <h2 className="py-4">What i can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounder-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Background} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

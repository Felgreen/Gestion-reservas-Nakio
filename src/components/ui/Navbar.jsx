import React from "react";
import Logo from "../../public/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex flex-row justify-between items-center px-6 bg-[#161417] text-white">
      <div className="flex flex-row items-center">
        <Image
          style={{ width: "50px" }}
          src={Logo}
          alt="piucture of th"
          width={50}
          height={50}
        />
        <p className="text-2xl text-white ml-3">Hola Soy Nacho</p>
      </div>
    </div>
  );
};

export default Navbar;

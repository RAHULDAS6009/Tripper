import React from "react";
import { navigateText } from "../assets/constant";

const NavBar = () => {
  return (
    <div>
      {/* Navigation Button */}
      <div className="  flex max-w-screen-md justify-between  mx-auto  bg-white   rounded-2xl w-full drop-shadow-2xl/3">
        {navigateText.map((nav, index) => (
          <Button key={index} label={nav} />
        ))}
      </div>
    </div>
  );
};

function Button({ label }) {
  return (
    <div className="hover:bg-black cursor-pointer w-32 h-10  flex justify-center items-center rounded-3xl  text-gray-400 text-sm px-5  font-medium">
      {label}
    </div>
  );
}

export default NavBar;

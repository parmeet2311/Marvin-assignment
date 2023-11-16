import React from "react";
import DropdownButton from "./Buttons/dropdown";

export default function Navbar() {
  return (
    <div className="container relative z-50">
      <div className="flex items-center md:items-baseline justify-between md:text-base pt-[2rem]">
        <div className="font-Roboto-Regular font-semibold text-lg">AIPatrn</div>
        <div className="flex text-sm gap-x-[4rem] font-Roboto-Regular">
          <ul className="hidden md:flex flex-col text-gray-400 gap-y-[3px]">
            <li className="text-black">
              <a href="#">Home page</a>
            </li>
            <li>
              <a href="#">Generator</a>
            </li>
            <li>
              <a href="#">Pricing-plan</a>
            </li>
            <li>
              <a href="#">Blog-News</a>
            </li>
          </ul>
          <ul className="hidden md:flex flex-col text-gray-400 gap-y-[3px]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Collection-2023</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
          <DropdownButton />
        </div>
      </div>
    </div>
  );
}

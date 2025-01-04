import React from "react";
import Linkedn from "../assets/svg/linkedn.svg";
import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import Github from "../assets/svg/github.svg";

const Footer = () => {
  return (
    <div className="flex w-screen justify-between p-[10px] bg-gray-950 mt-[20px] bottom-0">
      <div className="font-[300] text-[0.9rem] w-[200px]">
        &copy; 2025{" "}
        <span className="font-[600] text-yellow-600">Movie Chill</span>{" "}
        Developed by <span>Joshua || Web Dev</span>
      </div>
      <div className="flex gap-[10px] w-fit">
        <img className="w-[20px]" src={Linkedn} alt="Linkedn" />
        <img className="w-[20px]" src={Instagram} alt="Instagram" />
        <img className="w-[20px]" src={Facebook} alt="Facebook" />
        <img className="w-[20px]" src={Github} alt="Github" />
      </div>
    </div>
  );
};

export default Footer;

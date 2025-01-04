import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profilepic from "../assets/svg/profilepic.svg";
import Profile2 from "./Profile2";
import Footer from "../components/Footer";

const Profile = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/profile2");
    }, 500);
  };
  return (
    <div className={`page ${isTransitioning ? "slide-left" : ""}`}>
      <div className="w-fit mx-auto mt-[200px] h-fit flex flex-col gap-[30px]">
        <div className="flex flex-col gap-2">
          <p className="font-[600] text-[1.6rem]">
            Setting up your <span className="text-yellow-600">account</span>
          </p>
          <div className="flex gap-1">
            <div className="w-[110px] h-[10px] bg-yellow-500 rounded-lg"></div>
            <div className="w-[110px] h-[10px] bg-white rounded-lg"></div>
          </div>
        </div>
        <p className="font-[600] text-[1rem]">
          Step 1: Choose your profile picture
        </p>
        <div className="w-full flex items-center justify-center">
          <img className="w-[120px] " src={Profilepic} alt="Profile Picture" />
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-yellow-600 hover:bg-yellow-700 transition-all w-fit text-[0.9rem] font-[400] px-[30px] py-[10px] rounded-sm"
        >
          CONTINUE
        </button>
        {isTransitioning && <Profile2 />}
      </div>
    </div>
  );
};

export default Profile;

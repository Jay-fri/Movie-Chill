import React from "react";
import { useNavigate } from "react-router-dom";
import Prev from "../assets/svg/prev.svg";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={handleGoBack}
      className="p-[10px] z-50 flex text-black font-[300] text-[1rem] fixed top-[75px] bg-yellow-600 rounded lg:hover:bg-yellow-700 transition-all"
    >
      <img className="rotate-180 w-[20px] h-[20px]" src={Prev} alt="Go Back" />
      Go Back
    </button>
  );
};

export default BackButton;

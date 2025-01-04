import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Back from "../assets/svg/back.svg";

const Profile2 = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/profile");
    }, 500);
  };

  //MOVIE SELECTING
  const buttonData = [
    { id: 1, label: "Action" },
    { id: 2, label: "Adventure" },
    { id: 3, label: "Animation" },
    { id: 4, label: "Comedy" },
    { id: 5, label: "Crime" },
    { id: 6, label: "Documentary" },
    { id: 7, label: "Drama" },
    { id: 8, label: "Family" },
    { id: 9, label: "Fantasy" },
    { id: 10, label: "History" },
    { id: 11, label: "Horror" },
  ];
  const [selectedButtons, setSelectedButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleButtonSelect = (index) => {
    const selectedCount = selectedButtons.filter(
      (isSelected) => isSelected
    ).length;

    if (selectedCount < 6 || selectedButtons[index]) {
      const newSelectedButtons = [...selectedButtons];
      newSelectedButtons[index] = !newSelectedButtons[index];
      setSelectedButtons(newSelectedButtons);
    }
  };
  return (
    <div className={`page ${isTransitioning ? "slide-right" : ""}`}>
      <div className="w-fit mx-auto mt-[50px] h-fit flex flex-col gap-[30px]">
        <div className="flex flex-col gap-2">
          <p className="font-[600] text-[1.6rem]">
            Setting up your <span className="text-yellow-600">account</span>
          </p>
          <div className="flex gap-1">
            <div className="w-[110px] h-[10px] bg-yellow-500 rounded-lg"></div>
            <div className="w-[110px] h-[10px] bg-yellow-500 rounded-lg"></div>
          </div>
        </div>
        <p className="font-[600] text-[1rem]">
          Step 2: Set your movie category preferences
        </p>
        <div className="grid grid-cols-2 gap-4">
          {buttonData.map((button, index) => (
            <button
              key={button.id}
              onClick={() => handleButtonSelect(index)}
              className={`w-[160px] font-[300] text-[1rem] px-[30px] py-[10px] border-[2px] border-yellow-600 rounded-[30px]  transition-all ${
                selectedButtons[index] ? "bg-yellow-600" : "bg-transparent"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 ">
          <button
            onClick={handleButtonClick}
            className="bg-yellow-600 hover:bg-yellow-700 px-[15px] rounded-sm"
          >
            <img className="w-[15px]" src={Back} alt="" />
          </button>
          <Link
            to="/"
            className="bg-yellow-600 hover:bg-yellow-700 transition-all w-fit text-[0.9rem] font-[400] px-[25px] py-[10px] rounded-sm"
          >
            FINISH
          </Link>
        </div>
      </div>
      {isTransitioning && <Profile />}
    </div>
  );
};

export default Profile2;

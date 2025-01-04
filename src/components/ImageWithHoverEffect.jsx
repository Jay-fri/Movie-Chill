import React from "react";
import Play from "../assets/svg/play.svg";

const ImageWithHoverEffect = ({ imageUrl, altText }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto rounded-[10px]"
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
        <div className="bg-yellow-600 lg:hover:bg-yellow-700 flex items-center gap-[10px] font-semibold py-2 px-3 rounded opacity-100">
          Watch{" "}
          <span>
            <img className="w-[15px]" src={Play} alt="play" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageWithHoverEffect;

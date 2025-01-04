import React from "react";
import Paper1 from "../assets/svg/paper1.svg";
import Paper2 from "../assets/svg/paper2.svg";
import Paper3 from "../assets/svg/paper3.svg";
import Fav from "../assets/svg/fav.svg";
import Favman from "../assets/svg/fav-man.svg";

const Favorite = () => {
  return (
    <div className="flex flex-col items-center w-fit h-[72vh] gap-[50px] overflow-hidden p-[20px] mx-auto mt-[100px] ">
      <div className="relative">
        <img className="folder" src={Fav} alt="" />
        <img
          className="paper1 w-[110px] absolute top-[60px] left-[110px] -z-10"
          src={Paper1}
          alt=""
        />
        <img
          className="paper2 w-[110px] absolute top-[90px] left-[50px] -z-10"
          src={Paper2}
          alt=""
        />
        <img
          className="paper3 w-[110px] absolute top-[110px] right-[40px] -z-10"
          src={Paper3}
          alt=""
        />
        <img
          className="fav-woman w-[70px] absolute  top-[53px] right-[65px] z-10"
          src={Favman}
          alt=""
        />
      </div>
      <div className="font-[700] text-[1.6rem] text-center leading-7">
        It seems that your list of{" "}
        <span className="text-yellow-600">Favorite movies</span> is still empty
        for <span className="text-yellow-600">now</span>.
      </div>
    </div>
  );
};

export default Favorite;

import React from "react";
import img1 from "../assets/img/cardmovie.jpg";
import img2 from "../assets/img/cardmovie1.jpg";
import img3 from "../assets/img/cardmovie2.jpg";
import img4 from "../assets/img/cardmovie3.jpg";
import img5 from "../assets/img/cardmovie4.jpg";
import img6 from "../assets/img/cardmovie5.jpg";
import img7 from "../assets/img/cardmovie6.jpg";
import img8 from "../assets/img/cardmovie7.jpg";
import img9 from "../assets/img/cardmovie8.jpg";
import img10 from "../assets/img/cardmovie9.jpg";
import img11 from "../assets/img/cardmovie10.jpg";
import img12 from "../assets/img/cardmovie11.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  const localImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden h-[400px] w-full">
        <div className="absolute w-full h-full top-0 z-30 bg-gradient-to-t from-yellow-600/60 via-40% to-black/60 to-60%"></div>

        <div className="grid grid-cols-3 gap-[10px] animate-scroll">
          {localImages.map((image, index) => (
            <div key={index} className="min-w-[200px]">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded object-cover w-[120px] h-[160px]"
              />
            </div>
          ))}
          {/* Repeat images for smooth looping */}
          {localImages.map((image, index) => (
            <div key={`duplicate-${index}`} className="min-w-[200px]">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded object-cover w-[120px] h-[160px]"
              />
            </div>
          ))}
        </div>
        <div className="absolute font-[600] z-40 text-[1.3rem] inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded px-[10px] py-[40px] text-start top-[30%] left-[5%] w-[90%] h-fit">
          Join the <span className="text-yellow-600">Chill community</span>{" "}
          today and explore a world of cinematic{" "}
          <span className="text-yellow-600">entertainment</span>!🤩
        </div>
      </div>

      <div className="flex flex-col gap-7 w-[80vw] mx-auto mt-[30px] mb-[50px]">
        <div className="flex flex-col gap-1">
          <p className="font-[600] text-[1.5rem]">
            Ready to join the <span className="text-yellow-600">community</span>
            😁?
          </p>
          <p className="font-[300] text-[0.9rem] text-gray-400">
            Fill out the form below to create your Movie Chill account now!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[1rem]">Username</p>
          <input
            className="w-full bg-transparent border rounded h-[50px] p-3"
            type="email"
            placeholder="Your username here"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[1rem]">Email</p>
          <input
            className="w-full bg-transparent border rounded h-[50px] p-3"
            type="email"
            placeholder="Your email here"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[1rem]">Password</p>
          <input
            className="w-full bg-transparent border rounded h-[50px] p-3"
            type="password"
            placeholder="Your password here"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[1rem]">Confirm Password</p>
          <input
            className="w-full bg-transparent border rounded h-[50px] p-3"
            type="password"
            placeholder="Your password here"
          />
        </div>
        <Link
          className="w-full bg-yellow-600 flex items-center justify-center h-[50px] rounded-md hover:bg-yellow-700 transition-all "
          to="/"
        >
          SIGN UP
        </Link>
        <div className="w-[300px] text-center">
          Already have an account? You can{" "}
          <Link to="/login" className="text-yellow-600 hover:underline">
            log in here.
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signup;

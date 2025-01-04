import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Similar1 from "../assets/img/similar1.jpg";
import Similar2 from "../assets/img/similar2.jpg";
import Similar3 from "../assets/img/similar3.jpg";
import Similar4 from "../assets/img/similar4.jpg";
import Similar5 from "../assets/img/similar5.jpg";
import Similar6 from "../assets/img/similar6.jpg";
import Madame from "../assets/img/madamebg.jpg";

const movies = [
  {
    id: 0,
    image: Similar6,
    title: "Madame Web",
    description:
      "'Meanwhile, in another universe...' In a twist on the classic genre, Madame Web tells the origin story of one of Marvel's most enigmatic heroines. The suspenseful tale stars Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she...",
  },
  {
    id: 1,
    image: Similar1,
    title: "The Last Human",
    description:
      "'Meanwhile, in another universe...' In a variation of the classic genre, Madame Web tells the origin story of one of Marvel Comics' most enigmatic heroines. The suspenseful tale stars Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she...",
  },
  {
    id: 2,
    image: Similar2,
    title: "Mona Lisa",
    description:
      "'Meanwhile, in another universe...' In a twist on the classic genre, Madame Web explores the origins of one of Marvel Comics' most enigmatic heroines. The suspenseful story features Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she embarks on a journey that intertwines her newfound powers with a larger destiny she never imagined.",
  },
  {
    id: 3,
    image: Similar3,
    title: "Godzilla",
    description:
      "In the shadow of nuclear destruction, a massive prehistoric beast emerges from the depths of the ocean. Towering over Tokyo, Godzilla becomes the ultimate symbol of nature's wrath and humanity's hubris. As the monster wreaks havoc on the city, scientists and soldiers scramble to find a way to stop this unstoppable force of destruction. A haunting allegory of war and its aftermath, Godzilla cemented its place as a cornerstone of cinematic history.",
  },
  {
    id: 4,
    image: Similar4,
    title: "Germlins",
    description:
      "Chaos takes center stage in this satirical sequel as the mischievous Gremlins overrun a high-tech skyscraper in New York City. Packed with meta-humor and outrageous antics, Gremlins 2 turns the volume up on its predecessor, delivering a whirlwind of wild experiments, pop culture parodies, and over-the-top mayhem. As Gizmo fights to stop his chaotic cousins, this cult classic dives headfirst into absurdity, pushing the boundaries of comedy and horror.",
  },
  {
    id: 5,
    image: Similar5,
    title: "Screw-on Head",
    description:
      "In an alternate 19th century, President Abraham Lincoln calls upon a steampunk secret agent to protect the world from supernatural threats. Enter Screw-On Head, a robotic hero whose detachable head and eccentric team battle the villainous Emperor Zombie. Packed with dark humor, gothic visuals, and pulpy adventure, The Amazing Screw-On Head offers a quirky, one-of-a-kind journey through a bizarre and macabre alternate history.",
  },
];

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="mt-[100px] p-[10px]">
      <div
        className="bg-cover bg-center w-full h-[300px] relative"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="absolute bg-black opacity-60 w-full h-full"></div>
        <div className="flex flex-col gap-[20px] pt-[130px] absolute bottom-0">
          <div className="font-[600] text-[1.7rem]">{movie.title}</div>
          <div className="flex gap-2">
            <div className="bg-yellow-500 py-[5px] w-[90px] rounded-[20px] text-white flex items-center justify-center">
              Action
            </div>
            <div className="bg-yellow-500 py-[5px] w-[90px] rounded-[20px] text-white flex items-center justify-center">
              Drama
            </div>
            <div className="bg-yellow-500 py-[5px] w-[90px] rounded-[20px] text-white flex items-center justify-center">
              Horror
            </div>
          </div>
          <div className="text-yellow-500 font-[500] text-[0.9rem]">
            2024 | French, English
          </div>
        </div>
      </div>
      <div className="font-[300] text-[1rem] mt-[25px]">
        {movie.description}
      </div>

      <div className="mt-[40px] flex flex-col gap-[10px]">
        <p className="font-[600] text-[1.6rem]">SIMILAR MOVIES</p>
        <div className="grid grid-cols-3 gap-[10px] mb-[90px] w-full h-64">
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar1} alt="Movie1" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar2} alt="Movie2" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar3} alt="Movie3" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar6} alt="Movie" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>{" "}
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar4} alt="Movie4" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img className="rounded-[9px]" src={Similar5} alt="Movie5" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
              <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

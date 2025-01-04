import React, { useState } from "react";
import Similar1 from "../assets/img/similar1.jpg";
import Similar2 from "../assets/img/similar2.jpg";
import Similar3 from "../assets/img/similar3.jpg";
import Similar4 from "../assets/img/similar4.jpg";
import Similar5 from "../assets/img/similar5.jpg";
import Similar6 from "../assets/img/similar6.jpg";
import Madame from "../assets/img/madamebg.jpg";
import Play from "../assets/svg/play.svg";
import Ratings from "../assets/svg/ratings.svg";
import ImageWithHoverEffect from "../components/ImageWithHoverEffect";
import { Link } from "react-router-dom";

const movies = [
  { id: 0, url: Madame, alt: "Madame Web" },
  { id: 1, url: Similar1, alt: "BatMan Movie" },
  { id: 2, url: Similar2, alt: "Mona Lisa" },
  { id: 3, url: Similar3, alt: "GodZilla" },
  { id: 4, url: Similar4, alt: "GodZilla" },
  { id: 5, url: Similar5, alt: "GodZilla" },
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState({
    image: Similar1,
    title: "BATMAN",
    description:
      " 'Meanwhile, in another universe...' In a variation of the classic genre, Madame Web tells the origin story of one of Marvel Comics' most enigmatic heroines. The suspenseful tale stars Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she...",
  });

  const images = [
    {
      image: Similar1,
      title: "BATMAN",
      description:
        "'Meanwhile, in another universe...' In a variation of the classic genre, Madame Web tells the origin story of one of Marvel Comics' most enigmatic heroines. The suspenseful tale stars Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she...",
    },
    {
      image: Similar2,
      title: "MONA LISA",
      description:
        "'Meanwhile, in another universe...' In a twist on the classic genre, Madame Web explores the origins of one of Marvel Comics' most enigmatic heroines. The suspenseful story features Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she embarks on a journey that intertwines her newfound powers with a larger destiny she never imagined.",
    },
    {
      image: Similar3,
      title: "GODZILLA",
      description:
        "In the shadow of nuclear destruction, a massive prehistoric beast emerges from the depths of the ocean. Towering over Tokyo, Godzilla becomes the ultimate symbol of nature's wrath and humanity's hubris. As the monster wreaks havoc on the city, scientists and soldiers scramble to find a way to stop this unstoppable force of destruction. A haunting allegory of war and its aftermath, Godzilla cemented its place as a cornerstone of cinematic history.",
    },
    {
      image: Similar4,
      title: "GREMLINS",
      description:
        "Chaos takes center stage in this satirical sequel as the mischievous Gremlins overrun a high-tech skyscraper in New York City. Packed with meta-humor and outrageous antics, Gremlins 2 turns the volume up on its predecessor, delivering a whirlwind of wild experiments, pop culture parodies, and over-the-top mayhem. As Gizmo fights to stop his chaotic cousins, this cult classic dives headfirst into absurdity, pushing the boundaries of comedy and horror.",
    },
    {
      image: Similar5,
      title: "SCREW ON HEAD",
      description:
        "In an alternate 19th century, President Abraham Lincoln calls upon a steampunk secret agent to protect the world from supernatural threats. Enter Screw-On Head, a robotic hero whose detachable head and eccentric team battle the villainous Emperor Zombie. Packed with dark humor, gothic visuals, and pulpy adventure, The Amazing Screw-On Head offers a quirky, one-of-a-kind journey through a bizarre and macabre alternate history.",
    },
    {
      image: Similar6,
      title: "MADAME WEB",
      description:
        "'Meanwhile, in another universe...' In a twist on the classic genre, Madame Web tells the origin story of one of Marvel's most enigmatic heroines. The suspenseful tale stars Dakota Johnson as Cassandra Webb, a Manhattan paramedic with clairvoyant abilities. Forced to confront revelations about her past, she...",
    },
  ];

  const handleImageClick = (image, title, description) => {
    setSelectedImage({ image, title, description });
  };

  return (
    <div className="mt-[100px]">
      <div className="bg-[url('./assets/img/madamebg.jpg')] p-[10px] bg-cover bg-center w-screen h-fit">
        <div className="flex flex-col gap-[25px]">
          <h1 className="font-[800] text-[2rem] mt-[20px]">MADAME WEB</h1>
          <div className="font-[200] text-[1rem]">
            2024 | LANGUAGE: <span className="text-gray-400">English</span>
          </div>
          <p className="w-[90vw] text-[0.9rem] font-[300] ">
            "Meanwhile, in another universe..." In a twist on the classic genre,
            Madame Web tells the origin story of one of Marvel's most enigmatic
            heroines. The suspenseful tale stars Dakota Johnson as Cassandra
            Webb, a Manhattan paramedic with clairvoyant abilities. Forced to
            confront revelations about her past, she...
          </p>
          <Link
            to={{
              pathname: "/movie/0",
              state: { id: 0, title: "Madame Web", image: Madame },
            }}
            className="flex rounded-md gap-[15px] bg-yellow-600 lg:hover:bg-yellow-700 px-[20px] py-[10px]  w-fit"
          >
            <p>WATCH NOW</p>
            <img className="w-[20px]" src={Play} alt="play" />
          </Link>
          <div className="flex flex-col gap-[10px] mt-[40px]">
            <div className="font-[600] text-[1.3rem]">SIMILAR</div>
            <div className="grid grid-cols-3 gap-[10px]">
              {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <div className="relative group cursor-pointer">
                    <img
                      src={movie.url}
                      alt={movie.alt}
                      className="rounded w-full h-[200px] object-cover"
                    />

                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                      <button className="text-white bg-yellow-600 px-4 py-2 rounded lg:hover:bg-yellow-700 transition">
                        Watch
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex flex-col gap-[10px] p-[10px]">
        <div className="font-[600] text-[1.3rem]">POPULAR MOVIES</div>
        <div className="scroller-container ">
          <div className="scroller">
            {images.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`Image ${index + 1}`}
                onClick={() =>
                  handleImageClick(item.image, item.title, item.description)
                }
                className={`scroller-image ] ${
                  selectedImage.image === item.image ? "selected" : ""
                }`}
              />
            ))}
          </div>
          <div
            className="botton-div relative"
            style={{
              backgroundImage: `url(${selectedImage.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "370px",
              color: "white",
              display: "flex",
            }}
          >
            <div className="w-full  h-full bg-gradient-to-r from-black to-black/20 opacity-90 absolute"></div>
            <div className="flex z-50 flex-col gap-[10px] m-[20px]">
              <p className="font-[600] text-[1.4rem]">{selectedImage.title}</p>
              <div className="flex gap-[10px]">
                <img className="w-[100px]" src={Ratings} alt="" />
                <div className="font-[600] text-[1rem] text-gray-400">5.9</div>
                <div className="font-[600] text-[1rem]">2024</div>
              </div>
              <div className="font-[300] text-[0.9rem]">
                {selectedImage.description}
              </div>
              <div className="flex gap-[10px]">
                <div className="flex hover:bg-yellow-600 transition-all gap-[10px] cursor-pointer items-center bg-yellow-500 p-[10px] rounded-md">
                  <div className="font-[400] text-[0.9rem]">WATCH TRAILER</div>
                  <img className="w-[20px]" src={Play} alt="" />
                </div>
                <div className="p-[10px] cursor-pointer hover:border-yellow-600 transition-all font-[400] text-[0.9rem] border-[2px] border-yellow-500 rounded">
                  MORE DETAILS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

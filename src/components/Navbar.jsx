import React, { useEffect, useState } from "react";
import Logo from "../assets/svg/moviechilllogo.svg";
import { Link, NavLink } from "react-router-dom";
import Open from "../assets/svg/menu.svg";
import Close from "../assets/svg/close.svg";
import SearchIcon from "../assets/svg/searchicon.svg";
import Profile from "../assets/svg/profilepic.svg";
import Similar1 from "../assets/img/similar1.jpg";
import Similar2 from "../assets/img/similar2.jpg";
import Similar3 from "../assets/img/similar3.jpg";
import Similar4 from "../assets/img/similar4.jpg";
import Similar5 from "../assets/img/similar5.jpg";
import Similar6 from "../assets/img/similar6.jpg";

const movies = [
  {
    id: 1,
    title: "BatMan",
    image: Similar1,
    description: "Description of Movie 1",
  },
  {
    id: 2,
    title: "Monalisa",
    image: Similar2,
    description: "Description of Movie 2",
  },
  {
    id: 3,
    title: "Godzilla",
    image: Similar3,
    description: "Description of Movie 3",
  },
  {
    id: 4,
    title: "Gremlins",
    image: Similar4,
    description: "Description of Movie 4",
  },
  {
    id: 5,
    title: "Screw on head",
    image: Similar5,
    description: "Description of Movie 4",
  },
  {
    id: 6,
    title: "Madame",
    image: Similar6,
    description: "Description of Movie 4",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isSearchVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isSearchVisible]);

  return (
    <div className="z-50">
      <nav className="fixed top-0 z-50 w-full h-[70px] bg-black p-[15px]">
        <div className="flex justify-between  items-center ">
          <img className="w-[180px] pr-[10px]" src={Logo} alt="Logo" />
          <div className="hidden gap-9">
            <NavLink to="/" className="font-[100] text-[1rem] ">
              Home
            </NavLink>
            <NavLink to="/favorite" className="font-[300] text-[1.1rem] ">
              Favorites
            </NavLink>
            <NavLink to="/about" className="font-[300] text-[1.1rem] ">
              About
            </NavLink>
          </div>
          {/* Search Icon to Trigger the Overlay */}
          <div
            onClick={() => setIsSearchVisible(true)}
            className="cursor-pointer"
          >
            <img className="w-[30px]" src={SearchIcon} alt="" />
          </div>
          <NavLink to="/login">
            <img className="w-[50px]" src={Profile} alt="" />
          </NavLink>
          <button className="md:hidden " onClick={toggleMenu}>
            {isOpen ? (
              //Close Icon
              <img className="w-[35px]" src={Close} />
            ) : (
              // Hamburger Icon
              <img className="w-[35px]" src={Open} />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden p-[20px] bg-gray-700 flex flex-col gap-6 items-center w-[55vw] absolute right-0">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 bg-black font-[600] text-[1.2rem] w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
                  : "text-white font-[600] text-[1.2rem] border w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorite"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 bg-black font-[600] text-[1.2rem] w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
                  : "text-white font-[600] text-[1.2rem] border w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 bg-black font-[600] text-[1.2rem] w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
                  : "text-white font-[600] text-[1.2rem] border w-[120px] flex items-center justify-center py-[5px] rounded-[30px]"
              }
            >
              About
            </NavLink>
          </div>
        )}
      </nav>
      {/* Search Overlay */}
      {isSearchVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 z-[100] flex items-center justify-center ">
          <div className="bg-black p-6 rounded-lg mt-[80px] h-full shadow-lg w-fit">
            <button
              onClick={() => setIsSearchVisible(false)}
              className="absolute top-2 right-2 text-gray-600 text-xl"
            >
              <img src={Close} alt="" />
            </button>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2  border rounded-md bg-black"
            />

            {/* Filtered Movie List */}
            <div className="mt-4 grid grid-cols-2 gap-6">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className="border p-1 rounded-md shadow-lg mt-2 "
                  >
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        className="w-[100px]  rounded-md"
                        src={movie.image}
                        alt=""
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <p>No movies found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

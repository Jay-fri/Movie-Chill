import React from "react";
import "./App.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Profile from "./pages/Profile";
import Profile2 from "./pages/Profile2";
import MovieDetails from "./pages/MovieDetails";
import BackButton from "./components/BackButton";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BackButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

const Layout = () => {
  const location = useLocation();
  const isAuthPage = [
    "/login",
    "/signup",
    "/resetpassword",
    "/profile",
    "/profile2",
  ].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Outlet />
    </>
  );
};

export default App;

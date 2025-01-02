import React from "react";
import "./App.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Tvlives from "./pages/Tvlives";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Profile from "./pages/Profile";
import Profile2 from "./pages/Profile2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/tvlives" element={<Tvlives />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
        </Route>
      </Routes>
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

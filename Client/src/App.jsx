import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/home/Home";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import { useDispatch, useSelector } from "react-redux";
import { Characters } from "./redux/actions";
import { useEffect } from "react";
import Detail from "./components/detail/Detail";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Characters());
  }, []);

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;

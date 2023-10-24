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
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import styled from "styled-components";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Characters());
  }, []);

  const location = useLocation();

  return (
    <ContainerApp>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ContainerApp>
  );
};

export default App;

const ContainerApp = styled.div`
  background-image: linear-gradient(45deg, #bd43bc, #620282, #34316b, #34316b);
`;

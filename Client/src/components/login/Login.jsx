import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Aca Estara el Login</h1>
      <Link to="register">Register</Link>
      <br />
      <Link to="home">Home</Link>
    </div>
  );
};

export default Login;

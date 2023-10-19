import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
    if (user.password.length > 5) setErr({ ...err, password: "" });
  };

  const isFormEmpty = !user.email || !user.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (result) {
        dispatch(CurrentUser());
        navigate("/home");
      }
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials")
        setErr({
          ...err,
          email: "invalid email or password",
        });
    }
  };

  return (
    <ContainerRegister>
      <h1>Log in</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youmail@company.ltd"
          className="camp"
          onChange={handleChange}
        />
        <ContainerError>{err.email && <p></p>}</ContainerError>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="camp"
          onChange={handleChange}
        />
        <ContainerError>{err.email && <p>{err.email}</p>}</ContainerError>

        <button disabled={isFormEmpty ? true : false}>Log in</button>
        <NavLink to={"/register"} className="register">
          Register
        </NavLink>
      </Form>
    </ContainerRegister>
  );
};

export default Login;
const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-family: arial;
    font-size: 3rem;
    margin-top: -100px;
    margin-bottom: 50px;
  }
  .register {
    margin-top: 25px;

    font-size: 1.2rem;
    font-family: arial;
    color: #000;
    cursor: pointer;
  }
`;

const Form = styled.form`
  box-shadow: 2px 4px 10px 4px #292727a2;
  border-radius: 5px;
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .camp {
    width: 90%;
    height: 4vh;
  }

  button {
    cursor: pointer;
    width: 60%;
    height: 30px;
  }
`;

const ContainerError = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:10px;
  p {
    font-family:arial;
    font-size:12px;
    color: red;
  text-align: center;
`;

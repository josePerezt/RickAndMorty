import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: "",
    password: "",
  });
  const isFormEmpty = !userRegister.email || !userRegister.password;
  const isError = err.email || err.password;

  const handlerVisible = () => {
    setVisible(!visible);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
    if (userRegister.password.length > 5) setErr({ ...err, password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      );
      if (result) {
        Swal.fire({
          title: "Usuario creado con exito",
          text: "ya puedes iniciar sesion",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });

        navigate("/");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        setErr({
          ...err,
          email: "This email address is already in use",
        });
      if (error.code === "auth/missing-email")
        setErr({
          ...err,
          email: "Please enter your email",
        });
      if (error.code === "auth/weak-password")
        setErr({
          ...err,
          password: "Password must be at least 6 characters long",
        });
      if (error.code === "auth/missing-password")
        setErr({
          ...err,
          password: "Please enter your password",
        });
    }
  };

  return (
    <ContainerRegister>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youmail@company.ltd"
          className="camp"
          onChange={handleChange}
        />
        <ContainerError>{err.email && <p>{err.email}</p>}</ContainerError>
        <input
          type={visible ? "text" : "password"}
          name="password"
          id="password"
          placeholder="password"
          className="camp"
          onChange={handleChange}
        />
        <div onClick={handlerVisible} className="eyes">
          {visible ? <PiEye size={25} /> : <PiEyeClosed size={25} />}
        </div>
        <ContainerError>{err.password && <p>{err.password}</p>}</ContainerError>

        <button disabled={isFormEmpty || isError ? true : false}>Send</button>
        <NavLink to="/" className="login">
          Login
        </NavLink>
      </Form>
    </ContainerRegister>
  );
};

export default Register;
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
  .login {
    margin-top: 25px;

    font-size: 1.2rem;
    font-family: arial;
    color: #000;
    cursor: pointer;
  }
  .eyes {
    background-color: #fff;
    position: absolute;
    height: 20px;
    margin-bottom: 62px;
    margin-left: 24%;
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

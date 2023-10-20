import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import fondoLogin from "../../assets/fondologin.png";
import { CurrentUser } from "../../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const currentUser = useSelector((state) => state.currentUser);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: "",
    password: "",
  });

  const handlerVisible = () => {
    setVisible(!visible);
  };

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
    <ContainerLogin>
      <h1>Log in</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourEmail@company.ltd"
          className="camp"
          onChange={handleChange}
        />
        <ContainerError>{err.email && <p></p>}</ContainerError>
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
        <ContainerError>{err.email && <p>{err.email}</p>}</ContainerError>

        <button disabled={isFormEmpty ? true : false}>Log in</button>
        <NavLink to={"/register"} className="register">
          Register
        </NavLink>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
const ContainerLogin = styled.div`
  background-image: url(${fondoLogin});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  h1 {
    color: #fff;
    font-family: arial;
    font-size: 3rem;
    margin-top: -100px;
    margin-bottom: 40px;
  }
  .register {
    margin-top: 25px;
    color: #fff;
    font-size: 1.2rem;
    font-family: arial;
    cursor: pointer;
  }
  .eyes {
    cursor: pointer;
    color: #fff;
    position: absolute;
    height: 20px;
    margin-bottom: 62px;
    margin-left: 24%;
  }
`;

const Form = styled.form`
  box-shadow: 2px 4px 10px 4px #ffebd0 ;
  background-color:#000000a1;
  border-radius: 5px;
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .camp {
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #2a0a75;
    outline: none;
    color: #fff;
    width: 90%;
    height: 4vh;
  }
  .camp::placeholder {
    color: #ffffff75;
    padding: 10px;
  }
  .camp:-webkit-autofill {
    border: 1px solid transparent;
  }

  button {
    background-color:#2a0a75;
    cursor: pointer;
    border-radius: 16px;
    border-color:transparent;S
    font-weight: bold;
    color: #fff;
    width: 60%;
    height: 30px;
    transition:background-color 0.4s;
    &:hover{
      background-color:#481492;
    }
  }

  button:disabled{
    background:#571a9b;
    color:#ffffff75;
    
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

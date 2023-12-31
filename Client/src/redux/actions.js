import axios from "axios";

import {
  ADD_FAVORITES,
  CHARACTERS,
  CURRENT_USER,
  DELETE_DETAIL,
  DETAIL,
  LOGOUT,
  PAGE,
  REGISTER_USER,
  REMOVE_FAVORITES,
} from "./type";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const URL = "http://localhost:3001/character";
const UrlPage = "http://localhost:3001/characterPage?page=";

export const Characters = () => {
  return async function (dispatch) {
    const { data } = await axios(URL);
    dispatch({ type: CHARACTERS, payload: data });
  };
};

export const Character = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/${id}`);
    console.log(`${URL}/${id}`);
    dispatch({ type: DETAIL, payload: data });
  };
};

export const Pagination = (page) => {
  return async function (dispatch) {
    const { data } = await axios(`${UrlPage}${page}`);
    dispatch({ type: PAGE, payload: { data, page } });
  };
};

export const DeleteChar = () => {
  return async function (dispatch) {
    dispatch({ type: DELETE_DETAIL });
  };
};

export const CharFav = (char) => {
  return function (dispatch) {
    dispatch({ type: ADD_FAVORITES, payload: char });
  };
};

export const RemoveFav = (char) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_FAVORITES, payload: char });
  };
};

export const RegisterUser = () => {
  return function (dispatch) {
    dispatch({ type: REGISTER_USER });
  };
};

export const CurrentUser = () => {
  return async function (dispatch) {
    let user;
    await onAuthStateChanged(auth, (current) => (user = current));

    dispatch({ type: CURRENT_USER, payload: user });
  };
};

export const Logout = () => {
  return function (dispatch) {
    dispatch({ type: LOGOUT });
  };
};

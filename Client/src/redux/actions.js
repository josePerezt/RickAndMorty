import axios from "axios";
import { CHARACTERS, DELETE_DETAIL, DETAIL } from "./type";

const URL = "http://localhost:3001/character";

export const Characters = () => {
  return async function (dispatch) {
    const { data } = await axios(URL);
    dispatch({ type: CHARACTERS, payload: data });
  };
};

export const Character = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/${id}`);
    dispatch({ type: DETAIL, payload: data });
  };
};

export const DeleteChar = () => {
  return async function (dispatch) {
    dispatch({ type: DELETE_DETAIL });
  };
};

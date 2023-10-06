import axios from "axios";
import { CHARACTERS } from "./type";

export const Characters = () => {
  return async function async(dispatch) {
    const { data } = await axios("http://localhost:3001/characters");
    dispatch({ type: CHARACTERS, payload: data });
  };
};

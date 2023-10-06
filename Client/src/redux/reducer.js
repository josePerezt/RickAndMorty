import { CHARACTERS } from "./type";

const initialState = {
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

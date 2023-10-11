import { CHARACTERS, DELETE_DETAIL, DETAIL, PAGE } from "./type";

const initialState = {
  allCharacters: {},
  character: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        character: action.payload,
      };
    case PAGE:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case DELETE_DETAIL:
      return {
        ...state,
        character: {},
      };
    default:
      return state;
  }
};

export default reducer;

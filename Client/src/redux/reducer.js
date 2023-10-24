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

const initialState = {
  allCharacters: {},
  copyAll: {},
  character: {},
  favorites: [],
  currentUser: {},
  numPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
        copyAll: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        character: action.payload,
      };
    case PAGE:
      let { cleanData } = action.payload.data;
      const newData = cleanData.filter((char) => {
        return !state.favorites.some((fav) => fav.id === char.id);
      });
      console.log(action.payload);
      action.payload.data.cleanData = newData;

      return {
        ...state,
        allCharacters: action.payload.data,
        numPage: action.payload.page,
        copyAll: action.payload,
      };

    case DELETE_DETAIL:
      return {
        ...state,
        character: {},
      };
    case ADD_FAVORITES:
      const updateCharacters = state.allCharacters.cleanData?.filter(
        (char) => char.id !== action.payload?.id
      );

      return {
        ...state,
        allCharacters: {
          ...state.allCharacters,
          cleanData: updateCharacters,
        },

        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      const removeChar = state.favorites.filter(
        (char) => char.id !== action.payload.id
      );
      state.allCharacters.cleanData.push(action.payload);
      state.allCharacters.cleanData.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,

        favorites: removeChar,
      };
    case REGISTER_USER:
      return {
        ...state,
      };
    case CURRENT_USER:
      const { accessToken, email } = action.payload;
      return {
        ...state,
        currentUser: { accessToken, email },
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
};

export default reducer;

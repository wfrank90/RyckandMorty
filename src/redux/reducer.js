// Define el estado inicial
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

// Define el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== parseInt(action.payload)
        ),
      };
    case "FILTER":
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
      case "ORDER":
        const orderedCharacters = [...state.allCharacters];
        orderedCharacters.sort((a, b) => {
          if (action.payload === "A") {
            return a.id - b.id; // Orden ascendente (menor a mayor)
          } else if (action.payload === "D") {
            return b.id - a.id; // Orden descendente (mayor a menor)
          } else {
            return 0; // No se realiza ningún cambio de orden
          }
        });
        return {
          ...state,
          myFavorites: orderedCharacters
        };


    default:
      return state;
  }
};

export default reducer;

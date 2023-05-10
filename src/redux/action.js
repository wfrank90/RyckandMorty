// Action creator addFav
export const addFav = (character) => {
    return {
      type: "ADD_FAV",
      payload: character
    };
  };
  
  // Action creator removeFav
  export const removeFav = (id) => {
    return {
      type: "REMOVE_FAV",
      payload: id
    };
  };
  
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
  
  //Action  creator filterCards
  export const filterCards = (gender) => {
    return {
      type: "FILTER",
      payload: gender
    }
  }

  //Action cretor orderCards
  export const orderCards = (orden) => {
    return {
      type: "ORDER",
      payload: orden
    }
  }
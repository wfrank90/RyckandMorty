import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { orderCards, filterCards } from "../../redux/action";

const Favorites = ({ myFavorites, dispatch }) => {
  const [aux, setAux] = useState(false);

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilterChange = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.wrapperFavorites}>
      <div className={styles.filters}>
      <select onChange={handleOrderChange}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilterChange}>
        <option value="">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <ul>
        {myFavorites.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      </div>
      <h1 className={styles.titulo}>My Favorites</h1>

      {myFavorites.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          id={character.id}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);

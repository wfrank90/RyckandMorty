import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
    return (
      <div className={styles.wrapperFavorites}>
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
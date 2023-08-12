import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import styles from "./Card.module.css";
import PathRoutes from "../helpers/Routes.helper";
import Detail from "../Detail/Detail";

const Card = (props) => {
  const {
    name,
    id,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    myFavorites,
  } = props;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(myFavorites.some((fav) => fav.id === id));
  }, [id, myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  return (
    <div className={styles.wrapperCard}>
      <button className={styles.btn} onClick={() => onClose(id)}>
        Cerrar
      </button>
      <img src={image} alt="character" />
      <div className={styles.wrapperText}>
        <Link to={PathRoutes.DETAIL}>
          <Detail />
          <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin.name}</h2>
        </div>
      </div>
      {isFav ? (
        <button className={styles.btnFav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => window.alert("Emular cierre de terjeta")}
          />
        );
      })}
    </div>
  );
}

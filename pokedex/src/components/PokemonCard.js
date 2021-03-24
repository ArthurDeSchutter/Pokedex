import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DragDropContainer } from 'react-drag-drop-container';


const PokemonCard = (props) => {
  const [pokemon, setpokemon] = useState();
  let { name } = props.pokemon;
  console.log("card rendered");


  useEffect(() => {
    fetch(`/getpokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setpokemon(data));
  }, []);

  return (
    <>
      {pokemon !== undefined && (
        <DragDropContainer targetKey="foo" dragData={pokemon}  >
        <div style={styles.Canvas}
        /*
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        */
        >
          <img style={styles.font} src={pokemon.sprites.front_default} alt={'sprite'}></img>
          <h5 style={styles.font}>{pokemon.name}</h5>
          <p style={styles.font}>
            {pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}
          </p>
          <p style={styles.font}>type: {pokemon.types[0].type.name}</p>
        </div>
        </DragDropContainer>
      )}
    </>
  );
};
const styles = {
  Canvas: {
    borderColor: "#272121",
    backgroundColor: "#003a70",
    margin: "6px",
    padding: "7px",
    boxShadow: "3px 3px 4px #ffcb05",
    minWidth: "225px",
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: "10px",
  },
  font: {
    borderRadius: "5px",
    minWidth: "80%",
    padding: "2px",
    paddingTop: '2px',
    backgroundColor: "#3d7dca",
    color: "	#ffcb05",
    margin: "5px",
    textAllign: "left",
  },
};

export default PokemonCard;

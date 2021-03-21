import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSpring, animated} from 'react-spring'


const PokemonCard = (props) => {
  const [pokemon, setpokemon] = useState();
  let { name, url } = props.pokemon;
  console.log("card rendered");

  const mouseEnter = (e) => {
    //prevent bubbling
    e.stopPropagation();  
    e.target.style.backgroundColor = '#387c6d'
  }
  const mouseLeave = (e) => {
    //prevent bubbling
    e.stopPropagation();  
    //get original value back
    e.target.style.backgroundColor = styles.Canvas.backgroundColor
  }

  useEffect(() => {
    fetch(`/getpokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setpokemon(data));
    //.then((data) => console.log(data));
  }, []);

  return (
    <>
      {pokemon !== undefined && (
        <div style={styles.Canvas} 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        >
          <img style={styles.font} src={pokemon.sprites.front_default}></img>
          <h5 style={styles.font}>{pokemon.name}</h5>
          <p style={styles.font}>
            {pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}
          </p>
          <p style={styles.font}>type: {pokemon.types[0].type.name}</p>
        </div>
      )}
    </>
  );
};
const styles = {
  Canvas: {
    borderColor: "#272121",
    backgroundColor: "#443737",
    margin: "5px",
    padding: "5px",

    minWidth: "150px",
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
    backgroundColor: "#272121",

    color: "#387c6d",
    margin: "5px",
    textAllign: "left",
  },
};

export default PokemonCard;

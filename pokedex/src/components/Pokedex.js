import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { useTrail, config, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";

const Pokedex = () => {
  const [pokemondata, setpokemondata] = useState();
  const [state, setState] = useState(true);

  //adjust the first argumetn of useTrail to edit the amount
  //of pokemon loadded
  const trail = useTrail(20, {
    config,
    from: { opacity: 0, x: 20 },
    to: { opacity: state ? 1 : 0, x: state ? 20 : 10 },
  });
  useEffect(() => {
    fetch("/getpokemon")
      .then((response) => response.json())
      .then((data) => setpokemondata(data))
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      {pokemondata !== undefined && (
        <div style={styles.wrapper}>
          {trail.map(({ x, ...otherProps }, i) => (
            <animated.div
              key={pokemondata[i]}
              style={{
                ...otherProps,
                transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
                display: "flex",
                flexWrap: "wrap",
              }}
              className="trails-text"
            >
              <PokemonCard pokemon={pokemondata[i]} />
            </animated.div>
          ))}
        </div>
      )}
    </>
  );
};

const styles = {
  wrapper: { 
      display: "flex", 
      flexWrap: "wrap", 
      maxWidth: "50%" 
    },
};

export default Pokedex;

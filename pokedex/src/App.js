import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import { useSpring, animated, config, useTrail } from "react-spring";

//https://colorhunt.co/palette/158462
function App() {
  const [pokemon, setpokemon] = useState();
  const [pokemondata, setpokemondata] = useState();
  const [state, setState] = useState(true);

  const props = useSpring({ config: config.default });
  const trail = useTrail(10, {
    config,
    from: { opacity: 0, x: 20 },
    to: { opacity: state ? 1 : 0, x: state ? 20 : 10 },
  });
  useEffect(() => {
    fetch("/getpokemon")
      .then((response) => response.json())
      .then((data) => setpokemondata(data))
      .then((data) => console.log(data));

    /*
      .then((data) => {
        //only get the first 10 pokemon to take it easy on the api
        //map over the array and return a pokemonCard component
        var items = data.slice(0, 10).map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        });
        setpokemon(items);
      });*/
  }, []);
  document.body.style.backgroundColor = "#343f56";

  return (
    <div>
      <Header></Header>
      {pokemondata !== undefined && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon !== undefined && pokemon}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BattleZone from "./components/BattleZone";

import PokemonCard from "./components/PokemonCard";
import { useSpring, animated, config, useTrail } from "react-spring";

//https://color-hex.org/color-palettes/137
function App() {
  const [pokemon, setpokemon] = useState();
  const [pokemondata, setpokemondata] = useState();
  const [state, setState] = useState(true);

  const props = useSpring({ config: config.default });
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
  document.body.style.backgroundColor = "	#3d7dca";

  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex"}}>
      {pokemondata !== undefined && (
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "50%", }}>

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
      <div style={{ width: "50%", flexWrap: "wrap" }}>
        <BattleZone style={{zIndex:'1'}}/>
      </div>      
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon !== undefined && pokemon}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { DropTarget } from "react-drag-drop-container";
import PokemonCard from "./PokemonCard";
import Battle from "./Battle";

import { useSpring, animated as a } from "react-spring";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BattleZone = () => {
  const [pokemon, setpokemon] = useState();
  const [pokemon2, setpokemon2] = useState();
  const [winner, setwinner] = useState();
  const [flipped, set] = useState(false);

  //flip animation
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  //calculate the winner by selecting a random attack 1 by 1 and return the winner
  const getBattleOutcome = async () => {
    //check if poke 1 and 2 are the same or undefined
    if (pokemon === pokemon2) {
      alert("please select 2 different pokemon");
    }
    //2 pokemon selected they can fight now
    else if (pokemon && pokemon2 !== undefined) {
      let winner = await Battle(pokemon, pokemon2);
      console.log(winner);
      setwinner(winner);
      set((state) => !state);
    }
    //1 of the pokemon is undefined
    else {
      alert("please select another pokemon");
    }
  };

  //reset the dragtargets
  const resetBattle = async () => {
    console.log("game reset");
    setwinner(undefined);
    setpokemon(undefined);
    setpokemon2(undefined);

    set(false);
  };

  //set the state with a pokemon object
  //so it will render when a pokemon is dropped in the droptarget
  const renderPokemon = (DropTarget) => {
    setpokemon(DropTarget.dragData);
  };
  const renderPokemon2 = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon2(DropTarget.dragData);
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <a.div
          hidden={flipped}
          style={
            (styles.Canvas,
            { opacity: opacity.interpolate((o) => 1 - o), transform })
          }
        >
          <div style={styles.Canvas}>
            <h1 style={styles.header}> Battle</h1>
            <div style={{ display: "flex" }}>
              <DropTarget targetKey="foo" onHit={renderPokemon}>
                {pokemon !== undefined ? (
                  <PokemonCard pokemon={pokemon} />
                ) : (
                  <div style={styles.dragDiv}>
                    <h6 style={styles.header}>Drop something in me</h6>
                  </div>
                )}
              </DropTarget>
              <h2 style={styles.header}>V.S.</h2>
              <DropTarget targetKey="foo" onHit={renderPokemon2}>
                {pokemon2 !== undefined ? (
                  <PokemonCard pokemon={pokemon2} />
                ) : (
                  <div style={styles.dragDiv}>
                    <h6 style={styles.header}>Drop something in me</h6>
                  </div>
                )}
              </DropTarget>
            </div>
            <Button
              onClick={getBattleOutcome}
              variant="danger"
              style={{ margin: "5px" }}
            >
              Battle!
            </Button>
            <Button onClick={resetBattle} variant="success">
              reset
            </Button>
          </div>
        </a.div>

        <a.div
          hidden={!flipped}
          style={
            (styles.Canvas,
            {
              opacity,
              transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            })
          }
        >
          {winner !== undefined && (
            <>
              <div style={styles.Canvas}>
                <h1 style={styles.header}> Winner!</h1>
                <PokemonCard pokemon={winner} />
                <Button
                  onClick={resetBattle}
                  variant="success"
                  style={{ margin: "5px" }}
                >
                  reset
                </Button>
              </div>
            </>
          )}
        </a.div>
      </div>
    </>
  );
};

const styles = {
  header: {
    color: "#ffcb05",
    padding:'5px'
  },
  headerTitle: {
    color: "#387c6d",
    display: "absolute",
    margin: "0",
  },
  dragDiv: {
    color: "#387c6d",
    height: "200px",
    width: "200px",
    backgroundColor: "#003a70",
    borderRadius: "10px",
    alignItems: "center",
    textAllign: "center",
    display: "flex",
    justifyContent: "center",
  },
  Canvas: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: `5px solid #003a70`,
    margin: "5px",
  },
};

export default BattleZone;

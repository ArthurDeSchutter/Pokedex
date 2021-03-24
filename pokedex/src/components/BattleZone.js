import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
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

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const getBattleOutcome = async () => {
    if (pokemon && pokemon2 !== undefined) {
      let winner = await Battle(pokemon, pokemon2);
      console.log(winner);
      setwinner(winner);
      set((state) => !state);
    } else {
      alert("please select 2 pokemon")
    }
  };
  const resetBattle = async () => {
    console.log('game reset');
    setwinner(undefined);
    setpokemon(undefined);
    setpokemon2(undefined)

    set((state) => !state);
  };

  const renderPokemon = (DropTarget) => {
    setpokemon(DropTarget.dragData);
  };
  const renderPokemon2 = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon2(DropTarget.dragData);
  };

  return (
    <>
      <div>
        <a.div
          hidden={flipped}
          style={
            (styles.Canvas,
            { opacity: opacity.interpolate((o) => 1 - o), transform })
          }
        >
          <h1 style={styles.header}> Battle</h1>
          <div style={{ display: "flex" }}>
            <DropTarget targetKey="foo" onHit={renderPokemon}>
              {pokemon !== undefined ? (
                <PokemonCard pokemon={pokemon} />
              ) : (
                <div style={styles.dragDiv}>
                  <p style={styles.header}>Drop something in me</p>
                </div>
              )}
            </DropTarget>
            <h2 style={styles.header}>V.S.</h2>
            <DropTarget targetKey="foo" onHit={renderPokemon2}>
              {pokemon2 !== undefined ? (
                <PokemonCard pokemon={pokemon2} />
              ) : (
                <div style={styles.dragDiv}>
                  <p style={styles.header}>Drop something in me</p>
                </div>
              )}
            </DropTarget>
          </div>
          <Button onClick={getBattleOutcome} variant="danger">
            Battle!
          </Button>
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
              <Button onClick={resetBattle} variant="success">
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

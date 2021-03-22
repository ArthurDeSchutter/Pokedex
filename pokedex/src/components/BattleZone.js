import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import PokemonCard from "./PokemonCard";
import Battle from "./Battle";

import { useSpring, animated, useTransition } from "react-spring";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BattleZone = () => {
  const [pokemon, setpokemon] = useState();
  const [pokemon2, setpokemon2] = useState();

  const renderPokemon = (DropTarget) => {
    setpokemon(DropTarget.dragData);
  };
  const renderPokemon2 = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon2(DropTarget.dragData);
  };

  return (
    <>
    <div style={styles.Canvas}>
      <h1 style={styles.header}> Battle</h1>
      <div style={{ display: "flex" }}>
        <DropTarget targetKey="foo" onHit={renderPokemon}>
          {pokemon !== undefined ? (

            <PokemonCard pokemon={pokemon} />
          ) : (
            <div style={styles.dragDiv}>
              <p  style={styles.header}>Drop something in me</p>
            </div>
          )}
        </DropTarget>
        <h2  style={styles.header}>V.S.</h2>
        <DropTarget targetKey="foo" onHit={renderPokemon2}>
          {pokemon2 !== undefined ? (
            <PokemonCard pokemon={pokemon2} />
          ) : (
            <div style={styles.dragDiv}>
              <p  style={styles.header}>Drop something in me</p>
            </div>
          )}
        </DropTarget>

      </div>
      <Button onClick={() => Battle(pokemon,pokemon2)}variant="danger">Battle!</Button>{' '}
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
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: "10px",
  },

};

export default BattleZone;

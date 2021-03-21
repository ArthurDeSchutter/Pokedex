import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import PokemonCard from "./PokemonCard";

const BattleZone = () => {
  const [pokemon, setpokemon] = useState();
  const [pokemon2, setpokemon2] = useState();

  const renderPokemon = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon(DropTarget.dragData);
  };
  const renderPokemon2 = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon2(DropTarget.dragData);
  };

  return (
    <div>
      <h1> Battle</h1>
      <DropTarget targetKey="foo" onHit={renderPokemon}>
        {pokemon !== undefined ? (
          <PokemonCard pokemon={pokemon} />
        ) : (
          <div style={styles.dragDiv}><p>Drop something in me</p></div>
        )}
      </DropTarget>
      <DropTarget targetKey="foo" onHit={renderPokemon2}>
        {pokemon2 !== undefined ? (
          <PokemonCard pokemon={pokemon2} />
        ) : (
          <div style={styles.dragDiv}><p>Drop something in me</p></div>
        )}
      </DropTarget>

    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#e9896a",
    display: "absolute",
    margin: "20",
  },
  headerTitle: {
    color: "#387c6d",
    display: "absolute",
    margin: "0",
  },
  dragDiv: {
    color: "#387c6d",
    height:'200px',
    width:'200px',
    backgroundColor: "#443737",
    borderRadius: "10px",
    alignItems: "center",
    textAllign: "center",
    display:'flex',
    justifyContent: 'center',

  },

};

export default BattleZone;

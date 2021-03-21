import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import PokemonCard from "./PokemonCard";

const BattleZone = () => {
  const [pokemon, setpokemon] = useState();

  const renderPokemon = (DropTarget) => {
    console.log(DropTarget.dragData);
    setpokemon(DropTarget.dragData);
  };
  return (
    <div>
      <h1> Battle</h1>
      <DropTarget targetKey="foo" onHit={renderPokemon}>
        {pokemon !== undefined ? (
          <PokemonCard pokemon={pokemon} />
        ) : (
          <p>Drop something on me</p>
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
};

export default BattleZone;

import React from "react";
import Header from "./components/Header";
import BattleZone from "./components/BattleZone";
import Pokedex from "./components/Pokedex";


//https://color-hex.org/color-palettes/137
function App() {
  document.body.style.backgroundColor = "	#3d7dca";
  return (
    <div>
      <Header></Header>
      <div style={styles.PokedexStyle}>
        <Pokedex />
        <div style={styles.BattleZoneStyle}>
          <BattleZone style={{ zIndex: "1" }} />
        </div>
      </div>
    </div>
  );
}
const styles = {
  BattleZoneStyle: {
    width: "50%",
    flexWrap: "wrap",
  },
  PokedexStyle: {
    display: "flex" 
  },

};

export default App;

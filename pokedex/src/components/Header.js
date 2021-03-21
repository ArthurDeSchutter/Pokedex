import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.headerTitle}> Pokedex</h1>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#003a70",
    display: "absolute",
    margin: "20"
  },
  headerTitle: {
    color: "#ffcb05",
    display: "absolute",
    margin: "0"
  },

};

export default Header;

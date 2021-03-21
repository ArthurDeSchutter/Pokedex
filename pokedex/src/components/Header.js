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
    backgroundColor: "#e9896a",
    display: "absolute",
    margin: "20"
  },
  headerTitle: {
    color: "#387c6d",
    display: "absolute",
    margin: "0"
  },

};

export default Header;

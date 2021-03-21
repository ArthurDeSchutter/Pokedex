const express = require("express");
const app = express();
const path = require("path");
var Pokedex = require("pokedex-promise-v2");
app.use(express.static(path.join(__dirname, "pokedex/build")));

//app.use(express.static(path.join(__dirname, "build")));

var P = new Pokedex();

app.get("/getpokemon", (req, res) => {
  P.getPokemonsList().then(function (response) {
    console.log(response.results);
    return res.json(response.results);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
});
app.get("/getpokemon/:id", (req, res) => {
  console.log(req.params.id);

  P.getPokemonByName(req.params.id)
    .then(function (response) {
      console.log(response);
      return res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`app listening on http://localhost:${PORT}`);

var express = require("express");
var router = express.Router();

var lostAndFound = require("../data/lostAndFound.json");
var pet = require("../data/pet.json");

// GET Ver listado de lost and founds addoptions
router.get("/lostandfound", function(req, res, next) {
  res.render("lostAndFound", {
    title: "Lista de perdidos, encontrados y adopciones",
    lostAndFound: lostAndFound
  });
});

// GET ver listado de lost and found filtrados
router.get("/", function(req, res, next) {
  var lostfound = lostAndFound.find(
    lf => lf.id.toString() === req.query.lostandfound_id
  );

  var filteredLostAndFound = pet.filter(
    p => p.lostandfound_id.toString() === req.query.lostandfound_id
  );

  res.render("pets", {
    title: "Lista de Perdidos encontrados y adopciones",
    pets: filteredLostAndFound,
    lostAndFound: lostfound
  });
});

/* GET Ver un pet. */
router.get("/show-pet", function(req, res, next) {
  var pets = pet.find({});
  var pet = pets.find(c => c.name === req.query.name);

  res.render("show-pet", {
    name: req.query.name,
    pet: pet
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var monk = require("monk");

var url = "localhost:27017/bahiamascotas";
var db = monk(url);

// var stores = require("../data/stores.json");
// var categories = require("../data/categories.json");

/* GET Listado de categorias. */
router.get("/categorias", async (req, res, next) => {
  var categories = await db.get("categories").find();
  res.render("categories", {
    categories: categories
  });
});

/* GET listado filtrado por categoria. */
router.get("/", async (req, res, next) => {
  var categories = await db.get("categories").find();

  var stores = await db.get("stores").find();

  var category = categories.find(
    c => c.id.toString() === req.query.category_id
  );

  var filteredStores = stores.filter(
    s => s.category_id.toString() === req.query.category_id
  );
  res.render("stores", {
    title: "Lista de comercios",
    stores: filteredStores,
    category: category
  });
});

/* GET Ver un comercio. */
router.get("/show", async (req, res, next) => {
  var stores = await db.get("stores").find();

  var store = stores.find(c => c.name === req.query.name);

  res.render("show", {
    name: req.query.name,
    store: store
  });
});

module.exports = router;

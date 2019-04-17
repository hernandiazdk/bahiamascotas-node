var express = require("express");
var router = express.Router();
var storeModel = mongoose.model("stores", storeSchema);

var stores = require("../data/stores.json");
var categories = require("../data/categories.json");

/* GET Listado de categorias. */
router.get("/categorias", function(req, res, next) {
  res.render("categories", {
    categories: categories
  });
});

/* GET listado filtrado por categoria. */
router.get("/", function(req, res, next) {
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
router.get("/show", function(req, res, next) {
  var stores = db.stores.find({});
  var store = stores.find(c => c.name === req.query.name);

  res.render("show", {
    name: req.query.name,
    store: store
  });
});

module.exports = router;

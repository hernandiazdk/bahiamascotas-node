var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var comercio1 = {
    name: "Vet1",
    address: "Bermudez 111"
  };

e  res.render("comercios", {
    title: "lala",
    comercio: comercio1
  });
});

module.exports = router;

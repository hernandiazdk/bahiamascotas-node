var mongoose = requiere("mongoose");
var schema = mongoose.schema;

var storeSchema = new schema({
  name: String,
  address: String,
  category_id: Number
});

mongoose.model("stores", storeSchema);

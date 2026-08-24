const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({ 
  houseId : {
  type: mongoose.Schema.Types.ObjectId,
  ref:'Home',
  required : true,
  Unique: true
}
});

module.exports = mongoose.model('Favourites', favouriteSchema);


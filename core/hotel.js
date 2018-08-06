var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HotelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [String],
});
module.exports = mongoose.model('hotels', HotelSchema);
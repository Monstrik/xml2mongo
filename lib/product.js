/**
 * Created by alexander on 4/13/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    id: Number,
    name: String,
    SKU: String,
    manufacturer: String,
    currency: String,
    price: Number,
    created_at: Date,
    updated_at: Date

});

var User = mongoose.model('Product', productSchema);

module.exports = User;
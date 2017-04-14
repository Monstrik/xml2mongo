/**
 * Created by alexander on 4/13/17.
 */
var Product = require('./product');

exports = module.exports = {};


exports.recordToProduct = function (rec, count) {
    var a=rec.children;
    return new Product({
        id: count,
        name: getTextValue('name', a),
        SKU: getTextValue('sku', a),
        manufacturer: getTextValue('manufacturer', a),
        price: getTextValue('price', a),
        currency: getTextValue('currency', a),
        created_at: getTextValue('lastupdated', a),
        updated_at: getTextValue('lastupdated', a)
    });
};


exports.recordToItem = function (rec, count) {
    var item = {};
    var a=rec.children;
    item.id = count;
    item.SKU = getTextValue('sku', a);
    item.name = getTextValue('name', a);
    item.manufacturer = getTextValue('manufacturer', a);
    item.price = getTextValue('price', a);
    item.currency = getTextValue('currency', a);
    item.updated_at = item.created_at = getTextValue('lastupdated', a);
    return item;
};


var getTextValue = function (tagKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].tag === tagKey) {
            return myArray[i].text;
        }
    }
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema ({
    item: {type: String, required: true},
    amount: {type: Number, required: true},
    quantity: {type: Number, default: 1, required: true},
    completed: {type: Boolean, default: false}
});

module.exports = mongoose.model('shoppingList', ShoppingListSchema)
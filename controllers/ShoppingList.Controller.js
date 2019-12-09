const ShoppingList = require('../models/ShoppingList.Model')

module.exports = {
    create: (req, res) => {
        let listItem = new ShoppingList( {
            item: req.body.item,
            amount: req.body.amount,
            completed: req.body.completed
        });
        listItem.save() 
        .then(result => {
            res.json({success: true, result: result});
        })
        .catch(err => {
            res.json({success: false, result: err})
        })
    }
}
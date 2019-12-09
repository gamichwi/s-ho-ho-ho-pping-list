const ShoppingList = require("../models/ShoppingList.Model");

module.exports = {
  //Create a list item
  create: (req, res) => {
    let listItem = new ShoppingList({
      item: req.body.item,
      amount: req.body.amount,
      completed: req.body.completed
    });
    listItem
      .save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },

  //Read the list item
  read: (req, res) => {
    ShoppingList.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "Nothing found." });

        res.json({ sucess: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  },

  //Update the list item
  update: (req, res) => {
    ShoppingList.update({ _id: req.body._id }, req.body).then(listItem => {
      if (!listItem)
        res.json({ success: false, result: "List item does not exist" });

      res.json(listItem);
    });
  },

  //Delete the list item
  delete: (req, res) => {
      ShoppingList.remove({ _id: req.body._id})
      .then(result => {
          res.json({success: true, result: result});
      })
      .catch(err => res.json({ success: false, result: err }));
  }
};

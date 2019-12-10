const express = require('express');
const mongoose = require('mongoose');
const app = express ();

//Database
mongoose.connect('mongodb://localhost/shoppingList', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('Connected to database.'))
    .catch(err => console.error(err));

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Controller
const ShoppingList = require ('./controllers/ShoppingList.Controller')
const ShoppingListController = new ShoppingList();
//Routes

//Homepage
app.get('/', (req, res) => {
    res.send('You have reached the Shopping List homepage');
  });
//Create route  
app.post('/api/shoppingList/create', ShoppingListController.create);
//Read route
app.get('/api/shoppingList/read', ShoppingListController.read);
//Update route
app.put('/api/shoppingList/update', ShoppingListController.update);
//Delete route
app.delete('/api/shoppingList/delete', ShoppingListController.delete);


//Start server
app.listen(4000, () => console.log('Server has started.'))
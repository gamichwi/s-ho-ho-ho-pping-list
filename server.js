const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const app = express ();
const bodyParser = require('body-parser')

//Database
mongoose.connect('mongodb://localhost/shoppingList', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('Connected to database.'))
    .catch(err => console.error(err));

//Middleware
app.use(bodyParser.json());

//Controller
const ShoppingList = require ('./controllers/ShoppingList.Controller')

//Routes
//Homepage (TODO... FIX THIS!!!)
Router.get('/', (req, res) => {
    res.send('You have reached the Shopping List homepage');
  });
//Create route  
app.post('/api/shoppingList/create', ShoppingList.create);
//Read route
app.get('/api/shoppingList/read', ShoppingList.read);
//Update route
app.put('/api/shoppingList/update', ShoppingList.update);
//Delete route
app.delete('/api/shoppingList/delete', ShoppingList.delete);


//Start server
app.listen(4000, () => console.log('Server has started.'))
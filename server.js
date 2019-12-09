const express = require('express');
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
app.post('/api/shoppingList/create', ShoppingList.create);

//Start server
app.listen(4000, () => console.log('Server has started.'))
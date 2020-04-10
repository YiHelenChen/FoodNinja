const express = require('express');

// add our router
const ingredientRouter = express.Router();

// require the ingredient controller
const ingredientController = require('../controllers/ingredientController.js');

// handle the GET request on root of ingredient-management path,
// i.e. get all ingredients
ingredientRouter.get('/', (req, res) => ingredientController.getAllIngredients(req, res));

// export the router
module.exports = ingredientRouter;
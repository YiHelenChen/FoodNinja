// provide the controller a link to the ingredient model
var ingredients = require('../models/ingredient');

// Function to handle a request to get all ingredients
const getAllIngredients = (req, res) => {
    res.send(ingredients); // return the list of authors
};

// Remember to export the callbacks
module.exports = {
    getAllIngredients,
};
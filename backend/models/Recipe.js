const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredient: {
    type: String,
    required: true
  },
  instruction: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
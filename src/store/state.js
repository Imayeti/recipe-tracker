import randomRecipes from '../data/recipes'

export default {
  recipes: {
    randomRecipes: randomRecipes.recipes,
    savedBreakfastRecipes: [],
    savedLunchRecipes: [],
    savedDinnerRecipes: [],
    savedUnassignedRecipes: [],
  },
  shoppingList: {},
  tags: {
    "gluten free" : false,
    "vegetarian" : false, 
    "dairy free" : false,
  },
}
    
export default {
    addRecipe: ({commit}, recipe) => {
      commit('appendRecipe', recipe)
    },
    deleteRecipe: ({commit}, recipe) => {
      commit('removeRecipe', recipe)
    },
    addIngredient: ({commit}, ingredient) => {
      commit('appendIngredient', ingredient)
    },
    deleteIngredient: ({commit}, ingredient) => {
      console.log(ingredient);
      commit('removeIngredient', ingredient)
    },
    getRandomRecipes: ({commit}) => {
        let randomRecipes = [];
        fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=f37746df99364c5496ea254a3839e487')
        .then(response => response.json())
        .then(
          data => {
            randomRecipes = data.recipes;
            commit('addRandomRecipes', randomRecipes)
          }
        );
        
    },
}
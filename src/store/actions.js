export default {
    addRecipe: ({commit}, recipe) => {
      commit('appendRecipe', recipe)
    },
    deleteRecipe: ({commit}, recipe) => {
      commit('removeRecipe', recipe)
    },
    addIngredient: ({commit}, recipeAndIngredient) => {
      commit('appendIngredient', recipeAndIngredient)
    },
    deleteIngredient: ({commit}, recipeAndIngredient) => {
      console.log('recipeAndIngredientin deletelte action', recipeAndIngredient);
      commit('removeIngredient', recipeAndIngredient)
    },
    getRandomRecipes: (state) => {
        let randomRecipes = [];
        var keys = Object.keys(state.state.tags);
        var FilteredTags = keys.filter(function(key) {
            return state.state.tags[key]
        });
        let tags = FilteredTags.join(",");
        console.log(tags);
        fetch(`https://api.spoonacular.com/recipes/random?number=5&tags=${tags}&apiKey=f37746df99364c5496ea254a3839e487`)
        .then(response => response.json())
        .then(
          data => {
            randomRecipes = data.recipes;
            state.commit('addRandomRecipes', randomRecipes)
          }
        );
        
    },
}
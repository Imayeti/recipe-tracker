export default {
    appendRecipe: (state, recipe) => {
      if(!state.savedRecipes.find((x) => x.id === recipe.id)){
        state.savedRecipes.push(recipe);
      } 
    },
    removeRecipe: (state, recipe) => {
        const recipeToDelete = state.savedRecipes.find((x) => x.id === recipe.id);
        const index = state.savedRecipes.indexOf(recipeToDelete);
        state.savedRecipes.splice(index, 1);
    },  
    addRandomRecipes: (state, randomRecipes) => {
        state.randomRecipes = randomRecipes;
    }
}
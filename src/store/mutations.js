function findIndexOfRecipe(stateRecipeType, recipe) {
  const recipeToDelete = stateRecipeType.find((x) => x.id === recipe.id);
  const index = stateRecipeType.indexOf(recipeToDelete);
  return index;
}


export default {
    appendRecipe: (state, recipe) => {
      if(!state.recipes.savedRecipes.find((x) => x.id === recipe.id)){
        state.recipes.savedRecipes.push(recipe);
      } 
    },
    removeRecipe: (state, recipe) => {
        if (recipe.category === 'unassigned'){
          let index = findIndexOfRecipe(state.recipes.savedRecipes, recipe);
          state.recipes.savedRecipes.splice(index, 1);
        }else if (recipe.category === 'breakfast'){
          let index = findIndexOfRecipe(state.recipes.savedBreakfastRecipes, recipe);
          state.recipes.savedBreakfastRecipes.splice(index, 1);
        }else if (recipe.category === 'lunch'){
          let index = findIndexOfRecipe(state.recipes.savedLunchRecipes, recipe);
          state.recipes.savedLunchRecipes.splice(index, 1);
        }else if (recipe.category === 'dinner'){
          let index = findIndexOfRecipe(state.recipes.savedDinnerRecipes, recipe);
          state.recipes.savedDinnerRecipes.splice(index, 1);
        }
       
    },  
    addRandomRecipes: (state, randomRecipes) => {
      randomRecipes.map((recipe) => recipe.category = 'unassigned');
      state.recipes.randomRecipes = randomRecipes;
    },
    updateSavedRecipesList: (state, savedRecipes) => {
      savedRecipes.map((recipe) => recipe.category = 'unassigned');
      console.log('savedRecipes',savedRecipes);

      state.recipes.savedRecipes = savedRecipes;
    }, 
    updateSavedBreakfastRecipesList: (state, savedBreakfastRecipes) => {
      console.log('updating breafast list');
      savedBreakfastRecipes.map((recipe) => recipe.category = 'breakfast');
      state.recipes.savedBreakfastRecipes = savedBreakfastRecipes;
    },  
    updateSavedLunchRecipesList: (state, savedLunchRecipes) => {
      console.log('updating lunch list');
      savedLunchRecipes.map((recipe) => recipe.category = 'lunch');
      state.recipes.savedLunchRecipes = savedLunchRecipes;
    },  
    updateSavedDinnerRecipesList: (state, savedDinnerRecipes) => {
      console.log('updating Dinner list');
      savedDinnerRecipes.map((recipe) => recipe.category = 'dinner');
      state.recipes.savedDinnerRecipes = savedDinnerRecipes;
    },
}
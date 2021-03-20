function findIndexOfRecipe(stateRecipeType, recipe) {
  const recipeToDelete = stateRecipeType.find((x) => x.id === recipe.id);
  const index = stateRecipeType.indexOf(recipeToDelete);
  return index;
}


export default {
    appendRecipe: (state, recipe) => {
      if(!state.savedRecipes.find((x) => x.id === recipe.id)){
        state.savedRecipes.push(recipe);
      } 
    },
    removeRecipe: (state, recipe) => {
        if (recipe.category === 'unassigned'){
          let index = findIndexOfRecipe(state.savedRecipes, recipe);
          state.savedRecipes.splice(index, 1);
        }else if (recipe.category === 'breakfast'){
          let index = findIndexOfRecipe(state.savedBreakfastRecipes, recipe);
          state.savedBreakfastRecipes.splice(index, 1);
        }else if (recipe.category === 'lunch'){
          let index = findIndexOfRecipe(state.savedLunchRecipes, recipe);
          state.savedLunchRecipes.splice(index, 1);
        }else if (recipe.category === 'dinner'){
          let index = findIndexOfRecipe(state.savedDinnerRecipes, recipe);
          state.savedDinnerRecipes.splice(index, 1);
        }
       
    },  
    addRandomRecipes: (state, randomRecipes) => {
      randomRecipes.map((recipe) => recipe.category = 'unassigned');
      state.randomRecipes = randomRecipes;
    },
    updateSavedRecipesList: (state, savedRecipes) => {
      savedRecipes.map((recipe) => recipe.category = 'unassigned');
      console.log('savedRecipes',savedRecipes);

      state.savedRecipes = savedRecipes;
    }, 
    updateSavedBreakfastRecipesList: (state, savedBreakfastRecipes) => {
      console.log('updating breafast list');
      savedBreakfastRecipes.map((recipe) => recipe.category = 'breakfast');
      state.savedBreakfastRecipes = savedBreakfastRecipes;
    },  
    updateSavedLunchRecipesList: (state, savedLunchRecipes) => {
      console.log('updating lunch list');
      savedLunchRecipes.map((recipe) => recipe.category = 'lunch');
      state.savedLunchRecipes = savedLunchRecipes;
    },  
    updateSavedDinnerRecipesList: (state, savedDinnerRecipes) => {
      console.log('updating Dinner list');
      savedDinnerRecipes.map((recipe) => recipe.category = 'dinner');
      state.savedDinnerRecipes = savedDinnerRecipes;
    },
}
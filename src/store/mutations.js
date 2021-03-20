function findIndexOfItem(stateItemListName, recipe) {
  const recipeToDelete = stateItemListName.find((x) => x.id === recipe.id);
  const index = stateItemListName.indexOf(recipeToDelete);
  return index;
}



export default {
    appendIngredient: (state, ingredient) => {
      state.ingredientsList.push(ingredient);
    },   
    removeIngredient: (state, ingredient) => {
      let index = findIndexOfItem(state.ingredientsList, ingredient);
      state.ingredientsList.splice(index, 1);
    },
    appendRecipe: (state, recipe) => {
      let recipeSearchResult;
      //make sure recipe doesn't already exist in one of the save lists, to prevent duplicates
      Object.keys(state.recipes).forEach(key => {
        if(state.recipes[key].length && key !== 'randomRecipes'){
          recipeSearchResult = state.recipes[key].find((x) => x.id === parseInt(recipe.id));
        }
      });
      if (!recipeSearchResult) {
        recipe.saved = true;
        recipe.category = 'unassigned';
        state.recipes.savedRecipes.push(recipe);
      }
    },
    removeRecipe: (state, recipe) => {
        if (recipe.category === 'unassigned'){
          let index = findIndexOfItem(state.recipes.savedRecipes, recipe);
          state.recipes.savedRecipes.splice(index, 1);
        }else if (recipe.category === 'breakfast'){
          let index = findIndexOfItem(state.recipes.savedBreakfastRecipes, recipe);
          state.recipes.savedBreakfastRecipes.splice(index, 1);
        }else if (recipe.category === 'lunch'){
          let index = findIndexOfItem(state.recipes.savedLunchRecipes, recipe);
          state.recipes.savedLunchRecipes.splice(index, 1);
        }else if (recipe.category === 'dinner'){
          let index = findIndexOfItem(state.recipes.savedDinnerRecipes, recipe);
          state.recipes.savedDinnerRecipes.splice(index, 1);
        }


        let randomRecipeIndex = findIndexOfItem(state.recipes.randomRecipes, recipe);
        console.log(randomRecipeIndex);
        //before trying to delete, make sure recipe exists in state.recipes.randomRecipes incase user refreshed random recipes
        if (randomRecipeIndex != -1){
          state.recipes.randomRecipes[randomRecipeIndex].saved = false;
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
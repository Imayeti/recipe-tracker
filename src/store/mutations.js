import Vue from 'vue';

function findIndexOfItem(stateItemListName, recipe) {
  const recipeToDelete = stateItemListName.find((x) => x.id === recipe.id);
  const index = stateItemListName.indexOf(recipeToDelete);
  return index;
}

export default {
  appendIngredient: (state, {ingredient, recipe}) => {
    // if ingredients from the recipe haven't been added yet, we create the array that we can push all ingredients to 
    if(!state.ingredientsList[recipe.title]) {
      //need to use Vue.set because we are adding a new key and without Vue.set it will not be reactive
      Vue.set(state.ingredientsList, recipe.title, [])
    }
    // make sure to only add it if it doens't exist to avoid duplicates
    if(findIndexOfItem(state.ingredientsList[recipe.title],ingredient) === -1) {
      state.ingredientsList[recipe.title].push(ingredient);
    }
    
  },   
  removeIngredient: (state, {ingredient, recipeName}) => {
    if(state.ingredientsList[recipeName]){
      let index = findIndexOfItem(state.ingredientsList[recipeName], ingredient);
      state.ingredientsList[recipeName].splice(index, 1);
    }
    // if recipeName is an empty array because all it's ingredients have been deleted, just delete it completely
    if (!state.ingredientsList[recipeName].length) {
      delete state.ingredientsList[recipeName];
    }
  },
  appendRecipe: (state, recipe) => {
    let recipeSearchResult;
    //make sure recipe doesn't already exist in one of the saved lists, to prevent duplicates
    Object.keys(state.recipes).forEach(key => {
      if(state.recipes[key].length && key !== 'randomRecipes'){
        recipeSearchResult = state.recipes[key].find((x) => x.id === parseInt(recipe.id));
      }
    });
    if (!recipeSearchResult) {
      recipe.saved = true;
      recipe.category = 'unassigned';
      state.recipes.savedUnassignedRecipes.push(recipe);
    }
  },
  removeRecipe: (state, recipe) => {
      // delete recipe from appropritate list
      if (recipe.category === 'unassigned'){
        let index = findIndexOfItem(state.recipes.savedUnassignedRecipes, recipe);
        state.recipes.savedUnassignedRecipes.splice(index, 1);
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
      //before trying to change the value of saved on the randomRecipe, make sure the recipe exists in state.recipes.randomRecipes incase user refreshed random recipes
      if (randomRecipeIndex != -1){
        state.recipes.randomRecipes[randomRecipeIndex].saved = false;
      }
  },  
  addRandomRecipes: (state, randomRecipes) => {
    randomRecipes.map((recipe) => recipe.category = 'unassigned');
    state.recipes.randomRecipes = randomRecipes;
  },
  updateSavedUnassignedRecipesList: (state, savedUnassignedRecipes) => {
    savedUnassignedRecipes.map((recipe) => recipe.category = 'unassigned');
    state.recipes.savedUnassignedRecipes = savedUnassignedRecipes;
  }, 
  updateSavedBreakfastRecipesList: (state, savedBreakfastRecipes) => {
    // console.log('updating breafast list');
    savedBreakfastRecipes.map((recipe) => recipe.category = 'breakfast');
    state.recipes.savedBreakfastRecipes = savedBreakfastRecipes;
  },  
  updateSavedLunchRecipesList: (state, savedLunchRecipes) => {
    // console.log('updating lunch list');
    savedLunchRecipes.map((recipe) => recipe.category = 'lunch');
    state.recipes.savedLunchRecipes = savedLunchRecipes;
  },  
  updateSavedDinnerRecipesList: (state, savedDinnerRecipes) => {
    // console.log('updating Dinner list');
    savedDinnerRecipes.map((recipe) => recipe.category = 'dinner');
    state.recipes.savedDinnerRecipes = savedDinnerRecipes;
  },
}
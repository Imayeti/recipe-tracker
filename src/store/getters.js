export default {
  recipesCount: (state) => {
    let totalCount = 0;
    Object.keys(state.recipes).forEach(key => {
      if (key != 'randomRecipes') {
        totalCount += state.recipes[key].length;  
      }
    });
    return totalCount;
  },
  ingredientsCount: (state) => {
    let totalCount = 0;
    Object.keys(state.ingredientsList).forEach(key => {
      totalCount += state.ingredientsList[key].length;  
    });
    return totalCount;
  },
}
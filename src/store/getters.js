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
    Object.keys(state.shoppingList).forEach(key => {
      totalCount += state.shoppingList[key].length;  
    });
    return totalCount;
  },
}
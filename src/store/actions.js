export default {
    addRecipe: ({commit}, recipe) => {
        commit('appendRecipe', recipe)
    },
    deleteRecipe: ({commit}, recipe) => {
      console.log(recipe);
        commit('removeRecipe', recipe)
    },
    getRandomRecipes: ({commit}) => {
        let randomRecipes = [];
        fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=f37746df99364c5496ea254a3839e487')
        .then(response => response.json())
        .then(
          data => {
            console.log('random recipe', data);
            randomRecipes = data.recipes;
            commit('addRandomRecipes', randomRecipes)
          }
        );
        
    },
}
<template>
  <div class="about container">
    <h1>{{recipe.title}}</h1>
    <img class="mb-4" :src="recipe.image" alt="">
    <p v-html="recipe.summary"></p>
    <div class="short-info">
      <p>Dairy Free: {{recipe.dairyFree ? 'Yes' : 'No'}}</p>
      <p>Gluten Free: {{recipe.glutenFree ? 'Yes' : 'No'}}</p>
      <p>Vegetarian: {{recipe.vegetarian ? 'Yes' : 'No'}}</p>
      <p>Health Score: {{recipe.healthScore}}</p>
    </div>
    <div class="lower-text">
      <h4>Ingredients</h4>
      <ol>
        <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="ingredient.id + index">
          <button class="add-button" @click="addIngredient({ingredient, recipe})">{{toggleAddButtonText(ingredient, recipe)}}</button>{{ingredient.original}} 
        </li>
      </ol>
      <h4 class="p-0">Instructions</h4>
      <p v-html="recipe.instructions"></p>
    </div>
    <SaveRecipeButton :recipe="recipe" />
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import SaveRecipeButton from '@/components/SaveRecipeButton.vue';

export default {
  name: 'Recipe',
  components: {
    SaveRecipeButton
  },
  computed: {
    ...mapState([
      'recipes',
      'shoppingList',
    ]),
    
  },
  data() {
    return {
      recipe: {},
    };
  },
  methods: {
    ...mapActions([
      'addIngredient'
    ]),
    toggleAddButtonText: function (buttonIngredient) {
      let ingredientSearchResult = false;
      // check if the ingredient has been added to the shopping list for this recipe specifically to decide what text to show on the button
      if(this.shoppingList[this.recipe.title]){
        ingredientSearchResult = this.shoppingList[this.recipe.title].find((x) => x.id === parseInt(buttonIngredient.id));
      }
      return ingredientSearchResult ? 'Added' : 'Add'
    }
  },
  created() {
    //we need to iterate over the recipes object in state to look through every item in each category to find the matching recipe by id so we can display it
    Object.values(this.recipes).forEach(category => {
      if(category && category.length){
        let recipeSearchResult = category.find((x) => x.id === parseInt(this.$route.params.id));
          if (recipeSearchResult) {
            this.recipe = recipeSearchResult;
        }
      }
    });
  },
};

</script>

<style scoped lang="scss">
.add-button {
  padding: 0 4px;
  box-shadow: none;
  margin: 5px;
}
ul {
  text-align: left;
}
li {
  display: block;
  list-style-type: disc;
}
h1 {
  margin-bottom: calc(15px + 1vw);
}
.lower-text {
  text-align: left;
  ol {
    padding-inline-start: calc(15px + 3vw);
  }
  h4 {
    padding-left: calc(15px + 3vw);
  }
}
.short-info {
  p {
    display: inline-block;
    padding: 10px;
    font-weight: bold;
  }
}

</style>
<template>
  <button v-if="!(this.$route.params.type === 'saved')" @click="addRecipeHandler(recipe)">{{toggleSaveRecipeButtonText()}}</button> 
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'SaveRecipeButton',
  props: {
    recipe: Object,
  },
  data() {
    return {
      buttonText: "Save Recipe"
    };
  },
  methods: {
    ...mapActions([
      'addRecipe',
    ]),
    addRecipeHandler(recipe) {
      this.addRecipe(recipe)
      this.toggleSaveRecipeButtonText();
    },
    toggleSaveRecipeButtonText() {
      let recipeSearchResult = false;
      Object.keys(this.recipes).forEach(key => {
        if(this.recipes[key].length && key !== 'randomRecipes'){
          recipeSearchResult = this.recipes[key].find((x) => x.id === parseInt(this.recipe.id));
        }
      });
      return recipeSearchResult ? 'Recipe Saved!' : 'Save Recipe'
    }
  },
  computed: {
    ...mapState([
      'recipes',
    ]),
  },
  mounted() {
    this.toggleSaveRecipeButtonText();
  }
};

</script>
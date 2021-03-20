<template>
  <button v-if="!(this.$route.params.type === 'saved')" @click="addRecipeHandler(recipe)">{{buttonText}}</button> 
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
      this.toggleButtonText();
    },
    toggleButtonText() {
      this.recipe.saved ? this.buttonText = "Recipe Saved!" : this.buttonText =  "Save Recipe" 
    }
  },
  computed: {
    ...mapState([
      'recipes',
    ]),
  },
  mounted() {
    this.toggleButtonText();
  }
};

</script>
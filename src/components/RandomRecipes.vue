<template>
    <div>
        <div class="random-recipe" v-for="recipe in randomRecipes" :key="recipe.title">
            <h2>{{recipe.title}}</h2> 
            <p><router-link :to="`/recipe/fresh/${recipe.id}`">View Full Recipe</router-link></p>
            <img :src="recipe.image" alt="">
            <p v-html="recipe.summary"></p>
            <SaveRecipeButton :recipe="recipe" />
        </div>
    </div>
</template>

<script>

import {  mapActions  } from 'vuex'
import SaveRecipeButton from '@/components/SaveRecipeButton.vue';

export default {
  name: 'RandomRecipes',
  components: {
      SaveRecipeButton
  },
  props: {
    randomRecipes: Array,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'addRecipe',
    ]),
  },
  mounted() {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .random-recipe {
        border-bottom: 1px solid rgb(216, 216, 216);
        padding-bottom: calc(30px + 2vw);
        padding-top: calc(15px + 1vw);
    }
</style>



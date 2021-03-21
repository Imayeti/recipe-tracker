<template>
  <div>
    <div class="main-board">
      <button @click="getRandomRecipes">Get Fresh Recipes!</button>
      <div class="big-hr"></div>
      <RandomRecipes :randomRecipes="recipes.randomRecipes" />
    </div>
  </div>
</template>

<script>

import { mapState, mapActions  } from 'vuex'
import RandomRecipes from '@/components/RandomRecipes.vue';

export default {
  name: 'MainBoard',
  components: {
    RandomRecipes,
  },
  computed: {
    ...mapState([
      'recipes',
    ])
  },
  methods: {
    ...mapActions([
      'addRecipe',
      'deleteRecipe',
      'getRandomRecipes',
    ]),
  },
};

</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>



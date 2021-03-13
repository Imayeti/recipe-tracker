<template>
  <div>
    <div class="container">
      <button @click="getRandomRecipes">Get Random Recipes</button>
      <RandomRecipes :randomRecipes="randomRecipes" />
    </div>
  </div>
</template>

<script>

import { mapState, mapActions  } from 'vuex'
import RandomRecipes from '@/components/RandomRecipes.vue';

export default {
  name: 'MainBoard',
  components: {
    RandomRecipes
  },
  computed: {
    ...mapState([
      'randomRecipes',
      'savedRecipes'
    ])
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'addRecipe',
      'deleteRecipe',
      'getRandomRecipes',
    ]),
  },
  beforeCreate(){
    
  },
  created() {
    // this.recipeIdCounter = this.savedRecipes !== [] ? this.savedRecipes.length + 1 : 1;
    // this.getRandomRecipes();
    // this.randomRecipes = this.$recipeObject.recipes;
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.container {

  max-width: 900px;
  margin: 0 auto;
  padding: calc(50px + 5vw)  calc(20px + 1vw);
}
img {
  width: 100%;
  max-width: 350px;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  border: none;
  color: white;
  font-weight: bold;
  font-size: calc(16px + .1vw);
  transition: ease all .2s;
  &:hover {
    background-color: #5dcb99;
    cursor: pointer;
  }
}
</style>



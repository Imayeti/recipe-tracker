<template>
  <div>

    <div class="main-board">
      <button @click="getRandomRecipes">Get Fresh Recipes!!</button>

      <div class="big-hr"></div>
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
    RandomRecipes,
  },
  computed: {
    ...mapState([
      'randomRecipes',
      'savedRecipes'
    ])
  },
  data() {
    return {
      myArray: [
        
        {
          name: 'hi',
          id:1
        },
        {
          name: 'hello',
          id:2
        },
         {
          name: 'wassup',
          id:3
        }
      ],
    };
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
.main-board {
  margin-top: calc(25px + 2vw);
}
</style>



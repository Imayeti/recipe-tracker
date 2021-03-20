<template>
  <div id="your-ingredients" class="container">
    <h1>Your Ingredients</h1>
    <div class="small-hr"></div>
    <ol>
      <li  v-for="ingredient in ingredientsList" :key="ingredient.original">
        {{ingredient.original}} <button class="delete-button" @click="deleteIngredient(ingredient)">X</button>
      </li>
    </ol>
  </div>
</template>

<script>
import {  mapActions, mapState } from 'vuex'

export default {
    computed: {
    ...mapState([
      'ingredientsList'
    ])
  },
  methods: {
    ...mapActions([
      'deleteIngredient'
    ])
  },
}
</script>

<style lang="scss" scoped>
ol {
  max-width: 500px;
  margin: calc(20px + 1vw) auto;
  text-align: left;
}
li {
  display: block;
}
</style>
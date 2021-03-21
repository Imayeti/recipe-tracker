<template>
  <div id="your-ingredients" class="container">
    <h1>Shopping List</h1>
    <div class="small-hr"></div>
    <div class="ingredients-list">
      <div v-for="(ingredients, recipeName) in shoppingList" :key="recipeName">
      <h4>{{recipeName}}</h4>
      <ol>
        <li v-for="(ingredient, index) in ingredients" :key="ingredient.id + index">
          <!-- {{index}} -->
          {{ingredient.original}}<button class="delete-button" @click="deleteIngredient({ingredient, recipeName})">X</button>
        </li>
      </ol>
    </div>
 
    </div>
   
  </div>
</template>

<script>
import {  mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'shoppingList'
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
.ingredients-list {
  max-width: 700px;
  margin: calc(20px + 1vw) auto;
}
ol {
  text-align: left;
}
li {
  display: block;
}
h4 {
  text-align: left;
}
</style>
<template>

  <div  class="list-card ">
    <h5 class="title pt-2">{{formattedTitle}}</h5>
    <draggable class="list" v-model="recipes" group="people">
      <div  
        v-for="recipe in recipes" 
        :key="recipe.id"
      >
        <div class="saved-recipe-inner">
          <span><i class="fas fa-expand-arrows-alt"></i></span>
          <router-link class="recipe-title" :to="`/recipe/saved/${recipe.id}`">{{recipe.title}}</router-link>
          <button class="delete-button" @click="deleteRecipe(recipe)">X</button>
        </div>
      </div>
    </draggable>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
import { mapActions  } from 'vuex'

export default {
  name: 'List',
  components: {
    draggable,
  },
  props: {
    title: String,
  },
  computed: {
    formattedTitle: function () {
      return this.title === 'Unassigned' ? 'Recently Saved' : this.title;
    },
    storeListName: function () {
      return `saved${this.title}Recipes`;
    },  
    updateMethodName: function ()  {
      return `updateSaved${this.title}RecipesList`;
    },
    recipes: {
      get() {
        return this.$store.state.recipes[this.storeListName]
      },
      set(value) {
        this.$store.commit(this.updateMethodName, value)
      }
    },
  },
  methods: {
    ...mapActions([
      'deleteRecipe'
    ]),
  },
}
</script>

<style lang="scss" scoped>

</style>
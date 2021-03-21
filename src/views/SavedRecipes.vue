<template>
  <div id="your-recipes" class="container">
    <h1>Your Recipes</h1>
    <div class="small-hr mb-4"></div>
    <div class="row">
      <div class="col-12 col-lg-4">
        <List title="Breakfast" />
      </div>
      <div class="col-12 col-lg-4">
        <List title="Lunch" />
      </div>
      <div class="col-12 col-lg-4">
        <List title="Dinner" />
      </div>
    </div>
    <div class="unassigned row mt-5">
      <div class="col-12">
        <List title="Unassigned" />
      </div>
    </div>
  </div>
</template>

<script>

import {  mapState, mapActions  } from 'vuex'
import List from '@/components/List.vue';

export default {
  name: 'SavedRecipes',
  components: {
      List,
  },
  computed: {
    ...mapState([
      'recipes',
    ]),
    savedUnassignedRecipes: {
      get() {
        return this.$store.state.recipes.savedUnassignedRecipes
      },
      set(value) {
        this.$store.commit('updateSavedUnassignedRecipesList', value)
      }
    },
    savedBreakfastRecipes: {
      get() {
        return this.$store.state.recipes.savedBreakfastRecipes
      },
      set(value) {
        this.$store.commit('updateSavedBreakfastRecipesList', value)
      }
    },
    savedLunchRecipes: {
      get() {
        return this.$store.state.recipes.savedLunchRecipes
      },
      set(value) {
        this.$store.commit('updateSavedLunchRecipesList', value)
      }
    },
    savedDinnerRecipes: {
      get() {
        return this.$store.state.recipes.savedDinnerRecipes
      },
      set(value) {
        this.$store.commit('updateSavedDinnerRecipesList', value)
      }
    },
  },
  methods: {
    ...mapActions([
      'addRecipe',
      'deleteRecipe'
    ]),
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

  #your-recipes {
    &.container {
      max-width: 100vw;
      padding: calc(80px + 5vw) calc(30px + 1vw);
    }
    .unassigned {
      .list {
        border: none;
        .saved-recipe-inner {
          font-size: calc(25px + .1vw);
          i {
            left: -2px; 
          }
        }
      }
    }
    .list {
      border-radius: 25px;
      border: 1px solid rgb(189, 189, 189);
      min-height: 50px;
      max-height: 400px;
      overflow-y: scroll;
      .saved-recipe-inner {
        font-size: calc(15px + .1vw);
        i {
          left: -2px; 
        }
      }
    }
    .saved-recipes {
      margin-top: calc(25px + 2vw) ;
    }
    .saved-recipe-inner {
      display: inline-block;
      font-size: calc(18px + .2vw);
      position: relative;
      transition: ease all .2s;
      padding: calc(5px + .4vw) 0;
      font-weight: bold;
      padding: calc(5px + .4vw);
      i {
        color: rgb(223, 223, 223);
        font-size: calc(10px + .4vw);
        position: relative;
        left: -5px; 
      }
      .recipe-title {
        padding: calc(5px + .2vw);
          &:hover {
            background-color: #dcffef;
        }
      }
    }
  }
  
</style>



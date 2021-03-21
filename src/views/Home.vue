<template>
  <div class="home container">
    <h1>Fresh Cooks</h1>
    <div class="small-hr"></div>
    <div class="filter-checkboxes">
      <div class="checkbox-container">
         <input v-model="glutenFree" type="checkbox" name="glutenfree" >
         <label for="glutenfree">Gluten Free</label><br>
      </div>
      <div class="checkbox-container">
        <input v-model="dairyFree" type="checkbox" name="dairyFree" >
        <label for="dairyFree">Dairy Free</label><br>
      </div>
      <div class="checkbox-container">
        <input v-model="vegetarian" type="checkbox" name="vegetarian" >
        <label for="vegetarian">Vegetarian</label><br>
      </div>
    </div>
    <MainBoard />
  </div>
</template>

<script>

// import { mapState } from 'vuex'
import MainBoard from '@/components/MainBoard.vue';

export default {
  name: 'home',
  components: {
    MainBoard,
  },
  computed: {
    glutenFree: {
      get() {
        return this.$store.state.tags["gluten free"]
      },
      set(value) {
        this.$store.commit('updateGlutenFreeTag', value)
      }
    },
    dairyFree: {
      get() {
        return this.$store.state.tags["dairy free"]
      },
      set(value) {
        this.$store.commit('updateDairyFreeTag', value)
      }
    },
    vegetarian: {
      get() {
        return this.$store.state.tags.vegetarian
      },
      set(value) {
        this.$store.commit('updateVegetarianTag', value)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .filter-checkboxes {
    margin: calc(25px + 2vw) 0 calc(12px + .5vw) ;
    .checkbox-container {
      margin: calc(10px + .2vw);
      display: inline-block;
    }
    label {
      margin-left: 5px;
    }
  }
</style>

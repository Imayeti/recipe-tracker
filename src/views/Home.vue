<template>
  <div class="home container">
      <h1>Fresh Recipes</h1>
      <div class="small-hr"></div>
      <MainBoard />
  </div>
</template>

<script>

import MainBoard from '@/components/MainBoard.vue';

export default {
  name: 'home',
  components: {
    MainBoard,
  },
};
</script>

<template>
  <div class="home">
    <keep-alive>  
      <MainBoard />
    </keep-alive>  
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

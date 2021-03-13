<template>
  <div class="home">
    <MainBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBoard from '@/components/MainBoard.vue';

export default {
  name: 'home',
  components: {
    MainBoard,
  },
};
</script>

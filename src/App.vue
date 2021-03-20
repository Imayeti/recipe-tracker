<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav--link" to="/">Home</router-link> 
      <router-link class="nav--link" to="/saved-recipes">Your Recipes
        <transition name="slide-fade" mode="out-in">
          <span :key="recipesCount">
            ({{recipesCount}})
          </span>
        </transition>
      </router-link> 
      <router-link class="nav--link" to="/ingredients">Shopping List 
        <transition name="slide-fade" mode="out-in">
          <span :key="ingredientsCount">
            ({{ingredientsCount}})
          </span>
        </transition>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {  mapGetters, mapActions  } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'getRandomRecipes',
    ]),
  },
  computed: {
    ...mapGetters([
      'recipesCount',
      'ingredientsCount',
    ])
  },
  created() {
    // this.getRandomRecipes();
  },
};

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    color: #129b9d;
    &:hover {
      color: #129b9d;
    }
  }
}

#nav {
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #129b9d;
  color: white;
  .nav--link {
    padding: 10px calc(10px + .3vw);
    font-size: 18px;
    letter-spacing: .7px;
    transition: ease all .2s !important;
  }
  a {
    transition: ease all .2s !important;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &.router-link-exact-active {
      color: #d1feff;
      text-decoration: underline;
    }
    &:hover {
      transition: ease all .2s !important;
      color: #d1feff;
      text-decoration: underline;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}

h1 {
  margin: 0;
}
img {
  width: 100%;
  max-width: 350px;
}
button {
  box-shadow: 2px 2px 8px 1px rgb(184, 184, 184);
  padding: 10px 15px;
  background-color: #30bfc2;
  border: none;
  color: white;
  font-weight: bold;
  font-size: calc(16px + .1vw);
  transition: ease all .2s;
  &:hover {
    background-color: #68cecf;
    cursor: pointer;
  }
  &:focus {outline:0;}
}
.delete-button {
  box-shadow: none;
  transition: ease all .2s;
  padding: 2px 6px;
  background-color: transparent;
  color: rgb(157, 29, 0);
  &:hover {
    background-color: rgb(255, 190, 175);
    cursor: pointer;
  }
}
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: calc(70px + 5vw)  calc(20px + 1vw);
}
.small-hr {
  margin: 0 auto;
  width: calc(26px + 1vw);
  height: calc(3px + .15vw);
  background-color: #42b983;
  display: inline-block;
}
.big-hr {
  margin: calc(26px + 1vw) auto 0;
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
  display: inline-block;
}
</style>

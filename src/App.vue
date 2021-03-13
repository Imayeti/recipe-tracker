<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link> 
      <router-link class="nav-link" to="/about">About</router-link> 
      <router-link class="nav-link" to="/saved-recipes">Saved Recipes</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0d653d;
  color: white;
  .nav-link {
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
      color: #beffe2;
    }
    &:hover {
      transition: ease all .2s !important;
      color: #beffe2;
      text-decoration: underline;
    }
  }
}
</style>

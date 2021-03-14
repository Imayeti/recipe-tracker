import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Recipe from '../views/Recipe.vue';
import SavedRecipes from '../views/SavedRecipes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, 
  {
    path: '/saved-recipes',
    name: 'SavedRecipes',
    component: SavedRecipes,
  },   
  {
    path: '/recipe/:type/:id',
    name: 'Recipe',
    component: Recipe,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

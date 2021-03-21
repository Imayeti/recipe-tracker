import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';
import SavedRecipes from '../views/SavedRecipes.vue';
import ShoppingList from '../views/ShoppingList.vue';

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
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: ShoppingList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

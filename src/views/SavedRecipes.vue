<template>
    <div class="container">
        <h1>Your Recipes</h1>
        <div class="saved-recipe" v-for="recipe in savedRecipes" :key="recipe.id">
            <div class="saved-recipe-inner">
                <router-link class="recipe-title" :to="`/recipe/saved/${recipe.id}`">{{recipe.title}}</router-link>
                <button @click="deleteRecipe(recipe)">X</button>
            </div>
        </div>
    </div>
</template>

<script>

import {  mapState, mapActions  } from 'vuex'


export default {
    name: 'SavedRecipes',
    computed: {
    ...mapState([
        'randomRecipes',
        'savedRecipes'
    ])
    },
    data() {
    return {
    };
    },
    methods: {
    ...mapActions([
        'addRecipe',
        'deleteRecipe'
    ]),
    }

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    button {
        transition: ease all .2s;
        padding: 2px 6px;
        background-color: transparent;
        color: rgb(157, 29, 0);
        margin-left: 10px;
        &:hover {
            background-color: rgb(255, 190, 175);
            cursor: pointer;
        }
    }
    .saved-recipe-inner {
        display: inline-block;
        font-size: calc(18px + .2vw);
        position: relative;
        transition: ease all .2s;
        padding: calc(5px + .4vw) 0;
        font-weight: bold;
        padding: calc(5px + .4vw);
        &:hover {
            background-color: #dcffef;
        }
    }
</style>



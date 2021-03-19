<template>
    <div class="container">
        <h1>Your Recipes</h1>
        <draggable  :list="savedBreakfastRecipes" group="people">
            <div  
                v-for="recipe in savedBreakfastRecipes" 
                :key="recipe.id"
            >
                <div class="saved-recipe-inner">
                    <span><i class="fas fa-expand-arrows-alt"></i></span>
                    <router-link class="recipe-title" :to="`/recipe/saved/${recipe.id}`">{{recipe.title}}</router-link>
                    <button @click="deleteRecipe(recipe, 'breakfast')">X</button>
                </div>
            </div>
        </draggable>
        <div class="small-hr"></div>
        <div class="saved-recipes">
            <draggable :list="savedRecipes" group="people">
                <div  
                    v-for="recipe in savedRecipes" 
                    :key="recipe.id"
                >
                    <div class="saved-recipe-inner">
                        <span><i class="fas fa-expand-arrows-alt"></i></span>
                        <router-link class="recipe-title" :to="`/recipe/saved/${recipe.id}`">{{recipe.title}}</router-link>
                        <button @click="deleteRecipe(recipe, 'unassigned')">X</button>
                    </div>
                </div>
             </draggable>
        </div>

        
    </div>
</template>

<script>

import {  mapState, mapActions  } from 'vuex'
import draggable from 'vuedraggable'

export default {
    name: 'SavedRecipes',
    components: {
        draggable
    },
    computed: {
        ...mapState([
            'randomRecipes',
        ]),
        savedRecipes: {
            get() {
                return this.$store.state.savedRecipes
            },
            set(value) {
                this.$store.commit('updateSavedRecipesList', value)
            }
        },
        savedBreakfastRecipes: {
            get() {
                return this.$store.state.savedBreakfastRecipes
            },
            set(value) {
                this.$store.commit('updateSavedBreakfastRecipesList', value)
            }
        },
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
    },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    button {
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
</style>



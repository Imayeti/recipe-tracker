<template>
    <button v-if="!saved" @click="addRecipeHandler(recipe)">{{buttonText}}</button> 
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    name: 'SaveRecipeButton',
    props: {
        recipe: Object,
        saved: Boolean,
    },
    data() {
        return {
            buttonText: "Save Recipe"
        };
    },
    methods: {
        ...mapActions([
            'addRecipe',
        ]),
        addRecipeHandler(recipe) {
            this.addRecipe(recipe)
            this.toggleButtonText();
        },
        toggleButtonText() {
            // console.log('recipe id: ', this.recipe.id);
            // console.log('this.recipes.savedRecipes: ',this.recipes.savedRecipes);
            if(this.recipes.savedRecipes.find((x) => x.id === this.recipe.id)){
                this.buttonText = "Recipe Saved!";
            } 
        }
    },
    computed: {
        ...mapState([
            'recipes',
        ]),
    },
    mounted() {
        this.toggleButtonText();
    }
};

</script>
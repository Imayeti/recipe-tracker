<template>
    <button @click="addRecipe(recipe)">Save Recipe</button> 
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'SaveRecipeButton',
    props: {
        recipe: Object,
    },
    data() {
        return {
        };
    },
    methods: {
        ...mapActions([
            'addRecipe',
        ]),
    }
};

</script>
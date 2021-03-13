<template>
  <div class="about container">
    <h1>{{recipe.title}}</h1>
    <img :src="recipe.image" alt="">
    <p v-html="recipe.summary"></p>
    
    <SaveRecipeButton :recipe="recipe" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import SaveRecipeButton from '@/components/SaveRecipeButton.vue';

export default {
    name: 'MainBoard',
    components: {
        SaveRecipeButton
    },
    computed: {
    ...mapState([
        'randomRecipes',
        'savedRecipes'
    ])
    },
    data() {
        return {
            recipe: {},
        };
    },
    mounted() {
        if(this.$route.params.type === 'fresh'){
            console.log(this.$route.params.id);
            this.recipe = this.randomRecipes.find((x) => x.id === parseInt(this.$route.params.id));
        }else if(this.$route.params.type === 'saved') {
            this.recipe = this.savedRecipes.find((x) => x.id === parseInt(this.$route.params.id));
        }
       
    },
    methods: {
    },
};

</script>
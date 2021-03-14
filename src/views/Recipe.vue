<template>
  <div class="about container">
    <h1>{{recipe.title}}</h1>
    <img :src="recipe.image" alt="">
    <p v-html="recipe.summary"></p>
    <div class="short-info">
        <p>Dairy Free: {{recipe.dairyFree}}</p>
        <p>Gluten Free: {{recipe.glutenFree}}</p>
        <p>Health Score: {{recipe.healthScore}}</p>
    </div>
    <div class="lower-text">
        <h4>Ingredients</h4>
        <ol>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
                {{ingredient.original}}
            </li>
        </ol>
        <h4>Instructions</h4>
        <p  v-html="recipe.instructions"></p>
    </div>
    
    
    <SaveRecipeButton :saved="saved" :recipe="recipe" />
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
            saved: false,
            
        };
    },
    created() {
        if(this.$route.params.type === 'fresh'){
            this.recipe = this.randomRecipes.find((x) => x.id === parseInt(this.$route.params.id));
        }else if(this.$route.params.type === 'saved') {
            this.saved = true;
            this.recipe = this.savedRecipes.find((x) => x.id === parseInt(this.$route.params.id));
        }
    },
    methods: {
    },
};

</script>

<style scoped lang="scss">
.short-info {
    p {
        display: inline-block;
        padding: 10px;
    }
}
ul {
    text-align: left;
}
li {
    display: block;
    list-style-type: disc;
}
h1 {
    margin-bottom: calc(15px + 1vw);
}
.lower-text {
    text-align: left;
    ol {
        padding-inline-start: calc(15px + 3vw);
    }
    h4 {
        padding-left: calc(15px + 3vw);
    }
}
</style>
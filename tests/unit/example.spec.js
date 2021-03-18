import { shallowMount, createLocalVue } from '@vue/test-utils'
import SaveRecipeButton from '@/components/SaveRecipeButton.vue'
import randomRecipes from '../../src/data/recipes'


import Vuex from 'vuex';
let wrapper;
let store;
let actions;
let mutations;
let state;
const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  actions = {
    someAction: jest.fn()
};
mutations = {
    someMutation: jest.fn()
};
state = {
    key: {}
};
store = new Vuex.Store({
    actions,
    mutations,
    state,

});
    wrapper = shallowMount(SaveRecipeButton, {
        propsData: {
          recipe: randomRecipes.recipes[0],
          saved: false
        },
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('SaveRecipeButton', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});

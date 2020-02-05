import Vuex from 'vuex';
import Vue from 'vue';
import Product from './modules/product';
import *as getters from './getters';
import *as mutations from './mutations';
import *as actions from './actions';

Vue.use(Vuex);

export const store =new Vuex.Store({
    state:{
        sell:0.0,
        purchase:0.0,
        balance:0.0
    },
    getters,
    mutations,
    actions,
    modules:{
        Product
    }
});
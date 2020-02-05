import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from './products/product-list'
import ProductOperations from './products/product-sell'
import ProductPurchase from './products/product-purchase'

Vue.use(VueRouter);

const routes=[
    {path:'/',component:ProductList},
    {path:'/operation',component:ProductOperations},
    {path:'/purchase',component:ProductPurchase},
    {path:'*',redirect:"/"},
];


export const router = new VueRouter({
    mode:'history',
    routes,
});


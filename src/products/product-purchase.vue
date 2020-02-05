<template>
    <div class="container">
        <div class="loading" :style="showLoading">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product export</h3>
                    <hr>
                    <div class="form-group">
                        <label>Product name</label>
                        <select class="form-control" v-model="selectedProduct" @change="checkProduct">
                            <option
                                    :disabled="parseInt(product.count)===0"
                                    v-for="product in getProducts"
                                    :value="product.key">
                                {{product.title}}
                            </option>
                        </select>
                    </div>
                        <transition name="fade" mode="out-in">
                            <div class="card mb-2 border border-danger" v-if="product!=null">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <div class="mb-3">
                                                <span class="badge badge-info">Stock : {{product.count}}</span>
                                                <span class="badge badge-primary">Price : {{product.price | currency}}</span>
                                            </div>
                                            <p class="border border-warning p-2 text-secondary">
                                                {{product.description}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    <div class="form-group">
                        <label>Count</label>
                        <input type="number"  v-model="productCount" class="form-control" placeholder="Type product count..">
                    </div>
                    <hr>
                    <button @click="save" :disabled="saveEnabled" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return{
                selectedProduct:null,
                product:null,
                productCount:null,
                saveBtnClicked:false
            }
        },
        methods:{
            checkProduct(){
                this.product=this.$store.getters.getProduct(this.selectedProduct)[0];
            },
            save(){
                let product={
                    count:this.productCount,
                    key:this.selectedProduct
                };
                this.saveBtnClicked=true;
                this.$store.dispatch("sellProduct",product);
            },

        },
        beforeRouteLeave(to,from,next){
            if ((this.selectedProduct!=null || parseInt(this.productCount)>0) && !this.saveBtnClicked){
                if (confirm('You have unsaved data. Are you sure?')){
                    next();
                }else {
                    next(false);
                }
            }else {
                next();
            }
        },

        computed:{
            ...mapGetters(['getProducts']),
            saveEnabled(){
                if (this.selectedProduct!=null && this.productCount>0){
                    return false;
                }else {
                    return true;
                }
            },
            showLoading(){
                if (this.saveBtnClicked){
                    return "display:block";
                }else {
                    return "display:none";
                }
            }

        }
    }
</script>

<style scoped>
    .border-danger {
        border-style: dashed !important;
    }
</style>
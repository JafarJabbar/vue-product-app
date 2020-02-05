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
                    <h3>Product operations</h3>
                    <hr>
                    <div class="form-group">
                        <label>Product name</label>
                        <input type="text" v-model="product.title" class="form-control" placeholder="Enter product name..">
                    </div>
                    <div class="form-group">
                        <label>Count</label>
                        <input type="number" v-model="product.count" class="form-control" placeholder="Enter product count..">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="product.price" class="form-control" placeholder="Enter product price..">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea cols="30" v-model="product.description" rows="5" placeholder="Enter product description..."
                                  class="form-control"></textarea>
                    </div>
                    <hr>
                    <button class="btn btn-primary" :disabled="saveEnabled" @click="saveProduct">Save</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "product-sell",
        data(){
            return{
                product:{
                    title:"",
                    count:null,
                    price:null,
                    description:"",
                },
                btnClicked:false
            }

        },
        methods:{
            saveProduct(){
                this.btnClicked=true;
                this.$store.dispatch("setProduct",this.product)
            },
        },
        computed:{
            saveEnabled(){
                if (this.product.title.length>0 && this.product.count>0 && this.product.price>0 && this.product.description.length>0){
                    return false;
                }else {
                    return true;
                }
            },
            showLoading(){
                if (this.btnClicked){
                    return "display:block";
                }else {
                    return "display:none";
                }
            }
        },
            beforeRouteLeave(to,from,next){
                if ((this.product.title.length>0 || this.product.count>0 || this.product.price>0 || this.product.description.length>0) && !this.btnClicked){
                    if (confirm('You have unsaved data. Are you sure?')){
                        next();
                    }else {
                        next(false);
                    }
                }else {
                    next();
                }
            }
    }
</script>

<style scoped>

</style>
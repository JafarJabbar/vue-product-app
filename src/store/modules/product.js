import Vue from 'vue';
import {router} from "../../routes";
const state={
  products:[]
};

const getters={
        getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key => state.products.filter(element => {
            return element.key == key;
        })
    },
};

const mutations ={
  updateProduct(state,payload){
      state.products.push(payload);
  }
};

const actions = {
  initProducts({commit}){
      Vue.http.get('https://product-app-43a49.firebaseio.com/products.json')
          .then(
              (response)=>{
                  console.log(response);
                  let data=response.body;
                  for(let key in data){
                      data[key].key=key;
                      commit('updateProduct',data[key])
                  }
              }
          )
  },
  setProduct({dispatch,commit},payload){
      Vue.http.post('https://product-app-43a49.firebaseio.com/products.json',payload)
          .then(
              (response)=>{
                  payload.key=response.body.name;
                  commit("updateProduct",payload);
                  let tradeResult={
                    purchase:payload.price,
                    sell:0,
                    count:payload.count
                  };
                dispatch('setTradeResult',tradeResult);
                  router.replace('/');

              }
          )
  },
    sellProduct({commit,dispatch},payload){
        let product =state.products.filter(element => {
            return element.key == payload.key;
        });
        if (product){
            let totalCount=product[0].count-payload.count;
            if (totalCount>=0){
                Vue.http.patch('https://product-app-43a49.firebaseio.com/products/'+payload.key+'.json',{count:totalCount})
                    .then(
                        (response)=>{
                            product[0].count=totalCount;
                            let tradeResult={
                                purchase:0,
                                sell:product[0].price,
                                count:payload.count
                            };
                            dispatch('setTradeResult',tradeResult);
                            router.replace('/');
                        }
                    );
            }
            else {
                alert("This product count not enough.")
            }
        }

    }
};



export  default {
    state,
    getters,
    mutations,
    actions
}
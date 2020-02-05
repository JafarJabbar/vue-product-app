import Vue from 'vue';

export  const setTradeResult=({state,commit},tradeResult)=>{
    commit('updateTradeResult',tradeResult);
    let tradeData={
        purchase:state.purchase,
        sell:state.sell,
    };

    Vue.http.put('https://product-app-43a49.firebaseio.com/result.json',tradeData)
        .then(
            (response)=>{
                console.log(tradeData);
            },
            (err)=>{
                console.log(err);
            }
        )
};
export const getTradeResult=({commit})=>{
    Vue.http.get('https://product-app-43a49.firebaseio.com/result.json')
        .then(
            (response)=>{
                commit("updateTradeResult",response.body);
            }
        )
};
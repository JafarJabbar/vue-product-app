export const updateTradeResult=(state,payload)=>{
    if (payload.count){
        state.purchase+=parseFloat(payload.purchase)*parseInt(payload.count);
        state.sell+=parseFloat(payload.sell)*parseInt(payload.count);
    }else {
        state.purchase+=parseFloat(payload.purchase);
        state.sell+=parseFloat(payload.sell);
    }
    state.balance=parseFloat(state.sell)-parseFloat(state.purchase);
};
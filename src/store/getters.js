export const getTradeResult=(state)=>{
    return {
        purchase:state.purchase,
        sell:state.sell,
        balance:state.balance
    }
};
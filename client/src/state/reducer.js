export const initialState={
    posts:[],
    user:null
};
//selector


const reducer = (state,action) =>{
    switch(action.type){
        case 'ALL_POST':
            return{
                posts:action.item,
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(`cant remove product (id: ${action.id})as it is not in the basket!`)
            }
            return{
                ...state,
                basket:newBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    };
}

export default reducer;
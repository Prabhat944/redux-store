import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState={toggle:false,cartitem:[],quantity:0,total:0};
const storeSlice=createSlice({
    name:'store',
    initialState:initialState,
    reducers:{
        showcart(state){
            state.toggle=!state.toggle;
        },
        addtocart(state,action){
            const current=action.payload;
            const index=state.cartitem.findIndex(item=>item.title===current.title);
            if(index > -1){
                const existing={...state.cartitem[index]};
                
                state.cartitem[index]={
                    ...existing,
                    amount:existing.amount,
                    quantity:existing.quantity + 1,
                    total:existing.total + current.price};
            }else{
                state.cartitem=[...state.cartitem,{...current,quantity:1,total:current.price}]
            }
            
            state.quantity=state.quantity + 1;
            state.total=state.total + Number(current.price);
            
        },
        removefromcart(state,action){
            const current=action.payload;
           
            if(current.quantity <= 1){
                state.cartitem=state.cartitem.filter(item=>item.title!==current.title);
            }else{
               const index=state.cartitem.findIndex(item=>item.title===current.title);
               const existing={...state.cartitem[index]};
               state.cartitem[index]={
                ...existing,
                quantity:existing.quantity-1,
                total:existing.total-existing.price
               }
            }
            state.quantity=state.quantity - 1;
            state.total=state.total - Number(current.price);
        }
    }
});

const store=configureStore({
    reducer:storeSlice.reducer
});

export const storeActions=storeSlice.actions;
export default store;
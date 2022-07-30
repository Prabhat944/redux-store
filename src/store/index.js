import {createSlice,configureStore} from '@reduxjs/toolkit';


const storeSlice=createSlice({
    name:'store',
    initialState:{toggle:false},
    reducers:{
        showcart(state){
            state.toggle=!state.toggle;
        }
    }
}
);


const store=configureStore({
    reducer:storeSlice.reducer
});

export const storeActions=storeSlice.actions;

export default store;
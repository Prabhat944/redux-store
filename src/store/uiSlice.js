import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{toggle:false},
    reducers:{
        carttoggle(state){
            state.toggle=!state.toggle;
            
        }
    }
});

export const uiActions=uiSlice.actions;

export default uiSlice;
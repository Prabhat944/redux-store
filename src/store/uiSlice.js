import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{toggle:false,notification:{status:'',type:'',message:''},initial:true,shownotify:false},
    reducers:{
        carttoggle(state){
            state.toggle=!state.toggle;
            
        },
        notify(state,action){
            state.notification={status:action.payload.status,type:action.payload.type,message:action.payload.message}
        },
        showstatus(state,action){
            state.shownotify=action.payload;
        }

    }
});

export const uiActions=uiSlice.actions;

export default uiSlice;
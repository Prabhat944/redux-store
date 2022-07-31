import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartstore';
import uiSlice from './uiSlice';


const store=configureStore({
    reducer:{cart:cartSlice.reducer, ui:uiSlice.reducer}
});

export default store;
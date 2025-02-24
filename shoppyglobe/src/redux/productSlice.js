import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const fetchProducts=createAsyncThunk
const productSlice=createSlice({
    name:'products',
    initialState:{
        items:[],
        status:'idle'
    }
})
export default productSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import prod from './products.json'

const initialState = {
    products: prod,
}


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})

export default productsSlice.reducer;
export const productsSelect = state => state.productsSlice;
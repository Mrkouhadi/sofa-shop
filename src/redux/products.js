import { createSlice } from "@reduxjs/toolkit";
import {DATA} from '../data/data';

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    prods: DATA
    },
  reducers: {
    AllProducts: (state) => {
      state.prods = DATA;
    },
    selectCategory :(state, {payload}) =>{
        state.prods = DATA.filter(prod => prod.category === payload);
    }
  }
});

export const { AllProducts, selectCategory } = productsSlice.actions;
export default productsSlice.reducer;
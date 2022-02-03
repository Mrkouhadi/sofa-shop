import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProds:[]
    },
  reducers: {
    addToCart: (state, {payload})=>{
       const exist = state.cartProds.some(prod => prod.id === payload.id ? true : false);
       if(exist){
          state.cartProds =  state.cartProds.map(prod => prod.id === payload.id ? {...prod, quantity: prod.quantity + 1}: prod);
       }else{
          state.cartProds = [...state.cartProds, {...payload, quantity: 1}];
       }
    },
    removeFromCart :(state, {payload}) =>{
      const exist1 = state.cartProds.find(prod => prod.id === payload.id);
        if(exist1.quantity === 1){
            state.cartProds = state.cartProds.filter(prod => prod.id !== exist1.id);
        }else{
            state.cartProds = state.cartProds.map(prod => prod.id === payload.id ? {...prod, quantity: prod.quantity - 1} : prod);
        }
    },
    removeAll :(state, {payload}) =>{
      state.cartProds = state.cartProds.filter(prod => prod.id !== payload.id);
    }
  }
});
export const { addToCart, removeFromCart, removeAll} = cartSlice.actions;
export default cartSlice.reducer;
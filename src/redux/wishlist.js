import { createSlice } from "@reduxjs/toolkit";



export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProds:[]
    },
  reducers: {
    addToWishlist: (state, {payload})=>{
       const exist = state.wishlistProds.some( prod => prod.id === payload.id ? true : false );
       if(!exist){
          state.wishlistProds = [...state.wishlistProds, payload];
       }
    },
    removeFromWishlist :(state, {payload}) =>{
      state.wishlistProds = state.wishlistProds.filter( prod => prod.id !== payload.id );
    }
  }
});
export const {addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
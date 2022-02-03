import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
        name: "auth",
        initialState: {
              auth:JSON.parse(localStorage.getItem("auth")) || {email:"", password:""}
          },
        reducers: {
          LogIn: (state, {payload})=>{
            localStorage.setItem('auth', JSON.stringify(payload))
            state.auth = payload;
          },
          LogOut: (state)=>{
            localStorage.setItem('auth', JSON.stringify({email:"", password:""}))
              state.auth = {email:"", password:""}
          },
        }
});


export const {LogIn, LogOut} = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState=0

const counterSlice=createSlice({
    name: 'counter',
    initialState:initialState,
    reducers:{
         increase:(state,action) =>state + (action.payload || 1),
         decrease:state =>state-1, 
         reset: state =>initialState

    }
})

export const {increase,decrease,reset}=counterSlice.actions;

export default counterSlice.reducer;
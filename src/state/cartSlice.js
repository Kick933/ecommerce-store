import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState : {
        products : {}
    },
    reducers :{
        add :  (state,action) => {
            // Use product as identifier and count as key.
            state.products[action.payload] = 1
        },
        increment: (state,action) => {
            state.products[action.payload] += 1
        },
        decrement: (state,action) => {
            if(state.products[action.payload] > 1){
                state.products[action.payload] -= 1
            }else{
                state.products[action.payload] = 0
            }
        }
    }
})

export const {add,increment, decrement} = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState : {
        products : {}
    },
    reducers :{
        add :  (state,action) => {
            // Use product as identifier and count as key.
            state.products[action.payload.id] = {...action.payload.data,count:1}
        },
        increment: (state,action) => {
            state.products[action.payload.id].count++
        },
        decrement: (state,action) => {
            if(state.products[action.payload.id].count > 1){
                state.products[action.payload.id].count--
            }else{
                delete state.products[action.payload.id]
            }
        },
    }
})

export const {add,increment, decrement} = cartSlice.actions

export default cartSlice.reducer